(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af67d"],{"0dd7":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),s={class:"tip"},d=Object(a["l"])("圆角边框，通过设置 "),o=Object(a["l"])(" 参数，通过 "),l=Object(a["l"])("sass 变量"),r=Object(a["l"])(" 设置圆角值"),c={class:"demo-code"},i=Object(a["l"])("      "),m=Object(a["l"])("\r\n      "),b=Object(a["l"])("\r\n    ");function u(e,t,n,u,j,O){var x=Object(a["L"])("table-api-link"),p=Object(a["L"])("router-link"),g=Object(a["L"])("vxe-column"),v=Object(a["L"])("vxe-table"),f=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("p",s,[d,Object(a["m"])(x,{prop:"round"}),o,Object(a["m"])(p,{class:"link",to:{name:"StartTheme"}},{default:Object(a["V"])((function(){return[l]})),_:1}),r]),Object(a["m"])(v,{round:"",border:"",data:e.demo1.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(g,{type:"seq",width:"60"}),Object(a["m"])(g,{field:"name",title:"Name"}),Object(a["m"])(g,{field:"sex",title:"Sex"}),Object(a["m"])(g,{field:"age",title:"Age"}),Object(a["m"])(g,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data"]),Object(a["j"])("p",c,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[i,Object(a["m"])(f,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),m,Object(a["m"])(f,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[1]),1)]})),_:1}),b])])}var j=Object(a["n"])({setup:function(){var e=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]});return{demo1:e,demoCodes:['\n        <vxe-table\n          round\n          border\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            })\n\n            return {\n              demo1\n            }\n          }\n        })\n        "]}}}),O=n("6b0d"),x=n.n(O);const p=x()(j,[["render",u]]);t["default"]=p}}]);