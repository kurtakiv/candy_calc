(this.webpackJsonpcandy_calc=this.webpackJsonpcandy_calc||[]).push([[0],[,,,,,,function(e,n,a){e.exports=a(15)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),c=a(5),r=a.n(c),o=(a(11),a(12),a(3)),m=a(1),u=a(2),d=[{_id:"1",name:"\u041a\u0435\u0439\u043a\u043f\u043e\u043f\u0441\u0438",price:18},{_id:"2",name:"\u041c\u0443\u0441\u043e\u0432\u0435 \u0442\u0456\u0441\u0442\u0435\u0447\u043a\u043e (\u0444\u0440\u0443\u043a\u0442\u043e\u0432\u0435)",price:27},{_id:"3",name:"\u041c\u0443\u0441\u043e\u0432\u0435 \u0442\u0456\u0441\u0442\u0435\u0447\u043a\u043e (\u0447\u043e\u0440\u043d\u043e\u0441\u043b\u0438\u0432)",price:27},{_id:"4",name:"\u041a\u0430\u043f\u043a\u0435\u0439\u043a\u0438",price:30},{_id:"5",name:"\u0422\u0456\u0440\u0430\u043c\u0456\u0441\u0443 ",price:24},{_id:"6",name:"\u0422\u0430\u0440\u0442\u0430 \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u0430",price:26},{_id:"7",name:"\u0422\u0430\u0440\u0442\u0430 \u0437 \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u043c \u0433\u0430\u043d\u0430\u0448\u0435\u043c",price:26},{_id:"8",name:"\u041f\u0430\u043d\u043d\u0430\u043a\u043e\u0442\u0442\u0430",price:22},{_id:"9",name:"\u041c\u0430\u043a\u0430\u0440\u043e\u043d\u0441\u0438",price:18},{_id:"10",name:"\u041c\u0430\u043a\u0430\u0440\u043e\u043d\u0441\u0438 \u043f\u0440\u0435\u043c\u0456\u0443\u043c",price:28},{_id:"11",name:"\u0412\u0435\u0440\u0448\u043a\u043e\u0432\u0438\u0439 \u0434\u0435\u0441\u0435\u0440\u0442",price:22},{_id:"12",name:"\u041c\u0456\u043d\u0456-\u0447\u0456\u0437\u043a\u0435\u0439\u043a (min)",price:24},{_id:"13",name:"\u041c\u0456\u043d\u0456-\u0447\u0456\u0437\u043a\u0435\u0439\u043a (max)",price:30},{_id:"14",name:"\u041b\u0438\u0441\u0442\u043a\u043e\u0432\u0435 \u0442\u0456\u0441\u0442\u0435\u0447\u043a\u043e (\u043b\u0438\u043c\u043e\u043d\u043d\u0435)",price:22},{_id:"15",name:"\u041b\u0438\u0441\u0442\u043a\u043e\u0432\u0435 \u0442\u0456\u0441\u0442\u0435\u0447\u043a\u043e (\u043b\u0430\u0439\u043c)",price:22},{_id:"16",name:"\u0414\u0435\u0441\u0435\u0440\u0442 \u041e\u0440\u0435\u043e",price:26},{_id:"17",name:"\u041c\u0443\u0441\u043e\u0432\u0435 \u0441\u0435\u0440\u0446\u0435 (min)",price:26},{_id:"18",name:"\u041c\u0443\u0441\u043e\u0432\u0435 \u0441\u0435\u0440\u0446\u0435 (max)",price:37},{_id:"19",name:"\u041b\u0438\u043c\u043e\u043d\u043d\u0438\u0439 \u043c\u0443\u0441",price:24},{_id:"20",name:"\u041b\u0430\u0439\u043c\u043e\u0432\u0438\u0439 \u043c\u0443\u0441",price:24},{_id:"21",name:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0439 \u043c\u0443\u0441",price:24},{_id:"22",name:"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0439 \u043c\u0443\u0441",price:23},{_id:"23",name:"\u041f\u0430\u0432\u043b\u043e\u0432\u0430",price:25}],l=(a(13),function(e){var n=e.selected,a=e.onChange;return i.a.createElement("select",{className:"drop-down",onChange:function(e){return a(e.target.value)}},d.map((function(e){return e._id===n?i.a.createElement("option",{key:e._id,value:e._id,defaultValue:n},e.name):i.a.createElement("option",{key:e._id,value:e._id},e.name)})),";")}),s=(a(14),function(e){var n=e.candy,a=n,t=a._id,c=a.price,r=a.count,o=a.sum,u=function(){o=Number((r*c).toFixed(2)),e.onChange(Object(m.a)({},n,{count:r,sum:o,price:c}))};return i.a.createElement("div",{className:"grid-row"},i.a.createElement("div",{className:"product"},i.a.createElement(l,{selected:t,onChange:function(e){var a=d.find((function(n){return n._id===e}));a&&(n=Object(m.a)({},n,{_id:a._id,price:a.price,name:a.name})),n&&(e=n._id,c=n.price,u())}})),i.a.createElement("div",{className:"price"},i.a.createElement("input",{type:"number",value:c,onChange:function(e){return function(e){c=Number(e.target.value),u()}(e)}})),i.a.createElement("div",{className:"count"},i.a.createElement("input",{type:"number",value:r,onChange:function(e){return function(e){r=Number(e.target.value),u()}(e)}})),i.a.createElement("div",{className:"sum"},o," \u0433\u0440\u043d"))}),p=function(){var e=[],n=Object(t.useState)(e),a=Object(u.a)(n,2),c=a[0],r=a[1],l=Object(t.useState)(0),p=Object(u.a)(l,2),_=p[0],f=p[1];return i.a.createElement("div",{className:"grid"},i.a.createElement("div",{className:"grid-body"},c.map((function(n){return i.a.createElement(s,{key:n.uuid,candy:n,onChange:function(n){return function(n){var a=0;(e=c).forEach((function(t,i){t.uuid===n.uuid&&(e[i]=Object(m.a)({},n)),a+=e[i].sum})),console.warn(a),f(a),r(Object(o.a)(e))}(n)}})}))),i.a.createElement("div",{className:"total-row"},"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c: ",_," \u0433\u0440\u043d"),i.a.createElement("div",{className:"action-bar"},i.a.createElement("button",{className:"add-row-button",onClick:function(){return(e=c).push(Object(m.a)({},d[0],{count:0,sum:0,uuid:Date.now()})),void r(Object(o.a)(e))}},"+")))},_=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.4109ec67.chunk.js.map