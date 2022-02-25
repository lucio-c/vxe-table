(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfe57"],{6656:function(e,n,a){"use strict";a.r(n);var t=a("7a23"),s={class:"tip"},l=Object(t["l"])(" 内容渲染 "),r=Object(t["l"])("，查看 "),d=Object(t["j"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"},"示例的源码",-1),o=Object(t["j"])("span",{class:"red"},"（具体请自行实现，该示例仅供参考）",-1),c=Object(t["j"])("br",null,null,-1),i=Object(t["l"])(" 配置参数："),m=Object(t["j"])("br",null,null,-1),b=Object(t["l"])(" renderExpand (renderOpts, params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $table }) 展开内容"),p=Object(t["j"])("br",null,null,-1),u={class:"demo-code"},j=Object(t["l"])("      "),x=Object(t["l"])("\r\n      "),O=Object(t["l"])("\r\n      "),h=Object(t["l"])("\r\n    ");function g(e,n,a,g,f,v){var T=Object(t["L"])("table-column-api-link"),w=Object(t["L"])("vxe-column"),D=Object(t["L"])("vxe-table"),z=Object(t["L"])("pre-code");return Object(t["D"])(),Object(t["i"])("div",null,[Object(t["j"])("p",s,[l,Object(t["m"])(T,{prop:"content-render"}),r,d,o,c,i,m,b,p]),Object(t["m"])(D,{border:"","column-config":{resizable:!0},data:e.tableData},{default:Object(t["V"])((function(){return[Object(t["m"])(w,{type:"seq",width:"60"}),Object(t["m"])(w,{type:"expand",width:"80","content-render":{name:"MyExpand"}}),Object(t["m"])(w,{field:"name",title:"Name"}),Object(t["m"])(w,{field:"sex",title:"sex"}),Object(t["m"])(w,{field:"age",title:"Age"})]})),_:1},8,["data"]),Object(t["j"])("p",u,Object(t["O"])(e.$t("app.body.button.showCode")),1),Object(t["j"])("pre",null,[j,Object(t["m"])(z,{class:"typescript"},{default:Object(t["V"])((function(){return[Object(t["l"])(Object(t["O"])(e.demoCodes[0]),1)]})),_:1}),x,Object(t["m"])(z,{class:"xml"},{default:Object(t["V"])((function(){return[Object(t["l"])(Object(t["O"])(e.demoCodes[1]),1)]})),_:1}),O,Object(t["m"])(z,{class:"typescript"},{default:Object(t["V"])((function(){return[Object(t["l"])(Object(t["O"])(e.demoCodes[2]),1)]})),_:1}),h])])}var f=Object(t["n"])({setup:function(){var e=Object(t["I"])([{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"}]);return{tableData:e,demoCodes:["\n        import VXETable from 'vxe-table'\n        \n        // 创建一个简单的展开内容渲染\n        VXETable.renderer.add('MyExpand', {\n          renderExpand (renderOpts, params) {\n            const { row } = params\n            return [\n              <ul>\n                <li>\n                  <span>ID：</span>\n                  <span>{ row.id }</span>\n                </li>\n                <li>\n                  <span>Name：</span>\n                  <span>{ row.name }</span>\n                </li>\n                <li>\n                  <span>UpdateTime：</span>\n                  <span>{ row.updateTime }</span>\n                </li>\n                <li>\n                  <span>CreateTime：</span>\n                  <span>{ row.createTime }</span>\n                </li>\n              </ul>\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :column-config="{resizable: true}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column type="expand" width="80" :content-render="{name: \'MyExpand\'}"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const tableData = ref([\n              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n              { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n              { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n              { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },\n              { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }\n            ])\n\n            return {\n              tableData\n            }\n          }\n        })\n        "]}}}),v=a("6b0d"),T=a.n(v);const w=T()(f,[["render",g]]);n["default"]=w}}]);