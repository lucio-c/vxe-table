(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724150c4"],{"35f0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"tip"},[t._v(" 导入数据：通过 "),a("table-api-link",{attrs:{prop:"importData"}}),t._v(" 函数可以直接将数据导入表格中"),a("br"),t._v(" 如果是服务端导出，通过设置 "),a("table-api-link",{attrs:{prop:"remote"}}),t._v(" 和 "),a("table-api-link",{attrs:{prop:"importMethod"}}),t._v(" 开启服务端自定义导入"),a("br"),a("span",{staticClass:"red"},[t._v("（注：附件中的字段名必须和表格一致，数据格式不正确将无法导入；前端导入的数据量有限，建议使用后端导入）")])],1),a("vxe-toolbar",{scopedSlots:t._u([{key:"buttons",fn:function(){return[a("vxe-button",{on:{click:t.clearDataEvent}},[t._v("清空数据")]),a("vxe-button",{on:{click:t.exportDataEvent}},[t._v("导出数据")]),a("vxe-button",{on:{click:t.importDataEvent}},[t._v("导入数据")])]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{"highlight-hover-row":"",height:"400","export-config":{isPrint:!1},data:t.tableData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex",formatter:t.formatterSex}}),a("vxe-table-column",{attrs:{field:"age",title:"Age",sortable:""}}),a("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),a("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),a("pre",[t._v("    "),a("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),a("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n  ")])],1)},o=[],l=(a("fb6a"),a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("7db0"),a("f4e8")),r=a.n(l),i={data:function(){return{tableData:[],sexList:[{label:"女",value:"0"},{label:"男",value:"1"}],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="clearDataEvent">清空数据</vxe-button>\n            <vxe-button @click="exportDataEvent">导出数据</vxe-button>\n            <vxe-button @click="importDataEvent">导入数据</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          export-config\n          highlight-hover-row\n          ref="xTable"\n          height="400"\n          :export-config="{isPrint: false}"\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" :formatter="formatterSex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)\n          },\n          methods: {\n            formatterSex ({ cellValue }) {\n              const item = this.sexList.find(item => item.value === cellValue)\n              return item ? item.label : ''\n            },\n            clearDataEvent () {\n              this.tableData = []\n            },\n            exportDataEvent () {\n              this.$refs.xTable.openExport({\n                // 默认勾选源\n                original: true\n              })\n            },\n            importDataEvent () {\n              this.$refs.xTable.importData()\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,10)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(t){r.a.highlightBlock(t)}))},methods:{formatterSex:function(t){var e=t.cellValue,a=this.sexList.find((function(t){return t.value===e}));return a?a.label:""},clearDataEvent:function(){this.tableData=[]},exportDataEvent:function(){this.$refs.xTable.openExport({original:!0})},importDataEvent:function(){this.$refs.xTable.importData()}}},s=i,c=a("2877"),v=Object(c["a"])(s,n,o,!1,null,null,null);e["default"]=v.exports},"4df4":function(t,e,a){"use strict";var n=a("da84"),o=a("0366"),l=a("c65b"),r=a("7b0b"),i=a("9bdd"),s=a("e95a"),c=a("68ee"),v=a("07fa"),u=a("8418"),b=a("9a1f"),d=a("35a1"),f=n.Array;t.exports=function(t){var e=r(t),a=c(this),n=arguments.length,x=n>1?arguments[1]:void 0,m=void 0!==x;m&&(x=o(x,n>2?arguments[2]:void 0));var p,h,D,_,w,g,E=d(e),k=0;if(!E||this==f&&s(E))for(p=v(e),h=a?new this(p):f(p);p>k;k++)g=m?x(e[k],k):e[k],u(h,k,g);else for(_=b(e,E),w=_.next,h=a?new this:[];!(D=l(w,_)).done;k++)g=m?i(_,x,[D.value,k],!0):D.value,u(h,k,g);return h.length=k,h}},"9bdd":function(t,e,a){var n=a("825a"),o=a("2a62");t.exports=function(t,e,a,l){try{return l?e(n(a)[0],a[1]):e(a)}catch(r){o(t,"throw",r)}}},a630:function(t,e,a){var n=a("23e7"),o=a("4df4"),l=a("1c7e"),r=!l((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:o})}}]);