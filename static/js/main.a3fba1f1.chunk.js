(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={card:"Card_card__3eUKg",favorite:"Card_favorite__2P8Ik",card__price:"Card_card__price__3PVPA",cardButton:"Card_cardButton__3ffX6"}},43:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(20),i=c.n(a),s=(c(43),c(5)),o=c(3),j=c(2),d=c(7),u=c.n(d),l=function(){return function(e){u.a.get("https://61012ec14e50960017c29c6a.mockapi.io/favorites").then((function(t){var c=t.data;return e({type:"LOAD-FAVORITES-ITEMS",payload:c})}))}},O=c(15),b=c.n(O),h=c(22),m=function(){return function(e){u.a.get("https://61012ec14e50960017c29c6a.mockapi.io/Cart").then((function(t){var c=t.data;return e({type:"LOAD-CART-ITEMS",payload:c})}))}},f=function(e){return function(t){u.a.post("https://61012ec14e50960017c29c6a.mockapi.io/Cart",e).then((function(e){var c=e.data;return t({type:"ADD-CART-ITEMS",payload:c})}))}},x=function(e){return function(t){u.a.delete("https://61012ec14e50960017c29c6a.mockapi.io/Cart/".concat(e)).then((function(e){var c=e.data;return t({type:"REMOVE-CART-ITEMS",payload:c})}))}},p=c(23),v=c(19),g=c.n(v),y=c(1);var E=function(e){var t=e.cartItems,c=e.favorites,r=e.isLoading,n=void 0!==r&&r,a=e.title,i=e.price,s=e.imageURL,j=e.keys,d={title:a,price:i,imageURL:s,keys:j,id:e.id},l=Object(o.b)(),O=function(e){var t=c.find((function(t){return t.keys===e.keys}));l(t?function(e){return function(t){u.a.delete("https://61012ec14e50960017c29c6a.mockapi.io/favorites/".concat(e)).then((function(e){var c=e.data;return t({type:"REMOVE-FAVORITES-ITEMS",payload:c})}))}}(t.id):function(e){return function(t){u.a.post("https://61012ec14e50960017c29c6a.mockapi.io/favorites",e).then((function(e){var c=e.data;return t({type:"ADD-FAVORITES-ITEMS",payload:c})}))}}(e))};return Object(y.jsx)("div",{className:g.a.card,children:n?Object(y.jsxs)(p.a,{speed:2,width:178,height:230,viewBox:"0 0 178 230",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(y.jsx)("circle",{cx:"472",cy:"630",r:"86"}),Object(y.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"133",height:"112"}),Object(y.jsx)("rect",{x:"0",y:"135",rx:"5",ry:"5",width:"178",height:"15"}),Object(y.jsx)("rect",{x:"0",y:"155",rx:"5",ry:"5",width:"100",height:"15"}),Object(y.jsx)("rect",{x:"0",y:"199",rx:"9",ry:"9",width:"80",height:"30"}),Object(y.jsx)("rect",{x:"146",y:"198",rx:"9",ry:"9",width:"32",height:"32"})]}):Object(y.jsxs)(y.Fragment,{children:[c&&Object(y.jsx)("div",{className:g.a.favorite,onClick:function(){return O(d)},children:Object(y.jsx)("img",{src:function(e){return c&&c.some((function(t){return+t.keys===+e}))}(j)?"img/liked.svg":"img/unliked.svg",alt:"unliked"})}),Object(y.jsx)("img",{width:133,height:112,src:s,alt:""}),Object(y.jsx)("h5",{children:a}),t&&Object(y.jsxs)("div",{className:g.a.cardButton,children:[Object(y.jsxs)("div",{className:g.a.card__price,children:[Object(y.jsx)("span",{children:"\u0426\u0415\u041d\u0410"}),Object(y.jsxs)("b",{children:[i," \u0440\u0443\u0431."]})]}),Object(y.jsx)("img",{onClick:function(){return function(e){var c=t.find((function(t){return t.keys===e.keys}));l(c?x(c.id):f(e))}(d)},src:function(e){return t&&t.some((function(t){return+t.keys===+e}))}(j)?"img/btn-checked.svg":"img/btn-plus.svg",alt:""})]})]})})};var k=function(e){var t=e.onAddToFavorite,c=Object(o.b)(),n=Object(o.c)((function(e){return e.favoriteReducer})),a=Object(o.c)((function(e){return e.cartItemsReducer.items}));return Object(r.useEffect)((function(){c(l())}),[c]),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("div",{className:"title",children:Object(y.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(y.jsx)("div",{className:"sneakers",children:n&&n.map((function(e,c){return Object(r.createElement)(E,Object(j.a)(Object(j.a)({favorites:n,cartItems:a,onFavorite:t},e),{},{key:"".concat(e.title,"_").concat(c)}))}))})]})},R=c(12);var N=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.orderReducer})),c=t.order,n=t.isLoading,a=Object(o.c)((function(e){return e.orderReducer}));return console.log(a),Object(r.useEffect)((function(){e(function(){var e=Object(h.a)(b.a.mark((function e(t){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://61012ec14e50960017c29c6a.mockapi.io/Orders");case 2:c=e.sent,r=c.data,console.log(r),t({type:"LOADING-ORDERS",payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("div",{className:"title",children:Object(y.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(y.jsx)("div",{className:"orders",children:(n?Object(R.a)(Array(4)):c).map((function(e,t){return Object(y.jsxs)("div",{className:"orderComplet",children:[e?Object(y.jsxs)("h2",{children:["\u0417\u0430\u043a\u0430\u0437 \u2116 ",e.id," \u0441\u043e\u0437\u0434\u0430\u043d ",e.date]}):Object(y.jsxs)(p.a,{speed:2,width:525,height:30,viewBox:"0 0 525 30",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(y.jsx)("circle",{cx:"472",cy:"630",r:"86"}),Object(y.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"525",height:"30"})]}),Object(y.jsx)("div",{className:"sneakers",children:e&&e.items.map((function(e,t){return Object(r.createElement)(E,Object(j.a)(Object(j.a)({isLoading:n},e),{},{key:t}))}))||Object(R.a)(Array(4)).map((function(e,t){return Object(r.createElement)(E,Object(j.a)(Object(j.a)({isLoading:n},e),{},{key:t}))}))})]},t)}))})]})},C=c(38);var A=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),c=t[0],n=t[1],a=Object(o.b)(),i=Object(o.c)((function(e){return e.sneakersReducer})),s=i.items,d=i.isLoading,O=Object(o.c)((function(e){return e.cartItemsReducer.items})),b=Object(o.c)((function(e){return e.favoriteReducer}));return Object(r.useEffect)((function(){a((function(e){u.a.get("https://61012ec14e50960017c29c6a.mockapi.io/Items").then((function(t){var c=t.data;return e({type:"LOAD-SNEAKERS",payload:c})}))})),a(m()),a(l())}),[a]),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsxs)("div",{className:"title",children:[Object(y.jsx)("h1",{children:c?"\u041f\u043e\u043e\u0438\u0441\u043a \u043f\u043e: ".concat(c):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(y.jsxs)("div",{className:"search-block",children:[Object(y.jsx)("img",{src:"img/search.svg",alt:"search"}),Object(y.jsx)("img",{onClick:function(){return n("")},className:"btn-remove clear",src:"img/btn-remove.svg",alt:"remove"}),Object(y.jsx)("input",{onChange:function(e){n(e.target.value)},value:c,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(y.jsx)("div",{className:"sneakers",children:function(){var e=s.filter((function(e){return e.title.toUpperCase().includes(c.toUpperCase())}));return(d?Object(R.a)(Array(10)):e).map((function(e,t){return Object(r.createElement)(E,Object(j.a)(Object(j.a)({favorites:b,cartItems:O},e),{},{isLoading:d,key:t}))}))}()})]})},I=c(13);var w=function(){var e=Object(o.c)((function(e){return e.cartItemsReducer.totalPrice})),t=Object(o.b)();return Object(y.jsxs)("header",{children:[Object(y.jsx)(I.b,{className:"link",to:"/react-sneakers/",children:Object(y.jsxs)("div",{className:"headerLeft",children:[Object(y.jsx)("img",{height:40,width:40,src:"img/logo.png",alt:"\u041b\u041e\u0413\u041e"}),Object(y.jsxs)("div",{className:"headerInfo",children:[Object(y.jsx)("h3",{children:"REACT SNEAKERS"}),Object(y.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(y.jsxs)("ul",{className:"headerRight",children:[Object(y.jsxs)("li",{className:"cartBut",onClick:function(){t({type:"CART-OPENED"})},children:[Object(y.jsx)("img",{className:"cartButton",height:18,width:18,src:"img/cart.svg",alt:"Cart"}),Object(y.jsxs)("span",{children:[e," \u0440\u0443\u0431."]})]}),Object(y.jsx)("li",{children:Object(y.jsx)(I.b,{to:"/favorites",children:Object(y.jsx)("img",{className:"heart",height:18,width:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(y.jsx)("li",{children:Object(y.jsx)(I.b,{to:"/order",children:Object(y.jsx)("img",{height:18,width:18,src:"img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})};var T=function(e){var t=e.onClose,c=Object(o.c)((function(e){return e.drawerReducer})).isOrderComplet;return Object(y.jsxs)("div",{className:"cartEmpty",children:[Object(y.jsx)("img",{width:120,src:c?"img/complete-order.jpg":"img/empty-cart.jpg",alt:"emptyCart"}),Object(y.jsx)("h2",{children:c?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(y.jsx)("p",{children:c?"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 15 \u043c\u0438\u043d\u0443\u0442":"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441c\u043e\u0432\u043e\u043a"}),Object(y.jsxs)("button",{onClick:t,className:"greenButton rotate",children:[Object(y.jsx)("img",{src:"img/arrow.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})};var L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartItemsReducer})),c=t.items,n=t.totalPrice,a=Object(o.c)((function(e){return e.drawerReducer})).isLoading;Object(r.useEffect)((function(){e(m())}),[e]);var i=function(){e({type:"CART-OPENED"})},s=function(t){var c=new Date,r=c.getMinutes();r<10&&(r="0".concat(r));var n="".concat(c.getDate(),".").concat(c.getMonth()+1,".").concat(c.getFullYear()," - ").concat(c.getHours(),":").concat(r);e({type:"LOADING"}),e(function(e,t){return function(){var c=Object(h.a)(b.a.mark((function c(r){var n,a,i;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},c.next=3,u.a.post("https://61012ec14e50960017c29c6a.mockapi.io/Orders",e);case 3:a=0;case 4:if(!(a<t.length)){c.next=13;break}return i=t[a],c.next=8,u.a.delete("https://61012ec14e50960017c29c6a.mockapi.io/Cart/".concat(i.id));case 8:return c.next=10,n(1e3);case 10:a++,c.next=4;break;case 13:return c.abrupt("return",r({type:"CLEAR-CART"}));case 15:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}({items:t,date:n},t)),e({type:"COMPLETED-ORDER"}),e({type:"LOADING"})};return Object(y.jsx)("div",{className:"overlay",children:Object(y.jsxs)("div",{className:"drawer",children:[Object(y.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(y.jsx)("img",{onClick:i,className:"btn-remove",src:"img/btn-remove.svg",alt:"remove"})]}),c&&c.length>0?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"items",children:c.map((function(t,r){var n=t.imageURL,a=t.title,i=t.price;return Object(y.jsxs)("div",{className:"cartItem",children:[Object(y.jsx)("img",{className:"itemImage",width:70,height:70,src:n,alt:""}),Object(y.jsxs)("div",{className:"cartInfo",children:[Object(y.jsx)("p",{children:a}),Object(y.jsxs)("b",{children:[i," \u0440\u0443\u0431."]})]}),Object(y.jsx)("img",{onClick:function(){return function(t){var r=c.find((function(e){return e.keys===t.keys}));e(r?x(r.id):f(t))}(t)},className:"btn-remove",src:"img/btn-remove.svg",alt:"remove"})]},"".concat(a,"_").concat(r))}))}),Object(y.jsxs)("div",{className:"cartTotalBlock",children:[Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:[Object(y.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(y.jsx)("div",{}),Object(y.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(y.jsx)("div",{}),Object(y.jsxs)("b",{children:[.05*n," \u0440\u0443\u0431."]})]})]}),Object(y.jsxs)("button",{disabled:a,onClick:function(){return s(c)},className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(y.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})]})]})," "]}):Object(y.jsx)(T,{onClose:i})]})})};var D=function(){var e=Object(o.c)((function(e){return e.cartItemsReducer.cartOpened}));return Object(y.jsxs)("div",{className:"wrapper",children:[e&&Object(y.jsx)(L,{}),Object(y.jsx)(w,{}),Object(y.jsx)(s.a,{path:"/react-sneakers/",exact:!0,children:Object(y.jsx)(A,{})}),Object(y.jsx)(s.a,{path:"/favorites",exact:!0,children:Object(y.jsx)(k,{})}),Object(y.jsx)(s.a,{path:"/order",exact:!0,children:Object(y.jsx)(N,{})})]})},S=c(16),_={items:[],totalPrice:0,cartOpened:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD-CART-ITEMS":var c=t.payload;return Object(j.a)(Object(j.a)({},e),{},{items:c,totalPrice:c.reduce((function(e,t){return e+t.price}),0)});case"ADD-CART-ITEMS":var r=[].concat(Object(R.a)(e.items),[t.payload]);return Object(j.a)(Object(j.a)({},e),{},{items:r,totalPrice:r.reduce((function(e,t){return e+t.price}),0)});case"REMOVE-CART-ITEMS":var n=e.items.filter((function(e){return e.keys!==t.payload.keys}));return Object(j.a)(Object(j.a)({},e),{},{items:n,totalPrice:n.reduce((function(e,t){return e+t.price}),0)});case"CART-OPENED":return Object(j.a)(Object(j.a)({},e),{},{cartOpened:!e.cartOpened});case"CLEAR-CART":return Object(j.a)(Object(j.a)({},e),{},{items:[],totalPrice:0});default:return e}},P={items:[],isLoading:!0},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return"LOAD-SNEAKERS"===t.type?Object(j.a)(Object(j.a)({},e),{},{items:t.payload,isLoading:!1}):e},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD-FAVORITES-ITEMS":return t.payload;case"ADD-FAVORITES-ITEMS":return[].concat(Object(R.a)(e),[t.payload]);case"REMOVE-FAVORITES-ITEMS":return e.filter((function(e){return e.keys!==t.payload.keys}));default:return e}},F={isOrderComplet:!1,isLoading:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return"COMPLETED-ORDER"===t.type?Object(j.a)(Object(j.a)({},e),{},{isOrederComplet:!e.isOrderComplet}):"LOADING"===t.type?Object(j.a)(Object(j.a)({},e),{},{isLoading:!e.isLoading}):e},G={order:[],isLoading:!0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return"LOADING-ORDERS"===t.type?Object(j.a)(Object(j.a)({},e),{},{order:t.payload,isLoading:!1}):e},X=Object(S.b)({cartItemsReducer:M,sneakersReducer:V,favoriteReducer:B,drawerReducer:U,orderReducer:K}),J=c(37),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.c,Y=Object(S.d)(X,H(Object(S.a)(J.a)));i.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(I.a,{children:Object(y.jsx)(o.a,{store:Y,children:Object(y.jsx)(D,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a3fba1f1.chunk.js.map