(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{5803:function(e,n,t){"use strict";t.r(n),t.d(n,"ChangePassword",function(){return j});var a=t(30),r=t(24),c=t.n(r),i=t(28),o=t(19),s=t(58),u=t(0),l=t.n(u),d=t(59),f=t(5818),h=t(75),b=t(55),m=t(83);function p(){var e=Object(s.a)(["\n        mutation ($data: ChangePassword!) {\n          changePassword(data: $data)\n        }\n      "]);return p=function(){return e},e}function v(){var e=Object(s.a)(["\n            query ($id: String!) {\n                oneUser(id: $id) {\n                    name\n                    id\n                    auth\n                    message\n                }\n            }\n        "]);return v=function(){return e},e}function w(){var e=Object(s.a)(["\n    &&& {\n      display: block;\n    }\n  "]);return w=function(){return e},e}function O(){var e=Object(s.a)(["\n    > header {\n      > section {\n        display: flex;\n        > aside {\n          width: 80px;\n        }\n      }\n    }\n  "]);return O=function(){return e},e}var g={ChangePassword:Object(d.a)("div")(O()),Submit:Object(d.a)(h.a)(w())},j=function(e){var n=e.match.params.id,t=Object(u.useState)({}),r=Object(o.a)(t,2),s=r[0],d=r[1];Object(u.useEffect)(function(){Object(i.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.query({query:Object(f.a)(v()),variables:{id:n}});case 2:t=e.sent,d(t.data.oneUser);case 4:case"end":return e.stop()}},e,this)}))()},[]);var w=Object(u.useState)({}),O=Object(o.a)(w,2),j=O[0],E=O[1],k=function(){var e=Object(i.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(j.newPass){e.next=3;break}return Object(b.b)({message:"\u8bf7\u8f93\u5165password"}),e.abrupt("return");case 3:return e.next=5,m.a.mutate({mutation:Object(f.a)(p()),variables:{data:Object(a.a)({id:s.id},j)}});case 5:n=e.sent,Object(b.b)({message:n.data.changePassword});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(g.ChangePassword,null,l.a.createElement("header",null,l.a.createElement("section",null,l.a.createElement("aside",null,"name:"),l.a.createElement("main",null,s.name)),l.a.createElement("section",null,l.a.createElement("aside",null,"auth:"),l.a.createElement("main",null,s.auth))),l.a.createElement("form",null,l.a.createElement(h.c,null,l.a.createElement(h.i,{label:"verification",value:j.verification||"",onChange:function(e){return E(Object(a.a)({},j,{verification:e.target.value}))}}),l.a.createElement(h.i,{label:"newPass",value:j.newPass||"",onChange:function(e){return E(Object(a.a)({},j,{newPass:e.target.value}))}})),l.a.createElement(g.Submit,{onClick:k},"submit")))};n.default=j},5818:function(e,n,t){"use strict";var a=t(7),r=t(18),c=t(261),i=t(268),o=t(263),s=t(167),u=t(259),l=t.n(u);t.d(n,"a",function(){return l.a});var d=t(182),f=["request","uri","credentials","headers","fetch","fetchOptions","clientState","onError","cacheRedirects","cache","name","version"];!function(e){function n(n){void 0===n&&(n={});if(n){var t=Object.keys(n).filter(function(e){return-1===f.indexOf(e)});t.length>0&&console.warn("ApolloBoost was initialized with unsupported options: "+t.join(" "))}var u=n.request,l=n.uri,d=n.credentials,h=n.headers,b=n.fetch,m=n.fetchOptions,p=n.clientState,v=n.cacheRedirects,w=n.onError,O=n.name,g=n.version,j=n.cache;if(j&&v)throw new Error("Incompatible cache configuration. If providing `cache` then configure the provided instance with `cacheRedirects` instead.");j||(j=v?new s.a({cacheRedirects:v}):new s.a);var E=!!p&&Object(i.withClientState)(a.a({},p,{cache:j})),k=w?Object(o.onError)(w):Object(o.onError)(function(e){var n=e.graphQLErrors,t=e.networkError;n&&n.map(function(e){var n=e.message,t=e.locations,a=e.path;return console.log("[GraphQL error]: Message: "+n+", Location: "+t+", Path: "+a)}),t&&console.log("[Network error]: "+t)}),P=!!u&&new r.ApolloLink(function(e,n){return new r.Observable(function(t){var a;return Promise.resolve(e).then(function(e){return u(e)}).then(function(){a=n(e).subscribe({next:t.next.bind(t),error:t.error.bind(t),complete:t.complete.bind(t)})}).catch(t.error.bind(t)),function(){a&&a.unsubscribe()}})}),x=new c.HttpLink({uri:l||"/graphql",fetch:b,fetchOptions:m||{},credentials:d||"same-origin",headers:h||{}}),C=r.ApolloLink.from([k,P,E,x].filter(function(e){return!!e}));return e.call(this,{cache:j,link:C,name:O,version:g})||this}a.b(n,e)}(d.default)}}]);
//# sourceMappingURL=10.b6e36551.chunk.js.map