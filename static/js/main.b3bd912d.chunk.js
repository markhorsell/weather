(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0),c=n.n(i),o=n(5),d=n.n(o),s=n(8),a=n(7),j=n(3),l=n.n(j);function p(t){var e=t.dp;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[l()(e.dt_txt).format("dddd").toString()," ",l()(e.dt_txt).format("DD/MM/YYYY").toString()]}),Object(r.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")}),Object(r.jsx)("div",{children:l()(e.dt_txt).format("HH mm").toString()})]},e.dt)}function u(){var t=Object(a.b)("https://markweather.azurewebsites.net/api/HttpTrigger2?code=bEePfjWLznUduliGYYUHeDGbzXLtSyCbPjgVyIe/Zh0iTlITyjywJA==",{},[]),e=t.loading,n=t.error,c=t.data,o=void 0===c?[]:c,d=Object(i.useState)([]),j=Object(s.a)(d,2),u=j[0],b=j[1];return Object(i.useEffect)((function(){if(console.log(o),o.list){b(o.list.map((function(t){return t})));var t=[[]];o.list[0].dt_txt;o.list.map((function(e,n){n>0&&l()(e.dt_txt).format("DD/MM/YYYY").toString()!=l()(o.list[n-1].dt_txt).format("DD/MM/YYYY").toString()&&t.push([]),t[t.length-1].push(e)})),console.log(t),b(t)}}),[o]),Object(r.jsxs)("div",{children:[n&&"Error!",e&&"Loading...",u&&u.map((function(t){return Object(r.jsx)("div",{children:t.map((function(t){return Object(r.jsx)("div",{style:{margin:"10px",display:"inline-block",width:"100px",border:"1px solid grey"},children:Object(r.jsx)(p,{dp:t},t.dt)})}))})}))]})}var b=function(){return Object(r.jsxs)("div",{children:["Cirencester xx",Object(r.jsx)(u,{})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),i(t),c(t),o(t)}))};d.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.b3bd912d.chunk.js.map