(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a1b8d9c"],{"08f2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"tip"},[e._v(" 通过给需要排序功能的列加上 "),a("table-api-link",{attrs:{prop:"sortable"}}),e._v(" 属性可以支持排序，还可以通过设置 "),a("table-api-link",{attrs:{prop:"sort-by"}}),e._v(" 多字段进行排序"),a("br"),e._v(" 如果是服务端排序，只需加上 "),a("table-column-api-link",{attrs:{prop:"remote-sort"}}),e._v(" 和 "),a("table-api-link",{attrs:{prop:"sort-change"}}),e._v(" 事件就可以实现"),a("br"),e._v(" 还可以通过调用 "),a("table-api-link",{attrs:{prop:"sort"}}),e._v(" 方法实现手动排序 ")],1),a("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[a("vxe-button",{on:{click:function(t){return e.$refs.xTable.sort("name","asc")}}},[e._v("Name 升序")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTable.sort("name","desc")}}},[e._v("Name 降序")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTable.clearSort()}}},[e._v("清除排序")])]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{border:"","highlight-hover-row":"",height:"300",data:e.tableData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:""}}),a("vxe-table-column",{attrs:{field:"nickname",title:"Nickname",sortable:""}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex",sortable:""}}),a("vxe-table-column",{attrs:{field:"age",title:"Age",sortable:""}}),a("vxe-table-column",{attrs:{field:"time",title:"Time",sortable:""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),a("p",{staticClass:"tip"},[e._v("配置 "),a("table-column-api-link",{attrs:{prop:"sort-by"}}),e._v(" 多个字段排序")],1),a("vxe-table",{attrs:{border:"","highlight-hover-row":"",height:"300",data:e.tableData2}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"单个排序 name",sortable:""}}),a("vxe-table-column",{attrs:{field:"role",title:"多字段排序 role+num","sort-by":["role","num"],sortable:""}}),a("vxe-table-column",{attrs:{field:"num",title:"多字段排序 name+role+num","sort-by":["name","role","num"],sortable:""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),a("p",{staticClass:"tip"},[e._v("配置 "),a("table-column-api-link",{attrs:{prop:"sort-method"}}),e._v(" 自定义排序")],1),a("vxe-table",{attrs:{border:"","highlight-hover-row":"",height:"300",data:e.tableData},on:{"sort-change":e.sortChangeEvent}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:"","sort-method":e.sortNameMethod}}),a("vxe-table-column",{attrs:{field:"nickname",title:"Nickname",sortable:""}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex",sortable:""}}),a("vxe-table-column",{attrs:{field:"age",title:"Age",sortable:""}}),a("vxe-table-column",{attrs:{field:"time",title:"Time",sortable:""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")]),a("p",{staticClass:"tip"},[e._v("点击表头排序，通过 "),a("table-api-link",{attrs:{prop:"defaultSort"}}),e._v(" 默认排序、"),a("table-api-link",{attrs:{prop:"orders"}}),e._v(" 自定义轮转顺序、通过配置 "),a("table-api-link",{attrs:{prop:"trigger"}}),e._v(" 设置触发源")],1),a("vxe-table",{attrs:{border:"","highlight-hover-row":"","highlight-hover-column":"",height:"300",data:e.tableData,"sort-config":{trigger:"cell",defaultSort:{field:"age",order:"desc"},orders:["desc","asc",null]}},on:{"sort-change":e.sortChangeEvent}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"nickname",title:"Nickname",sortable:""}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex",sortable:""}}),a("vxe-table-column",{attrs:{field:"age",title:"Age",sortable:""}}),a("vxe-table-column",{attrs:{field:"time",title:"Time",sortable:""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[6]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[7]))]),e._v("\n  ")])],1)},l=[],o=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("b0c0"),a("f4e8")),s=a.n(o),r={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women ",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man ",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man ",age:35,address:"test abc"}],tableData2:[{name:"小红",role:"前端",num:7},{name:"老王",role:"后端",num:6},{name:"小红",role:"后端",num:1},{name:"小明",role:"前端",num:2},{name:"老徐",role:"测试",num:3},{name:"老王",role:"前端",num:3},{name:"老徐",role:"测试",num:4},{name:"小明",role:"前端",num:4},{name:"小明",role:"前端",num:8},{name:"小明",role:"测试",num:6},{name:"小红",role:"后端",num:9},{name:"老徐",role:"前端",num:5},{name:"老徐",role:"测试",num:1},{name:"小红",role:"前端",num:4},{name:"小红",role:"前端",num:2},{name:"小明",role:"测试",num:3},{name:"老王",role:"前端",num:6},{name:"老王",role:"后端",num:4},{name:"老徐",role:"前端",num:8},{name:"小明",role:"测试",num:7}],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="$refs.xTable.sort(\'name\', \'asc\')">Name 升序</vxe-button>\n            <vxe-button @click="$refs.xTable.sort(\'name\', \'desc\')">Name 降序</vxe-button>\n            <vxe-button @click="$refs.xTable.clearSort()">清除排序</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          highlight-hover-row\n          ref="xTable"\n          height="300"\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable></vxe-table-column>\n          <vxe-table-column field="nickname" title="Nickname" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" sortable></vxe-table-column>\n          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>\n          <vxe-table-column field="time" title="Time" sortable></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          highlight-hover-row\n          height="300"\n          :data="tableData2">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="单个排序 name" sortable></vxe-table-column>\n          <vxe-table-column field="role" title="多字段排序 role+num" :sort-by="[\'role\', \'num\']" sortable></vxe-table-column>\n          <vxe-table-column field="num" title="多字段排序 name+role+num" :sort-by="[\'name\', \'role\', \'num\']" sortable></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData2: [\n                { name: '小红', role: '前端', num: 7 },\n                { name: '老王', role: '后端', num: 6 },\n                { name: '小红', role: '后端', num: 1 },\n                { name: '小明', role: '前端', num: 2 },\n                { name: '老徐', role: '测试', num: 3 },\n                { name: '老王', role: '前端', num: 3 },\n                { name: '老徐', role: '测试', num: 4 },\n                { name: '小明', role: '前端', num: 4 },\n                { name: '小明', role: '前端', num: 8 },\n                { name: '小明', role: '测试', num: 6 },\n                { name: '小红', role: '后端', num: 9 },\n                { name: '老徐', role: '前端', num: 5 },\n                { name: '老徐', role: '测试', num: 1 },\n                { name: '小红', role: '前端', num: 4 },\n                { name: '小红', role: '前端', num: 2 },\n                { name: '小明', role: '测试', num: 3 },\n                { name: '老王', role: '前端', num: 6 },\n                { name: '老王', role: '后端', num: 4 },\n                { name: '老徐', role: '前端', num: 8 },\n                { name: '小明', role: '测试', num: 7 }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          highlight-hover-row\n          height="300"\n          :data="tableData"\n          @sort-change="sortChangeEvent">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable :sort-method="sortNameMethod"></vxe-table-column>\n          <vxe-table-column field="nickname" title="Nickname" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" sortable></vxe-table-column>\n          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>\n          <vxe-table-column field="time" title="Time" sortable></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            sortNameMethod (a, b) {\n              // 例如：名称不区分大小写的排序\n              var v1 = (a.name || '').toLowerCase()\n              var v2 = (b.name || '').toLowerCase()\n              return v1 < v2 ? -1 : v1 > v2 ? 1 : 0\n            },\n            sortChangeEvent ({ column, property, order }) {\n              console.info(property, order)\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          highlight-hover-row\n          highlight-hover-column\n          height="300"\n          :data="tableData"\n          :sort-config="{trigger: \'cell\', defaultSort: {field: \'age\', order: \'desc\'}, orders: [\'desc\', \'asc\', null]}"\n          @sort-change="sortChangeEvent">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="nickname" title="Nickname" sortable></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" sortable></vxe-table-column>\n          <vxe-table-column field="age" title="Age" sortable></vxe-table-column>\n          <vxe-table-column field="time" title="Time" sortable></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            sortChangeEvent ({ column, property, order }) {\n              console.info(property, order)\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){s.a.highlightBlock(e)}))},methods:{sortNameMethod:function(e,t){var a=(e.name||"").toLowerCase(),n=(t.name||"").toLowerCase();return a<n?-1:a>n?1:0},sortChangeEvent:function(e){var t=e.property,a=e.order;console.info(t,a)}}},m=r,i=a("2877"),d=Object(i["a"])(m,n,l,!1,null,null,null);t["default"]=d.exports},"4df4":function(e,t,a){"use strict";var n=a("da84"),l=a("0366"),o=a("c65b"),s=a("7b0b"),r=a("9bdd"),m=a("e95a"),i=a("68ee"),d=a("07fa"),b=a("8418"),c=a("9a1f"),u=a("35a1"),v=n.Array;e.exports=function(e){var t=s(e),a=i(this),n=arguments.length,x=n>1?arguments[1]:void 0,h=void 0!==x;h&&(x=l(x,n>2?arguments[2]:void 0));var g,p,f,_,T,C,D=u(t),k=0;if(!D||this==v&&m(D))for(g=d(t),p=a?new this(g):v(g);g>k;k++)C=h?x(t[k],k):t[k],b(p,k,C);else for(_=c(t,D),T=_.next,p=a?new this:[];!(f=o(T,_)).done;k++)C=h?r(_,x,[f.value,k],!0):f.value,b(p,k,C);return p.length=k,p}},"9bdd":function(e,t,a){var n=a("825a"),l=a("2a62");e.exports=function(e,t,a,o){try{return o?t(n(a)[0],a[1]):t(a)}catch(s){l(e,"throw",s)}}},a630:function(e,t,a){var n=a("23e7"),l=a("4df4"),o=a("1c7e"),s=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:s},{from:l})}}]);