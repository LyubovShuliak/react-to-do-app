(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),a=c.n(s),o=(c(14),c(15),c(1)),l=c(9),i=c(7),r=c(0),d=function(e){var t=e.todos,c=e.setTodos;return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsxs)("span",{className:"todo-count",children:[t.filter((function(e){return!e.className.includes("completed")})).length," ","items left"]}),Object(r.jsxs)("ul",{className:"filters",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#/",className:"selected",onClick:function(){return c(t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isHidden:!1})})))},children:"All"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#/active",onClick:function(){return c(t.map((function(e){return"completed"===e.className?Object(o.a)(Object(o.a)({},e),{},{isHidden:!0}):Object(o.a)(Object(o.a)({},e),{},{isHidden:!1})})))},children:"Active"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#/completed",onClick:function(){return c(t.map((function(e){return"completed"!==e.className?Object(o.a)(Object(o.a)({},e),{},{isHidden:!0}):Object(o.a)(Object(o.a)({},e),{},{isHidden:!1})})))},children:"Completed"})})]}),t.find((function(e){return"completed"===e.className}))?Object(r.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){var e=t.filter((function(e){return"completed"!==e.className}));localStorage.setItem("todo-list",JSON.stringify(e)),c(e)},children:"Clear completed"}):""]})},u=c(5),j=c(19),b=function(e){var t=e.todos,c=e.setTodos,n=e.input,s=e.setInput;return Object(r.jsxs)("header",{className:"header",type:"submit",children:[Object(r.jsx)("h1",{children:"todos"}),Object(r.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",value:n,onChange:function(e){return s(e.target.value)},onKeyUp:function(e){if(e.target.value&&"Enter"===e.code){var n=[].concat(Object(u.a)(t),[{value:e.target.value,key:Object(j.a)(),className:"",isHidden:!1,isChecked:!1}]);localStorage.setItem("todo-list",JSON.stringify(n)),s(""),c(n)}}})]})},m=function(e){var t=e.todos,c=e.setTodos,n=e.item;return Object(r.jsxs)("li",{className:n.className,children:[Object(r.jsxs)("div",{className:"view",children:[Object(r.jsx)("input",{type:"checkbox",className:"toggle",id:n.key,onChange:function(){return function(e){var n=Object(o.a)(Object(o.a)({},e),{},{isChecked:!e.isChecked,className:e.isChecked?"":"completed"});c(t.map((function(e){return e.key===n.key?n:e})))}(n)},checked:n.isChecked}),Object(r.jsx)("label",{htmlFor:n.key,onDoubleClick:function(e){var n=t.map((function(t){return t.key==e.target.htmlFor?Object(o.a)(Object(o.a)({},t),{},{className:"editing"}):t}));c(n)},children:n.value}),Object(r.jsx)("button",{id:n.key,type:"button",className:"destroy",onClick:function(e){var n=t.filter((function(t){return t.key!==e.target.id}));c(Object(u.a)(n))}})]}),Object(r.jsx)("input",{type:"text",className:"edit",id:n.key,onKeyDown:function(e){"Enter"===e.code&&c(t.map((function(t){return t.key==e.target.id?Object(o.a)(Object(o.a)({},t),{},{className:"",value:e.target.value?e.target.value:t.value}):t})))}})]},n.key)},O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),u=Object(i.a)(a,2),j=u[0],O=u[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todo-list"));e||(Object(l.a)("tods"),e=localStorage.setItem("todo-list",JSON.stringify([]))),s(e)}),[]);return Object(r.jsxs)("section",{className:"todoapp",children:[Object(r.jsx)(b,{todos:c,setTodos:s,input:j,setInput:O}),Object(r.jsxs)("section",{className:"main",children:[c.length?Object(r.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(e){var t=c.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{className:e.target.checked?"completed":"",isChecked:e.target.checked})}));s(t)}}):null,c.length?Object(r.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}):null,Object(r.jsx)("ul",{className:"todo-list",children:c.map((function(e){if(!1===e.isHidden)return Object(r.jsx)(m,{setTodos:s,todos:c,item:e})}))})]}),c.length?Object(r.jsx)(d,{todos:c,setTodos:s}):null]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3f455926.chunk.js.map