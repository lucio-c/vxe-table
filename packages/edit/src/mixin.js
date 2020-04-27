import XEUtils from 'xe-utils/methods/xe-utils'
import VXETable from '../../v-x-e-table'
import { UtilTools, DomTools } from '../../tools'

export default {
  methods: {
    /**
     * 往表格中插入临时数据
     *
     * @param {*} records
     */
    _insert (records) {
      return this.insertAt(records)
    },
    /**
     * 往表格指定行中插入临时数据
     * 如果 row 为空则从插入到顶部
     * 如果 row 为 -1 则从插入到底部
     * 如果 row 为有效行则插入到该行的位置
     * @param {Object/Array} records 新的数据
     * @param {Row} row 指定行
     */
    _insertAt (records, row) {
      const { afterFullData, editStore, scrollYLoad, tableFullData, treeConfig } = this
      if (treeConfig) {
        throw new Error(UtilTools.getLog('vxe.error.noTree', ['insert']))
      }
      if (!XEUtils.isArray(records)) {
        records = [records]
      }
      const nowData = afterFullData
      const newRecords = records.map(record => this.defineField(Object.assign({}, record)))
      if (!row) {
        nowData.unshift(...newRecords)
        tableFullData.unshift(...newRecords)
      } else {
        if (row === -1) {
          nowData.push(...newRecords)
          tableFullData.push(...newRecords)
        } else {
          const targetIndex = nowData.indexOf(row)
          if (targetIndex === -1) {
            throw new Error(UtilTools.error('vxe.error.unableInsert'))
          }
          nowData.splice(...([targetIndex, 0].concat(newRecords)))
          tableFullData.splice(...([tableFullData.indexOf(row), 0].concat(newRecords)))
        }
      }
      editStore.insertList.unshift(...newRecords)
      this.handleTableData()
      this.updateFooter()
      this.updateCache()
      this.checkSelectionStatus()
      if (scrollYLoad) {
        this.updateScrollYSpace()
      }
      return this.$nextTick().then(() => {
        this.recalculate()
        return {
          row: newRecords.length ? newRecords[newRecords.length - 1] : null,
          rows: newRecords
        }
      })
    },
    /**
     * 删除指定行数据
     * 如果传 row 则删除一行
     * 如果传 rows 则删除多行
     * 如果为空则删除所有
     */
    _remove (rows) {
      const { afterFullData, tableFullData, editStore, treeConfig, checkboxOpts, selection, isInsertByRow, scrollYLoad } = this
      const { removeList, insertList } = editStore
      const { checkField: property } = checkboxOpts
      let rest = []
      const nowData = afterFullData
      if (treeConfig) {
        throw new Error(UtilTools.getLog('vxe.error.noTree', ['remove']))
      }
      if (!rows) {
        rows = tableFullData
      } else if (!XEUtils.isArray(rows)) {
        rows = [rows]
      }
      // 如果是新增，则保存记录
      rows.forEach(row => {
        if (!isInsertByRow(row)) {
          removeList.push(row)
        }
      })
      // 如果绑定了多选属性，则更新状态
      if (!property) {
        XEUtils.remove(selection, row => rows.indexOf(row) > -1)
      }
      // 从数据源中移除
      if (tableFullData === rows) {
        rows = rest = tableFullData.slice(0)
        tableFullData.length = 0
        nowData.length = 0
      } else {
        rest = XEUtils.remove(tableFullData, row => rows.indexOf(row) > -1)
        XEUtils.remove(nowData, row => rows.indexOf(row) > -1)
      }
      // 从新增中移除已删除的数据
      XEUtils.remove(insertList, row => rows.indexOf(row) > -1)
      this.handleTableData()
      this.updateFooter()
      this.updateCache()
      this.checkSelectionStatus()
      if (scrollYLoad) {
        this.updateScrollYSpace()
      }
      return this.$nextTick().then(() => {
        this.recalculate()
        return { row: rest.length ? rest[rest.length - 1] : null, rows: rest }
      })
    },
    _removeSelecteds () {
      // 在 v3 中废弃 removeSelecteds
      UtilTools.warn('vxe.error.delFunc', ['removeSelecteds', 'removeCheckboxRow'])
      return this.removeCheckboxRow()
    },
    /**
     * 删除复选框选中的数据
     */
    _removeCheckboxRow () {
      return this.remove(this.getCheckboxRecords()).then(params => {
        this.clearCheckboxRow()
        return params
      })
    },
    /**
     * 删除单选框选中的数据
     */
    _removeRadioRow () {
      const radioRecord = this.getRadioRecord()
      return this.remove(radioRecord || []).then(params => {
        this.clearRadioRow()
        return params
      })
    },
    /**
     * 删除当前行选中的数据
     */
    _removeCurrentRow () {
      const currentRecord = this.getCurrentRecord()
      return this.remove(currentRecord || []).then(params => {
        this.clearCurrentRow()
        return params
      })
    },
    /**
     * 获取表格数据集，包含新增、删除、修改
     */
    _getRecordset () {
      return {
        insertRecords: this.getInsertRecords(),
        removeRecords: this.getRemoveRecords(),
        updateRecords: this.getUpdateRecords()
      }
    },
    /**
     * 获取新增的临时数据
     */
    _getInsertRecords () {
      const insertList = this.editStore.insertList
      const insertRecords = []
      if (insertList.length) {
        this.tableFullData.forEach(row => {
          if (insertList.indexOf(row) > -1) {
            insertRecords.push(row)
          }
        })
      }
      return insertRecords
    },
    /**
     * 获取已删除的数据
     */
    _getRemoveRecords () {
      return this.editStore.removeList
    },
    /**
     * 获取更新数据
     * 只精准匹配 row 的更改
     * 如果是树表格，子节点更改状态不会影响父节点的更新状态
     */
    _getUpdateRecords () {
      const { keepSource, tableFullData, isUpdateByRow, treeConfig, treeOpts } = this
      // 在 v3 中必须要开启 keep-source
      if (!keepSource) {
        UtilTools.warn('vxe.error.reqProp', ['keep-source'])
      }
      if (keepSource) {
        if (treeConfig) {
          return XEUtils.filterTree(tableFullData, row => isUpdateByRow(row), treeOpts)
        }
        return tableFullData.filter(row => isUpdateByRow(row))
      }
      return []
    },
    /**
     * 处理激活编辑
     */
    handleActived (params, evnt) {
      const { editStore, editOpts, tableColumn } = this
      const { mode, activeMethod } = editOpts
      const { actived } = editStore
      const { row, column, cell } = params
      const { editRender } = column
      if (editRender && cell) {
        if (actived.row !== row || (mode === 'cell' ? actived.column !== column : false)) {
          // 判断是否禁用编辑
          let type = 'edit-disabled'
          if (!activeMethod || activeMethod(params)) {
            if (this.keyboardConfig || this.mouseConfig) {
              this.clearCopyed(evnt)
              this.clearChecked()
              this.clearSelected(evnt)
            }
            this.clostTooltip()
            this.clearActived(evnt)
            type = 'edit-actived'
            column.renderHeight = cell.offsetHeight
            actived.args = params
            actived.row = row
            actived.column = column
            if (mode === 'row') {
              tableColumn.forEach(column => this._getColumnModel(row, column))
            } else {
              this._getColumnModel(row, column)
            }
            this.$nextTick(() => {
              this.handleFocus(params, evnt)
            })
          }
          UtilTools.emitEvent(this, type, [Object.assign({ $event: evnt }, params), evnt])
        } else {
          const { column: oldColumn } = actived
          if (oldColumn !== column) {
            const { model: oldModel } = oldColumn
            if (oldModel.update) {
              UtilTools.setCellValue(row, oldColumn, oldModel.value)
            }
            this.clearValidate()
          }
          column.renderHeight = cell.offsetHeight
          actived.args = params
          actived.column = column
          setTimeout(() => {
            this.handleFocus(params, evnt)
          })
        }
        this.isActivated = true
      }
      return this.$nextTick()
    },
    _getColumnModel (row, column) {
      const { model, editRender } = column
      if (editRender) {
        model.value = UtilTools.getCellValue(row, column)
        model.update = false
      }
    },
    _setColumnModel (row, column) {
      const { model, editRender } = column
      if (editRender && model.update) {
        UtilTools.setCellValue(row, column, model.value)
        model.update = false
        model.value = null
      }
    },
    /**
     * 清除激活的编辑
     */
    _clearActived (evnt) {
      const { tableColumn, editStore, editOpts } = this
      const { actived } = editStore
      const { args, row, column } = actived
      if (row || column) {
        if (editOpts.mode === 'row') {
          tableColumn.forEach(column => this._setColumnModel(row, column))
        } else {
          this._setColumnModel(row, column)
        }
        this.updateFooter()
        UtilTools.emitEvent(this, 'edit-closed', [Object.assign({ $event: evnt }, args), evnt])
      }
      actived.args = null
      actived.row = null
      actived.column = null
      return (VXETable._valid ? this.clearValidate() : this.$nextTick()).then(this.recalculate)
    },
    // 在 v3.0 中废弃 getActiveRow
    _getActiveRow () {
      UtilTools.warn('vxe.error.delFunc', ['getActiveRow', 'getActiveRecord'])
      return this.getActiveRecord()
    },
    _getActiveRecord () {
      const { $el, editStore, afterFullData } = this
      const { args, row } = editStore.actived
      if (args && afterFullData.indexOf(row) > -1 && $el.querySelectorAll('.vxe-body--column.col--actived').length) {
        return Object.assign({}, args)
      }
      return null
    },
    // 在 v3.0 中废弃 hasActiveRow
    _hasActiveRow (row) {
      UtilTools.warn('vxe.error.delFunc', ['hasActiveRow', 'isActiveByRow'])
      return this.isActiveByRow(row)
    },
    /**
     * 判断行是否为激活编辑状态
     * @param {Row} row 行对象
     */
    _isActiveByRow (row) {
      return this.editStore.actived.row === row
    },
    /**
     * 处理聚焦
     */
    handleFocus (params) {
      const { row, column, cell } = params
      const { editRender } = column
      if (editRender) {
        const compRender = VXETable.renderer.get(editRender.name)
        const { autofocus, autoselect } = editRender
        let inputElem
        // 如果指定了聚焦 class
        if (autofocus) {
          inputElem = cell.querySelector(autofocus)
        }
        // 渲染器的聚焦处理
        if (!inputElem && compRender && compRender.autofocus) {
          inputElem = cell.querySelector(compRender.autofocus)
        }
        if (inputElem) {
          inputElem.focus()
          if (autoselect) {
            inputElem.select()
          } else {
            // 保持一致行为，光标移到末端
            if (DomTools.browse.msie) {
              const textRange = inputElem.createTextRange()
              textRange.collapse(false)
              textRange.select()
            }
          }
        } else {
          // 显示到可视区中
          this.scrollToRow(row, column)
        }
      }
    },
    /**
     * 激活行编辑
     */
    _setActiveRow (row) {
      return this.setActiveCell(row, XEUtils.find(this.visibleColumn, column => column.editRender).property)
    },
    /**
     * 激活单元格编辑
     */
    _setActiveCell (row, field) {
      return this.scrollToRow(row, true).then(() => {
        if (row && field) {
          const column = XEUtils.find(this.visibleColumn, column => column.property === field)
          if (column && column.editRender) {
            const cell = DomTools.getCell(this, { row, column })
            if (cell) {
              this.handleActived({ row, rowIndex: this.getRowIndex(row), column, columnIndex: this.getColumnIndex(column), cell, $table: this })
              this.lastCallTime = Date.now()
            }
          }
        }
        return this.$nextTick()
      })
    },
    /**
     * 只对 trigger=dblclick 有效，选中单元格
     */
    _setSelectCell (row, field) {
      const { tableData, editOpts, visibleColumn } = this
      if (row && field && editOpts.trigger !== 'manual') {
        const column = XEUtils.find(visibleColumn, column => column.property === field)
        const rowIndex = tableData.indexOf(row)
        if (rowIndex > -1 && column) {
          const cell = DomTools.getCell(this, { row, rowIndex, column })
          const params = { row, rowIndex, column, columnIndex: visibleColumn.indexOf(column), cell }
          this.handleSelected(params, {})
        }
      }
      return this.$nextTick()
    },
    /**
     * 处理选中源
     */
    handleSelected (params, evnt) {
      const { mouseConfig, mouseOpts, editOpts, editStore, elemStore } = this
      const { actived, selected } = editStore
      const { row, column, cell } = params
      const isMouseSelected = mouseConfig && mouseOpts.selected
      // 在 v3.0 中废弃 mouse-config.checked
      const isMouseChecked = mouseConfig && (mouseOpts.range || mouseOpts.checked)
      const selectMethod = () => {
        if ((isMouseSelected || isMouseChecked) && (selected.row !== row || selected.column !== column)) {
          if (actived.row !== row || (editOpts.mode === 'cell' ? actived.column !== column : false)) {
            if (this.keyboardConfig) {
              this.clearChecked(evnt)
              this.clearIndexChecked()
              this.clearHeaderChecked()
              this.clearSelected(evnt)
            }
            this.clearActived(evnt)
            selected.args = params
            selected.row = row
            selected.column = column
            if (isMouseSelected) {
              this.addColSdCls()
            }
            // 如果配置了批量选中功能，则为批量选中状态
            if (isMouseChecked) {
              const headerElem = elemStore['main-header-list']
              this.handleChecked([[cell]])
              if (headerElem) {
                this.handleHeaderChecked([[headerElem.querySelector(`.${column.id}`)]])
              }
              this.handleIndexChecked([[cell.parentNode.querySelector('.col--seq')]])
            }
          }
        }
        return this.$nextTick()
      }
      return selectMethod()
    },
    /**
     * 清除所选中源状态
     */
    _clearSelected () {
      const { selected } = this.editStore
      selected.row = null
      selected.column = null
      this.reColTitleSdCls()
      this.reColSdCls()
      return this.$nextTick()
    },
    reColTitleSdCls () {
      const headerElem = this.elemStore['main-header-list']
      if (headerElem) {
        XEUtils.arrayEach(headerElem.querySelectorAll('.col--title-selected'), elem => DomTools.removeClass(elem, 'col--title-selected'))
      }
    },
    reColSdCls () {
      const cell = this.$el.querySelector('.col--selected')
      if (cell) {
        DomTools.removeClass(cell, 'col--selected')
      }
    },
    addColSdCls () {
      const { selected } = this.editStore
      const { row, column } = selected
      this.reColSdCls()
      if (row && column) {
        const cell = DomTools.getCell(this, { row, column })
        if (cell) {
          DomTools.addClass(cell, 'col--selected')
        }
      }
    }
  }
}
