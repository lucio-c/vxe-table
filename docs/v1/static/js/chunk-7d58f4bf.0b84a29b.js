(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d58f4bf"],{"4df4":function(t,e,a){"use strict";var n=a("da84"),m=a("0366"),l=a("c65b"),u=a("7b0b"),r=a("9bdd"),o=a("e95a"),i=a("68ee"),s=a("07fa"),d=a("8418"),c=a("9a1f"),b=a("35a1"),f=n.Array;t.exports=function(t){var e=u(t),a=i(this),n=arguments.length,x=n>1?arguments[1]:void 0,v=void 0!==x;v&&(x=m(x,n>2?arguments[2]:void 0));var T,C,p,k,y,_,h=b(e),V=0;if(!h||this==f&&o(h))for(T=s(e),C=a?new this(T):f(T);T>V;V++)_=v?x(e[V],V):e[V],d(C,V,_);else for(k=c(e,h),y=k.next,C=a?new this:[];!(p=l(y,k)).done;V++)_=v?r(k,x,[p.value,V],!0):p.value,d(C,V,_);return C.length=V,C}},"85b6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"tip"},[t._v(" 局部自定义 "),a("table-column-api-link",{attrs:{prop:"formatter"}}),t._v(" 格式化内容"),a("br"),a("span",{staticClass:"red"},[t._v("（注："),a("table-column-api-link",{attrs:{prop:"formatter"}}),t._v(" 只会在指定的 "),a("table-column-api-link",{attrs:{prop:"field"}}),t._v(" 值发生改变时触发格式化，如果想要多字段关联变化请使用"),a("router-link",{staticClass:"nav-link",attrs:{to:{name:"TableTemplate"}}},[t._v("自定义模板")]),t._v("）")],1)],1),a("vxe-table",{attrs:{border:"",data:t.tableData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:""}}),a("vxe-table-column",{attrs:{field:"num",title:"Num",formatter:t.formatterNum,sortable:""}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex",formatter:t.formatterSex,sortable:""}}),a("vxe-table-column",{attrs:{field:"time",title:"Time",formatter:t.formatTime}})],1),a("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),a("pre",[t._v("    "),a("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),a("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n  ")]),a("p",{staticClass:"tip"},[t._v(" 全局格式化内容，使用 "),a("router-link",{staticClass:"link",attrs:{to:{name:"FormatsAPI"}}},[t._v("formats")]),t._v(" 添加格式函数，单元格会在渲染的时候自动调用"),a("br"),a("span",{staticClass:"green"},[t._v("（用于实现业务中统一的格式化处理，这对于很多场景非常有用，减少很多不必要的重复代码）")])],1),a("vxe-table",{attrs:{border:"",data:t.tableData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"date",title:"转日期",width:"180",formatter:"formatDate"}}),a("vxe-table-column",{attrs:{field:"time",title:"转日期格式",width:"140",formatter:["formatDate","yyyy-MM-dd"]}}),a("vxe-table-column",{attrs:{field:"amount",title:"格式化金额",formatter:"formatAmount"}}),a("vxe-table-column",{attrs:{field:"bankCard",title:"银行卡",width:"180",formatter:"formatBankcard"}}),a("vxe-table-column",{attrs:{field:"num7",title:"数值"}}),a("vxe-table-column",{attrs:{field:"num8",title:"截取2位数",formatter:"formatCutNumber"}}),a("vxe-table-column",{attrs:{field:"num9",title:"四舍五入2位数",formatter:"formatFixedNumber"}}),a("vxe-table-column",{attrs:{field:"sex",title:"格式化性别",formatter:"formatSex"}})],1),a("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),a("pre",[t._v("    "),a("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[2]))]),t._v("\n    "),a("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[3]))]),t._v("\n    "),a("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[4]))]),t._v("\n  ")])],1)},m=[],l=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("7db0"),a("f4e8")),u=a.n(l),r=a("c695"),o=a.n(r),i={data:function(){return{tableData:[{id:10001,name:"Test1",bankCard:"6222525678789432",sex:"0",time:1599320111520,date:"2020-11-14T07:14:41.000Z",amount:998.3,num:863.345,num7:863.345,num8:863.345,num9:863.345},{id:10002,name:"Test2",bankCard:"6222525675674564",sex:"1",time:1590820967410,date:"2022-10-24T08:14:18.000Z",amount:777776536.3,num:854.7789,num7:854.7789,num8:854.7789,num9:854.7789},{id:10003,name:"Test3",bankCard:"6222525477686963",sex:"0",time:1599390785410,date:"2020-09-04T06:08:25.000Z",amount:253.486,num:963.1456,num7:963.1456,num8:963.1456,num9:963.1456},{id:10004,name:"Test4",bankCard:"6222525678678946",sex:"1",time:1597385230710,date:"2019-10-20T20:40:20.000Z",amount:9990000.66,num:963.9856,num7:963.9856,num8:963.9856,num9:963.9856},{id:10005,name:"Test5",bankCard:"6222525478909009",sex:"0",time:1591627586920,date:"2020-09-17T11:14:18.000Z",amount:10000.35,num:99.845632,num7:99.845632,num8:99.845632,num9:99.845632},{id:10006,name:"Test6",bankCard:"6222525789898793",sex:"1",time:1599728569710,date:"2021-01-04T10:12:18.000Z",amount:999,num:698.3689,num7:698.3689,num8:698.3689,num9:698.3689},{id:10007,name:"Test7",bankCard:"6222525476534534",sex:"1",time:1590740052710,date:"2020-08-10T08:14:18.000Z",amount:458666.3,num:1000.3658,num7:1000.3658,num8:1000.3658,num9:1000.3658},{id:10008,name:"Test8",bankCard:"6222525445554231",sex:"0",time:1599320425610,date:"2020-05-04T07:17:30.000Z",amount:79999935.6,num:600053.32845,num7:600053.32845,num8:600053.32845,num9:600053.32845}],sexList:[{label:"女",value:"0"},{label:"男",value:"1"}],demoCodes:['\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>\n          <vxe-table-column field="num" title="Num" :formatter="formatterNum" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" :formatter="formatterSex" sortable></vxe-table-column>\n          <vxe-table-column field="time" title="Time" :formatter="formatTime"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', bankCard: '6222525678789432', sex: '0', time: 1599320111520, date: '2020-11-14T07:14:41.000Z', amount: 998.3, num: 863.345, num7: 863.345, num8: 863.345, num9: 863.345 },\n                { id: 10002, name: 'Test2', bankCard: '6222525675674564', sex: '1', time: 1590820967410, date: '2022-10-24T08:14:18.000Z', amount: 777776536.3, num: 854.7789, num7: 854.7789, num8: 854.7789, num9: 854.7789 },\n                { id: 10003, name: 'Test3', bankCard: '6222525477686963', sex: '0', time: 1599390785410, date: '2020-09-04T06:08:25.000Z', amount: 253.486, num: 963.1456, num7: 963.1456, num8: 963.1456, num9: 963.1456 },\n                { id: 10004, name: 'Test4', bankCard: '6222525678678946', sex: '1', time: 1597385230710, date: '2019-10-20T20:40:20.000Z', amount: 9990000.66, num: 963.9856, num7: 963.9856, num8: 963.9856, num9: 963.9856 },\n                { id: 10005, name: 'Test5', bankCard: '6222525478909009', sex: '0', time: 1591627586920, date: '2020-09-17T11:14:18.000Z', amount: 10000.35, num: 99.845632, num7: 99.845632, num8: 99.845632, num9: 99.845632 },\n                { id: 10006, name: 'Test6', bankCard: '6222525789898793', sex: '1', time: 1599728569710, date: '2021-01-04T10:12:18.000Z', amount: 999, num: 698.3689, num7: 698.3689, num8: 698.3689, num9: 698.3689 },\n                { id: 10007, name: 'Test7', bankCard: '6222525476534534', sex: '1', time: 1590740052710, date: '2020-08-10T08:14:18.000Z', amount: 458666.3, num: 1000.3658, num7: 1000.3658, num8: 1000.3658, num9: 1000.3658 },\n                { id: 10008, name: 'Test8', bankCard: '6222525445554231', sex: '0', time: 1599320425610, date: '2020-05-04T07:17:30.000Z', amount: 79999935.6, num: 600053.32845, num7: 600053.32845, num8: 600053.32845, num9: 600053.32845 }\n              ],\n              sexList: [\n                {\n                  label: '女',\n                  value: '0'\n                },\n                {\n                  label: '男',\n                  value: '1'\n                }\n              ]\n            }\n          },\n          methods: {\n            formatterNum ({ cellValue }) {\n              return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: 2 })\n            },\n            formatterSex ({ cellValue }) {\n              let item = this.sexList.find(item => item.value === cellValue)\n              return item ? item.label : ''\n            },\n            formatTime ({ cellValue, row, column }) {\n              return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')\n            }\n          }\n        }\n        ","\n        // 自定义全局的格式化处理函数\n        VXETable.formats.mixin({\n          // 格式化性别\n          formatSex ({ cellValue }) {\n            return cellValue ? (cellValue === '1' ? '男' : '女') : ''\n          },\n          // 格式化下拉选项\n          formatSelect ({ cellValue }, list) {\n            const item = list.find(item => item.value === cellValue)\n            return item ? item.label : ''\n          },\n          // 格式化日期，默认 yyyy-MM-dd HH:mm:ss\n          formatDate ({ cellValue }, format) {\n            return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')\n          },\n          // 四舍五入金额，每隔3位逗号分隔，默认2位数\n          formatAmount ({ cellValue }, digits = 2) {\n            return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: digits })\n          },\n          // 格式化银行卡，默认每4位空格隔开\n          formatBankcard ({ cellValue }) {\n            return XEUtils.commafy(XEUtils.toString(cellValue), { spaceNumber: 4, separator: ' ' })\n          },\n          // 四舍五入,默认两位数\n          formatFixedNumber ({ cellValue }, digits = 2) {\n            return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)\n          },\n          // 向下舍入,默认两位数\n          formatCutNumber ({ cellValue }, digits = 2) {\n            return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)\n          },\n          // 转换 moment 类型为字符串\n          toMomentString ({ cellValue }, format) {\n            return cellValue ? cellValue.format(format) : ''\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="date" title="转日期" width="180" formatter="formatDate"></vxe-table-column>\n          <vxe-table-column field="time" title="转日期格式" width="140" :formatter="[\'formatDate\', \'yyyy-MM-dd\']"></vxe-table-column>\n          <vxe-table-column field="amount" title="格式化金额" formatter="formatAmount"></vxe-table-column>\n          <vxe-table-column field="bankCard" title="银行卡" width="180" formatter="formatBankcard"></vxe-table-column>\n          <vxe-table-column field="num7" title="数值"></vxe-table-column>\n          <vxe-table-column field="num8" title="截取2位数" formatter="formatCutNumber"></vxe-table-column>\n          <vxe-table-column field="num9" title="四舍五入2位数" formatter="formatFixedNumber"></vxe-table-column>\n          <vxe-table-column field="sex" title="格式化性别" formatter="formatSex"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', bankCard: '6222525678789432', sex: '0', time: 1599320111520, date: '2020-11-14T07:14:41.000Z', amount: 998.3, num: 863.345, num7: 863.345, num8: 863.345, num9: 863.345 },\n                { id: 10002, name: 'Test2', bankCard: '6222525675674564', sex: '1', time: 1590820967410, date: '2022-10-24T08:14:18.000Z', amount: 777776536.3, num: 854.7789, num7: 854.7789, num8: 854.7789, num9: 854.7789 },\n                { id: 10003, name: 'Test3', bankCard: '6222525477686963', sex: '0', time: 1599390785410, date: '2020-09-04T06:08:25.000Z', amount: 253.486, num: 963.1456, num7: 963.1456, num8: 963.1456, num9: 963.1456 },\n                { id: 10004, name: 'Test4', bankCard: '6222525678678946', sex: '1', time: 1597385230710, date: '2019-10-20T20:40:20.000Z', amount: 9990000.66, num: 963.9856, num7: 963.9856, num8: 963.9856, num9: 963.9856 },\n                { id: 10005, name: 'Test5', bankCard: '6222525478909009', sex: '0', time: 1591627586920, date: '2020-09-17T11:14:18.000Z', amount: 10000.35, num: 99.845632, num7: 99.845632, num8: 99.845632, num9: 99.845632 },\n                { id: 10006, name: 'Test6', bankCard: '6222525789898793', sex: '1', time: 1599728569710, date: '2021-01-04T10:12:18.000Z', amount: 999, num: 698.3689, num7: 698.3689, num8: 698.3689, num9: 698.3689 },\n                { id: 10007, name: 'Test7', bankCard: '6222525476534534', sex: '1', time: 1590740052710, date: '2020-08-10T08:14:18.000Z', amount: 458666.3, num: 1000.3658, num7: 1000.3658, num8: 1000.3658, num9: 1000.3658 },\n                { id: 10008, name: 'Test8', bankCard: '6222525445554231', sex: '0', time: 1599320425610, date: '2020-05-04T07:17:30.000Z', amount: 79999935.6, num: 600053.32845, num7: 600053.32845, num8: 600053.32845, num9: 600053.32845 }\n              ]\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(t){u.a.highlightBlock(t)}))},methods:{formatterNum:function(t){var e=t.cellValue;return o.a.commafy(o.a.toNumber(e),{digits:2})},formatterSex:function(t){var e=t.cellValue,a=this.sexList.find((function(t){return t.value===e}));return a?a.label:""},formatTime:function(t){var e=t.cellValue;return o.a.toDateString(e,"yyyy-MM-dd HH:ss:mm")}}},s=i,d=a("2877"),c=Object(d["a"])(s,n,m,!1,null,null,null);e["default"]=c.exports},"9bdd":function(t,e,a){var n=a("825a"),m=a("2a62");t.exports=function(t,e,a,l){try{return l?e(n(a)[0],a[1]):e(a)}catch(u){m(t,"throw",u)}}},a630:function(t,e,a){var n=a("23e7"),m=a("4df4"),l=a("1c7e"),u=!l((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:u},{from:m})}}]);