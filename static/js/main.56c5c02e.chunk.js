(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var i=t(1),s=t.n(i),d=t(5),n=t.n(d),a=(t(10),t(2)),r=(t(11),t(0));function j(e){return Object(r.jsxs)("header",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Memory Card Game - Alpha"}),Object(r.jsx)("div",{children:"Don't click the same card twice!"})]}),Object(r.jsxs)("div",{className:"score",children:[Object(r.jsxs)("div",{children:["Current Score: ",e.score]}),Object(r.jsxs)("div",{children:["High Score: ",e.highScore]})]})]})}function o(e){return Object(r.jsx)("div",{onClick:function(){e.select(e.id,e.img),e.selected?e.lose():e.win()},className:"card",children:Object(r.jsx)("img",{alt:"",src:e.img})})}var l=[{id:1,selected:!1,img:t.p+"static/media/1.7cf0dce8.jpg"},{id:2,selected:!1,img:t.p+"static/media/2.a7d1d0a5.jpg"},{id:3,selected:!1,img:t.p+"static/media/3.4215e842.jpg"},{id:4,selected:!1,img:t.p+"static/media/4.bb9f515e.jpg"},{id:5,selected:!1,img:t.p+"static/media/5.86fb0035.jpg"},{id:6,selected:!1,img:t.p+"static/media/6.f43f963e.jpg"},{id:7,selected:!1,img:t.p+"static/media/7.a395c916.jpg"},{id:8,selected:!1,img:t.p+"static/media/8.f49c575a.jpg"},{id:9,selected:!1,img:t.p+"static/media/9.5ef212cf.jpg"},{id:10,selected:!1,img:t.p+"static/media/10.41005729.jpg"},{id:11,selected:!1,img:t.p+"static/media/11.7183ab79.jpg"},{id:12,selected:!1,img:t.p+"static/media/12.662f1a2b.jpg"}],m=t(4);function g(e){var c=Object(i.useState)(l),t=Object(a.a)(c,2),s=t[0],d=t[1],n=function(){e.lose(),d(Object(m.shuffle)(l)),console.log(s)},j=function(){e.win(),console.log(s)},g=function(e,c){d(Object(m.shuffle)(s.map((function(t){return t.id===e?{id:e,selected:!0,img:c}:t}))))};return Object(r.jsx)("main",{children:s.map((function(e){return Object(r.jsx)(o,{id:e.id,selected:e.selected,img:e.img,select:g,win:j,lose:n},e.id)}))})}function p(){return Object(r.jsx)("footer",{children:"By Chooky"})}var b=function(){var e=Object(i.useState)(0),c=Object(a.a)(e,2),t=c[0],s=c[1],d=Object(i.useState)(0),n=Object(a.a)(d,2),o=n[0],l=n[1];return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(j,{score:t,highScore:o}),Object(r.jsx)(g,{win:function(){console.log(t),s(t+1)},lose:function(){t>o&&l(t),s(0)}}),Object(r.jsx)(p,{})]})};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.56c5c02e.chunk.js.map