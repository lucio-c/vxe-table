(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230f8c"],{ef0e:function(e,n,d){"use strict";d.r(n);var t=function(){var e=this,n=e.$createElement,d=e._self._c||n;return d("div",[d("p",{staticClass:"tip"},[e._v("设置 "),d("table-api-link",{attrs:{prop:"edit-config"}}),e._v(" 的 "),d("table-api-link",{attrs:{prop:"activeMethod"}}),e._v(" 方法判断单元格是否禁用，例如：限制第二行不允许编辑")],1),d("vxe-grid",e._b({on:{"edit-disabled":e.editDisabledEvent},scopedSlots:e._u([{key:"name_edit",fn:function(n){var t=n.row;return[d("vxe-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"row.name"}})]}},{key:"sex_edit",fn:function(n){var t=n.row;return[d("vxe-input",{model:{value:t.sex,callback:function(n){e.$set(t,"sex",n)},expression:"row.sex"}})]}},{key:"age_edit",fn:function(n){var t=n.row;return[d("vxe-input",{model:{value:t.age,callback:function(n){e.$set(t,"age",n)},expression:"row.age"}})]}},{key:"address_edit",fn:function(n){var t=n.row;return[d("vxe-input",{model:{value:t.address,callback:function(n){e.$set(t,"address",n)},expression:"row.address"}})]}}])},"vxe-grid",e.gridOptions1,!1)),d("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),d("pre",[e._v("    "),d("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),d("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),d("p",{staticClass:"tip"},[e._v("配合 "),d("table-api-link",{attrs:{prop:"edit-actived"}}),e._v(" 事件，实现行编辑中对列的权限控制，例如：限制 age 小于 27 的与 name 为 'x' 开头的列禁止编辑")],1),d("vxe-grid",e._b({ref:"xGrid2",on:{"edit-actived":e.editActivedEvent},scopedSlots:e._u([{key:"name_edit",fn:function(n){var t=n.row;return[d("vxe-input",{attrs:{disabled:e.disabledName},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"row.name"}})]}},{key:"sex_edit",fn:function(n){var t=n.row;return[d("vxe-input",{attrs:{disabled:e.disabledSex},model:{value:t.sex,callback:function(n){e.$set(t,"sex",n)},expression:"row.sex"}})]}},{key:"age_edit",fn:function(n){var t=n.row;return[d("vxe-input",{attrs:{disabled:e.disabledAge},model:{value:t.age,callback:function(n){e.$set(t,"age",n)},expression:"row.age"}})]}},{key:"address_edit",fn:function(n){var t=n.row;return[d("vxe-input",{model:{value:t.address,callback:function(n){e.$set(t,"address",n)},expression:"row.address"}})]}}])},"vxe-grid",e.gridOptions2,!1)),d("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),d("pre",[e._v("    "),d("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),d("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1)],1)},i=[],a=(d("b0c0"),{data:function(){return{gridOptions1:{border:!0,showOverflow:!0,editConfig:{trigger:"click",mode:"row",activeMethod:this.activeRowMethod},columns:[{type:"seq",width:50},{field:"name",title:"Name",editRender:{},slots:{edit:"name_edit"}},{field:"sex",title:"Sex",editRender:{},slots:{edit:"sex_edit"}},{field:"age",title:"Age",editRender:{},slots:{edit:"age_edit"}},{field:"address",title:"Address",editRender:{},slots:{edit:"address_edit"}}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"}]},disabledName:!1,disabledSex:!1,disabledAge:!1,gridOptions2:{border:!0,showOverflow:!0,editConfig:{trigger:"click",mode:"row"},columns:[{type:"seq",width:50},{field:"name",title:"Name",editRender:{},slots:{edit:"name_edit"}},{field:"sex",title:"Sex",editRender:{},slots:{edit:"sex_edit"}},{field:"age",title:"Age",editRender:{},slots:{edit:"age_edit"}},{field:"address",title:"Address",editRender:{},slots:{edit:"address_edit"}}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"x1111",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"}]},demoCodes:['\n        <vxe-grid v-bind="gridOptions1" @edit-disabled="editDisabledEvent">\n          <template #name_edit="{ row }">\n            <vxe-input v-model="row.name"></vxe-input>\n          </template>\n          <template #sex_edit="{ row }">\n            <vxe-input v-model="row.sex"></vxe-input>\n          </template>\n          <template #age_edit="{ row }">\n            <vxe-input v-model="row.age"></vxe-input>\n          </template>\n          <template #address_edit="{ row }">\n            <vxe-input v-model="row.address"></vxe-input>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions1: {\n                border: true,\n                showOverflow: true,\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row',\n                  activeMethod: this.activeRowMethod\n                },\n                columns: [\n                  { type: 'seq', width: 50 },\n                  { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },\n                  { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit' } },\n                  { field: 'age', title: 'Age', editRender: {}, slots: { edit: 'age_edit' } },\n                  { field: 'address', title: 'Address', editRender: {}, slots: { edit: 'address_edit' } }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }\n                ]\n              }\n            }\n          },\n          methods: {\n            activeRowMethod ({ row, rowIndex }) {\n              if (rowIndex === 1) {\n                return false\n              }\n              return true\n            },\n            editDisabledEvent ({ row, column }) {\n              console.log('禁止编辑')\n            }\n          }\n        }\n        ",'\n        <vxe-grid ref="xGrid2" v-bind="gridOptions2" @edit-actived="editActivedEvent">\n          <template #name_edit="{ row }">\n            <vxe-input v-model="row.name" :disabled="disabledName"></vxe-input>\n          </template>\n          <template #sex_edit="{ row }">\n            <vxe-input v-model="row.sex" :disabled="disabledSex"></vxe-input>\n          </template>\n          <template #age_edit="{ row }">\n            <vxe-input v-model="row.age" :disabled="disabledAge"></vxe-input>\n          </template>\n          <template #address_edit="{ row }">\n            <vxe-input v-model="row.address"></vxe-input>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              disabledName: false,\n              disabledSex: false,\n              disabledAge: false,\n              gridOptions2: {\n                border: true,\n                showOverflow: true,\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row'\n                },\n                columns: [\n                  { type: 'seq', width: 50 },\n                  { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },\n                  { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit' } },\n                  { field: 'age', title: 'Age', editRender: {}, slots: { edit: 'age_edit' } },\n                  { field: 'address', title: 'Address', editRender: {}, slots: { edit: 'address_edit' } }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }\n                ]\n              }\n            }\n          },\n          methods: {\n            editActivedEvent ({ row }) {\n              // name 为 'x' 开头的列禁止编辑\n              this.disabledName = (row.name || '').indexOf('x') === 0\n              // age 小于 27 的列禁止编辑\n              this.disabledAge = row.age < 27\n              // sex 值编辑为 1 的列禁止编辑\n              this.disabledSex = row.sex === 'Women'\n            }\n          }\n        }\n        "]}},methods:{activeRowMethod:function(e){var n=e.rowIndex;return 1!==n},editActivedEvent:function(e){var n=e.row;this.disabledName=0===(n.name||"").indexOf("x"),this.disabledAge=n.age<27,this.disabledSex="Women"===n.sex},editDisabledEvent:function(){console.log("禁止编辑")}}}),s=a,o=d("2877"),r=Object(o["a"])(s,t,i,!1,null,null,null);n["default"]=r.exports}}]);