(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7027b439"],{"1d04":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("删除数据，简单的实现示例")]),n("vxe-virtual-tree",{ref:"xVTree",attrs:{resizable:"","row-key":"","row-id":"id","export-config":{},"toolbar-config":{custom:!0,slots:{buttons:"toolbar_buttons"}},"tree-config":{children:"children"},"edit-config":{trigger:"click",mode:"row"},data:e.tableData,columns:e.tableColumn},scopedSlots:e._u([{key:"toolbar_buttons",fn:function(){return[n("vxe-button",{on:{click:function(t){return e.insertEvent()}}},[e._v("新增")]),n("vxe-button",{on:{click:function(t){return e.removeSelectEvent()}}},[e._v("删除选中")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getSelectEvent}},[e._v("获取选中")])]},proxy:!0}])}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},o=[],i=(n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("c695")),a=n.n(i),l=n("f4e8"),s=n.n(l),c={data:function(){var e=this,t=this.$createElement;return{tableData:[],tableColumn:[{type:"seq",width:120,treeNode:!0},{field:"name",title:"Name",editRender:{name:"input"}},{field:"size",title:"Size",editRender:{name:"input"}},{field:"type",title:"Type",editRender:{name:"input"}},{field:"date",title:"Date",editRender:{name:"input"}},{title:"操作",slots:{default:function(n){var r=n.row;return[t("vxe-button",{on:{click:function(){return e.removeRowEvent(r)}}},["删除"])]}}}],demoCodes:['\n        <vxe-virtual-tree\n          resizable\n          row-key\n          ref="xVTree"\n          row-id="id"\n          :export-config="{}"\n          :toolbar-config="{custom: true, slots: {buttons: \'toolbar_buttons\'}}"\n          :tree-config="{children: \'children\'}"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          :data="tableData"\n          :columns="tableColumn">\n          <template v-slot:toolbar_buttons>\n            <vxe-button @click="insertEvent()">新增</vxe-button>\n            <vxe-button @click="removeSelectEvent()">删除选中</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getSelectEvent">获取选中</vxe-button>\n          </template>\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'seq', width: 120, treeNode: true },\n                { field: 'name', title: 'Name', editRender: { name: 'input' } },\n                { field: 'size', title: 'Size', editRender: { name: 'input' } },\n                { field: 'type', title: 'Type', editRender: { name: 'input' } },\n                { field: 'date', title: 'Date', editRender: { name: 'input' } },\n                {\n                  title: '操作',\n                  slots: {\n                    default: ({ row }) => {\n                      return [\n                        <vxe-button onClick={ e => this.removeRowEvent(row) }>删除</vxe-button>\n                      ]\n                    }\n                  }\n                }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          },\n          methods: {\n            insertEvent () {\n              let xVTree = this.$refs.xVTree\n              let record = {\n                name: '新数据',\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')\n              }\n              xVTree.insert(record).then(({ row }) => xVTree.setActiveRow(row))\n            },\n            removeSelectEvent () {\n              this.$refs.xVTree.removeCheckboxRow()\n            },\n            removeRowEvent (row) {\n              this.$refs.xVTree.remove(row)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xVTree.getRemoveRecords()\n              this.$XModal.alert(removeRecords.length)\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xVTree.getInsertRecords()\n              this.$XModal.alert(insertRecords.length)\n            },\n            getSelectEvent () {\n              let selectRecords = this.$refs.xVTree.getCheckboxRecords()\n              this.$XModal.alert(selectRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=a.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){s.a.highlightBlock(e)}))},methods:{insertEvent:function(){var e=this.$refs.xVTree,t={name:"新数据",date:a.a.toDateString(new Date,"yyyy-MM-dd")};e.insert(t).then((function(t){var n=t.row;return e.setActiveRow(n)}))},removeSelectEvent:function(){this.$refs.xVTree.removeCheckboxRow()},removeRowEvent:function(e){this.$refs.xVTree.remove(e)},getRemoveEvent:function(){var e=this.$refs.xVTree.getRemoveRecords();this.$XModal.alert(e.length)},getInsertEvent:function(){var e=this.$refs.xVTree.getInsertRecords();this.$XModal.alert(e.length)},getSelectEvent:function(){var e=this.$refs.xVTree.getCheckboxRecords();this.$XModal.alert(e.length)}}},d=c,v=n("2877"),u=Object(v["a"])(d,r,o,!1,null,null,null);t["default"]=u.exports},"4df4":function(e,t,n){"use strict";var r=n("da84"),o=n("0366"),i=n("c65b"),a=n("7b0b"),l=n("9bdd"),s=n("e95a"),c=n("68ee"),d=n("07fa"),v=n("8418"),u=n("9a1f"),f=n("35a1"),h=r.Array;e.exports=function(e){var t=a(e),n=c(this),r=arguments.length,b=r>1?arguments[1]:void 0,m=void 0!==b;m&&(b=o(b,r>2?arguments[2]:void 0));var x,g,w,p,R,E,_=f(t),k=0;if(!_||this==h&&s(_))for(x=d(t),g=n?new this(x):h(x);x>k;k++)E=m?b(t[k],k):t[k],v(g,k,E);else for(p=u(t,_),R=p.next,g=n?new this:[];!(w=i(R,p)).done;k++)E=m?l(p,b,[w.value,k],!0):w.value,v(g,k,E);return g.length=k,g}},"9bdd":function(e,t,n){var r=n("825a"),o=n("2a62");e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(a){o(e,"throw",a)}}},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:o})}}]);