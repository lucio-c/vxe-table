(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8257c3fe"],{"4df4":function(e,t,a){"use strict";var l=a("da84"),n=a("0366"),o=a("c65b"),s=a("7b0b"),i=a("9bdd"),r=a("e95a"),d=a("68ee"),c=a("07fa"),x=a("8418"),v=a("9a1f"),p=a("35a1"),m=l.Array;e.exports=function(e){var t=s(e),a=d(this),l=arguments.length,u=l>1?arguments[1]:void 0,b=void 0!==u;b&&(u=n(u,l>2?arguments[2]:void 0));var f,g,h,D,w,_,T=p(t),C=0;if(!T||this==m&&r(T))for(f=c(t),g=a?new this(f):m(f);f>C;C++)_=b?u(t[C],C):t[C],x(g,C,_);else for(D=v(t,T),w=D.next,g=a?new this:[];!(h=o(w,D)).done;C++)_=b?i(D,u,[h.value,C],!0):h.value,x(g,C,_);return g.length=C,g}},"9bdd":function(e,t,a){var l=a("825a"),n=a("2a62");e.exports=function(e,t,a,o){try{return o?t(l(a)[0],a[1]):t(a)}catch(s){n(e,"throw",s)}}},a630:function(e,t,a){var l=a("23e7"),n=a("4df4"),o=a("1c7e"),s=!o((function(e){Array.from(e)}));l({target:"Array",stat:!0,forced:s},{from:n})},bb3b:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"tip"},[e._v("展开行的懒加载，通过配置 "),a("table-api-link",{attrs:{prop:"expand-config"}}),e._v("={"),a("table-api-link",{attrs:{prop:"lazy"}}),e._v(", "),a("table-api-link",{attrs:{prop:"loadMethod"}}),e._v("} 加载方法来开启懒加载"),a("br")],1),a("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[a("vxe-button",{on:{click:function(t){return e.$refs.xTable.toggleRowExpand(e.tableData[1])}}},[e._v("切换第二行展开")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTable.setRowExpand([e.tableData[2],e.tableData[3]],!0)}}},[e._v("设置第三、四行展开")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTable.setAllRowExpand(!0)}}},[e._v("设置所有行展开")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTable.clearRowExpand()}}},[e._v("关闭所有行展开")])]},proxy:!0}])}),a("vxe-table",{ref:"xTable",attrs:{border:"",data:e.tableData,"expand-config":{lazy:!0,loadMethod:e.loadContentMethod}}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{type:"expand",width:"80"},scopedSlots:e._u([{key:"content",fn:function(t){var l=t.row;return[a("ul",e._l(l.detailList,(function(t,l){return a("li",{key:l},[a("span",[e._v("Role: "+e._s(t.role))]),a("span",{staticStyle:{"margin-left":"100px"}},[e._v(" Age: "+e._s(t.age))]),a("span",{staticStyle:{"margin-left":"100px"}},[e._v(" Sex: "+e._s(t.sex))])])})),0)]}}])}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),a("p",{staticClass:"tip"},[e._v("实现父子表格懒加载")]),a("vxe-table",{attrs:{border:"",data:e.tableData2,"expand-config":{accordion:!0,lazy:!0,loadMethod:e.loadContentMethod2}}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{type:"expand",width:"80"},scopedSlots:e._u([{key:"content",fn:function(e){var t=e.row;return[a("vxe-grid",{attrs:{columns:t.childCols,data:t.childData}})]}}])}),a("vxe-table-column",{attrs:{field:"name",title:"Name"}}),a("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},n=[],o=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("c695")),s=a.n(o),i=a("f4e8"),r=a.n(i),d={data:function(){return{tableData:[{name:"Develop",age:20,sex:"女",detailList:[]},{name:"Develop",age:22,sex:"女",detailList:[]},{name:"Develop",age:24,sex:"男",detailList:[]},{name:"Develop",age:26,sex:"女",detailList:[]}],tableData2:[{name:"Develop",age:20,sex:"女",childCols:[],childData:[]},{name:"Develop",age:22,sex:"女",childCols:[],childData:[]},{name:"Develop",age:24,sex:"男",childCols:[],childData:[]},{name:"Develop",age:26,sex:"女",childCols:[],childData:[]}],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="$refs.xTable.toggleRowExpand(tableData[1])">切换第二行展开</vxe-button>\n            <vxe-button @click="$refs.xTable.setRowExpand([tableData[2], tableData[3]], true)">设置第三、四行展开</vxe-button>\n            <vxe-button @click="$refs.xTable.setAllRowExpand(true)">设置所有行展开</vxe-button>\n            <vxe-button @click="$refs.xTable.clearRowExpand()">关闭所有行展开</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable"\n          :data="tableData"\n          :expand-config="{lazy: true, loadMethod: loadContentMethod}">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column type="expand" width="80">\n            <template v-slot:content="{ row }">\n              <ul>\n                <li v-for="(item, index) in row.detailList" :key="index">\n                  <span>Role: {{ item.role }}</span>\n                  <span style="margin-left: 100px"> Age: {{ item.age }}</span>\n                  <span style="margin-left: 100px"> Sex: {{ item.sex }}</span>\n                </li>\n              </ul>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { name: 'Develop', age: 20, sex: '女', detailList: [] },\n                { name: 'Develop', age: 22, sex: '女', detailList: [] },\n                { name: 'Develop', age: 24, sex: '男', detailList: [] },\n                { name: 'Develop', age: 26, sex: '女', detailList: [] }\n              ]\n            }\n          },\n          methods: {\n            loadContentMethod ({ row }) {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const detailList = XEUtils.sample([\n                    { role: 'Develop', age: 20, sex: '女' },\n                    { role: 'Develop', age: 22, sex: '女' },\n                    { role: 'Develop', age: 24, sex: '男' },\n                    { role: 'Develop', age: 26, sex: '女' },\n                    { role: 'Develop', age: 28, sex: '男' },\n                    { role: 'Develop', age: 30, sex: '男' }\n                  ], XEUtils.random(1, 5))\n                  row.detailList = detailList\n                  resolve()\n                }, 500)\n              })\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          :data="tableData"\n          :expand-config="{accordion: true, lazy: true, loadMethod: loadContentMethod}">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column type="expand" width="80">\n            <template v-slot:content="{ row }">\n              <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { name: 'Develop', age: 20, sex: '女', childCols: [], childData: [] },\n                { name: 'Develop', age: 22, sex: '女', childCols: [], childData: [] },\n                { name: 'Develop', age: 24, sex: '男', childCols: [], childData: [] },\n                { name: 'Develop', age: 26, sex: '女', childCols: [], childData: [] }\n              ]\n            }\n          },\n          methods: {\n            loadContentMethod ({ row }) {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const childCols = XEUtils.sample([\n                    { type: 'seq', title: 'Sequence' },\n                    { field: 'name', title: 'Name' },\n                    { field: 'role', title: 'Role' },\n                    { field: 'age', title: 'Age' },\n                    { field: 'sex', title: 'Sex' }\n                  ], XEUtils.random(3, 5))\n                  const childData = XEUtils.sample([\n                    { name: 'TEST1', role: 'Develop', age: 20, sex: '女' },\n                    { name: 'TEST2', role: 'Develop', age: 22, sex: '女' },\n                    { name: 'TEST3', role: 'Develop', age: 24, sex: '男' },\n                    { name: 'TEST4', role: 'Develop', age: 26, sex: '女' },\n                    { name: 'TEST5', role: 'Develop', age: 28, sex: '男' },\n                    { name: 'TEST6', role: 'Develop', age: 30, sex: '男' }\n                  ], XEUtils.random(1, 5))\n                  row.childCols = childCols\n                  row.childData = childData\n                  resolve()\n                }, 500)\n              })\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){r.a.highlightBlock(e)}))},methods:{loadContentMethod:function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var a=s.a.sample([{role:"Develop",age:20,sex:"女"},{role:"Develop",age:22,sex:"女"},{role:"Develop",age:24,sex:"男"},{role:"Develop",age:26,sex:"女"},{role:"Develop",age:28,sex:"男"},{role:"Develop",age:30,sex:"男"}],s.a.random(1,5));t.detailList=a,e()}),500)}))},loadContentMethod2:function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var a=s.a.sample([{type:"seq",title:"Sequence"},{field:"name",title:"Name"},{field:"role",title:"Role"},{field:"age",title:"Age"},{field:"sex",title:"Sex"}],s.a.random(3,5)),l=s.a.sample([{name:"TEST1",role:"Develop",age:20,sex:"女"},{name:"TEST2",role:"Develop",age:22,sex:"女"},{name:"TEST3",role:"Develop",age:24,sex:"男"},{name:"TEST4",role:"Develop",age:26,sex:"女"},{name:"TEST5",role:"Develop",age:28,sex:"男"},{name:"TEST6",role:"Develop",age:30,sex:"男"}],s.a.random(1,5));t.childCols=a,t.childData=l,e()}),500)}))}}},c=d,x=a("2877"),v=Object(x["a"])(c,l,n,!1,null,null,null);t["default"]=v.exports}}]);