(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b5e4c57"],{"0d4d":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a={class:"tip"},o=Object(r["l"])("可编辑的合并行"),i=Object(r["j"])("br",null,null,-1),s={class:"red"},c=Object(r["l"])("（注："),l=Object(r["l"])(" ，不能用于树形结构、展开行、固定列，合并的逻辑都是自行实现的，该示例仅供参考）"),u=Object(r["l"])("新增"),d=Object(r["l"])("删除选中"),m=Object(r["l"])("保存"),h={class:"demo-code"},p=Object(r["l"])("      "),f=Object(r["l"])("\r\n      "),v=Object(r["l"])("\r\n    ");function b(e,t,n,b,g,x){var w=Object(r["L"])("table-api-link"),y=Object(r["L"])("vxe-button"),T=Object(r["L"])("vxe-toolbar"),j=Object(r["L"])("vxe-column"),O=Object(r["L"])("vxe-input"),k=Object(r["L"])("vxe-table"),R=Object(r["L"])("pre-code");return Object(r["D"])(),Object(r["i"])("div",null,[Object(r["j"])("p",a,[o,i,Object(r["j"])("span",s,[c,Object(r["m"])(w,{prop:"span-method"}),l])]),Object(r["m"])(T,null,{buttons:Object(r["V"])((function(){return[Object(r["m"])(y,{onClick:e.insertEvent},{default:Object(r["V"])((function(){return[u]})),_:1},8,["onClick"]),Object(r["m"])(y,{onClick:t[0]||(t[0]=function(t){return e.$refs.xTable.removeCheckboxRow()})},{default:Object(r["V"])((function(){return[d]})),_:1}),Object(r["m"])(y,{onClick:e.saveEvent},{default:Object(r["V"])((function(){return[m]})),_:1},8,["onClick"])]})),_:1}),Object(r["m"])(k,{border:"","show-overflow":"",ref:"xTable",height:"500","span-method":e.rowspanMethod,data:e.tableData,"edit-rules":e.demo1.validRules,"edit-config":{trigger:"click",mode:"cell"}},{default:Object(r["V"])((function(){return[Object(r["m"])(j,{type:"checkbox",width:"60"}),Object(r["m"])(j,{field:"role",title:"Role","edit-render":{}},{edit:Object(r["V"])((function(e){var t=e.row;return[Object(r["m"])(O,{modelValue:t.role,"onUpdate:modelValue":function(e){return t.role=e},type:"text",placeholder:"请输入角色"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(r["m"])(j,{field:"name",title:"Name","edit-render":{}},{edit:Object(r["V"])((function(e){var t=e.row;return[Object(r["m"])(O,{modelValue:t.name,"onUpdate:modelValue":function(e){return t.name=e},type:"text",placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(r["m"])(j,{field:"address",title:"Address","edit-render":{}},{edit:Object(r["V"])((function(e){var t=e.row;return[Object(r["m"])(O,{modelValue:t.address,"onUpdate:modelValue":function(e){return t.address=e},type:"text",placeholder:"请输入地址"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["span-method","data","edit-rules"]),Object(r["j"])("p",h,Object(r["O"])(e.$t("app.body.button.showCode")),1),Object(r["j"])("pre",null,[p,Object(r["m"])(R,{class:"xml"},{default:Object(r["V"])((function(){return[Object(r["l"])(Object(r["O"])(e.demoCodes[0]),1)]})),_:1}),f,Object(r["m"])(R,{class:"javascript"},{default:Object(r["V"])((function(){return[Object(r["l"])(Object(r["O"])(e.demoCodes[1]),1)]})),_:1}),v])])}var g=n("1da1"),x=(n("caad"),n("96cf"),n("55db")),w=Object(r["n"])({setup:function(){var e=Object(r["I"])({}),t=Object(r["I"])([{id:10001,name:"Test1",nickname:"T1",role:"Designer",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["0"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"},{id:10005,name:"Test5",nickname:"T5",role:"Test",sex:"1",sex2:["1"],num1:18,age:26,address:"Shenzhen",date12:"",date13:""},{id:10006,name:"Test6",nickname:"T6",role:"Test",sex:"1",sex2:["1"],num1:35,age:28,address:"BeiJing",date12:"",date13:"2020-09-04"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex2:["1"],num1:11,age:24,address:"BeiJing",date12:"2020-08-10",date13:"2020-04-22"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"0",sex2:["1"],num1:30,age:21,address:"Shenzhen",date12:"",date13:""},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"1",sex2:["0"],num1:25,age:31,address:"Guangzhou",date12:"",date13:"2020-04-10"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex2:["1"],num1:30,age:29,address:"BeiJing",date12:"2020-04-18",date13:"2020-04-10"},{id:100011,name:"Test11",nickname:"T11",role:"Test",sex:"0",sex2:["1"],num1:33,age:30,address:"Shenzhen",date12:"",date13:""},{id:100012,name:"Test12",nickname:"T12",role:"Designer",sex:"1",sex2:["1"],num1:22,age:20,address:"Guangzhou",date12:"",date13:"2020-04-11"},{id:100013,name:"Test13",nickname:"T13",role:"Designer",sex:"1",sex2:["1"],num1:19,age:34,address:"BeiJing",date12:"",date13:"2020-01-10"}]),n=Object(r["H"])({validRules:{role:[{required:!0,message:"角色值必须填写"}],name:[{required:!0,message:"名称必须填写"}],address:[{required:!0,message:"地址必须填写"}]}}),a=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.value,r={},t.next=4,n.insert(r);case 4:a=t.sent,o=a.row,n.setActiveCell(o,"role");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.value,r=n.getRecordset(),a=r.insertRecords,o=r.removeRecords,i=r.updateRecords,!(a.length||o.length||i.length)){t.next=10;break}return t.next=6,n.validate();case 6:s=t.sent,s?x["a"].modal.message({status:"error",content:"校验不通过！"}):x["a"].modal.message({content:"保存成功！",status:"success"}),t.next=11;break;case 10:x["a"].modal.message({content:"数据未改动！",status:"warning"});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(e){var t=e.row,n=e._rowIndex,r=e.column,a=e.visibleData,o=["role"],i=t[r.property];if(i&&o.includes(r.property)){var s=a[n-1],c=a[n+1];if(s&&s[r.property]===i)return{rowspan:0,colspan:0};var l=1;while(c&&c[r.property]===i)c=a[++l+n];if(l>1)return{rowspan:l,colspan:1}}};return{demo1:n,xTable:e,tableData:t,insertEvent:a,saveEvent:o,rowspanMethod:i,demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="saveEvent">保存</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable"\n          height="500"\n          :span-method="rowspanMethod"\n          :data="tableData"\n          :edit-rules="demo1.validRules"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column field="role" title="Role" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.role" type="text" placeholder="请输入角色"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text" placeholder="请输入名称"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="address" title="Address" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.address" type="text" placeholder="请输入地址"></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VXETable, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xTable = ref({} as VxeTableInstance)\n\n            const tableData = ref([\n              { id: 10001, name: 'Test1', nickname: 'T1', role: 'Designer', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n              { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n              { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n              { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },\n              { id: 10005, name: 'Test5', nickname: 'T5', role: 'Test', sex: '1', sex2: ['1'], num1: 18, age: 26, address: 'Shenzhen', date12: '', date13: '' },\n              { id: 10006, name: 'Test6', nickname: 'T6', role: 'Test', sex: '1', sex2: ['1'], num1: 35, age: 28, address: 'BeiJing', date12: '', date13: '2020-09-04' },\n              { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex2: ['1'], num1: 11, age: 24, address: 'BeiJing', date12: '2020-08-10', date13: '2020-04-22' },\n              { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', sex2: ['1'], num1: 30, age: 21, address: 'Shenzhen', date12: '', date13: '' },\n              { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', sex2: ['0'], num1: 25, age: 31, address: 'Guangzhou', date12: '', date13: '2020-04-10' },\n              { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex2: ['1'], num1: 30, age: 29, address: 'BeiJing', date12: '2020-04-18', date13: '2020-04-10' },\n              { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: '0', sex2: ['1'], num1: 33, age: 30, address: 'Shenzhen', date12: '', date13: '' },\n              { id: 100012, name: 'Test12', nickname: 'T12', role: 'Designer', sex: '1', sex2: ['1'], num1: 22, age: 20, address: 'Guangzhou', date12: '', date13: '2020-04-11' },\n              { id: 100013, name: 'Test13', nickname: 'T13', role: 'Designer', sex: '1', sex2: ['1'], num1: 19, age: 34, address: 'BeiJing', date12: '', date13: '2020-01-10' }\n            ])\n\n            const demo1 = reactive({\n              validRules: {\n                role: [\n                  { required: true, message: '角色值必须填写' }\n                ],\n                name: [\n                  { required: true, message: '名称必须填写' }\n                ],\n                address: [\n                  { required: true, message: '地址必须填写' }\n                ]\n              }\n            })\n\n            const insertEvent = async () => {\n              const $table = xTable.value\n              const record = {}\n              const { row: newRow } = await $table.insert(record)\n              $table.setActiveCell(newRow, 'role')\n            }\n\n            const saveEvent = async () => {\n              const $table = xTable.value\n              const body = $table.getRecordset()\n              const { insertRecords, removeRecords, updateRecords } = body\n              if (insertRecords.length || removeRecords.length || updateRecords.length) {\n                const errMap = await $table.validate()\n                if (errMap) {\n                  VXETable.modal.message({ status: 'error', content: '校验不通过！' })\n                } else {\n                  VXETable.modal.message({ content: '保存成功！', status: 'success' })\n                }\n              } else {\n                VXETable.modal.message({ content: '数据未改动！', status: 'warning' })\n              }\n            }\n\n            // 通用行合并函数（将相同多列数据合并为一行）\n            const rowspanMethod: VxeTablePropTypes.SpanMethod = ({ row, _rowIndex, column, visibleData }) => {\n              const fields = ['role']\n              const cellValue = row[column.property]\n              if (cellValue && fields.includes(column.property)) {\n                const prevRow = visibleData[_rowIndex - 1]\n                let nextRow = visibleData[_rowIndex + 1]\n                if (prevRow && prevRow[column.property] === cellValue) {\n                  return { rowspan: 0, colspan: 0 }\n                } else {\n                  let countRowspan = 1\n                  while (nextRow && nextRow[column.property] === cellValue) {\n                    nextRow = visibleData[++countRowspan + _rowIndex]\n                  }\n                  if (countRowspan > 1) {\n                    return { rowspan: countRowspan, colspan: 1 }\n                  }\n                }\n              }\n            }\n\n            return {\n              demo1,\n              xTable,\n              tableData,\n              insertEvent,\n              saveEvent,\n              rowspanMethod\n            }\n          }\n        })\n        "]}}}),y=n("6b0d"),T=n.n(y);const j=T()(w,[["render",b]]);t["default"]=j},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d3b7");function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new V(r||[]);return o._invoke=k(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var d="suspendedStart",m="suspendedYield",h="executing",p="completed",f={};function v(){}function b(){}function g(){}var x={};c(x,o,(function(){return this}));var w=Object.getPrototypeOf,y=w&&w(w(_([])));y&&y!==n&&r.call(y,o)&&(x=y);var T=g.prototype=v.prototype=Object.create(x);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var a;function o(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function k(e,t,n){var r=d;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return D()}n.method=a,n.arg=o;while(1){var i=n.delegate;if(i){var s=R(i,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?p:m,c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function R(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,f;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function V(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){while(++a<e.length)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:D}}function D(){return{value:t,done:!0}}return b.prototype=g,c(T,"constructor",g),c(g,"constructor",b),b.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,s,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},j(O.prototype),c(O.prototype,i,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new O(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(T),c(T,s,"Generator"),c(T,o,(function(){return this})),c(T,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,V.prototype={constructor:V,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);