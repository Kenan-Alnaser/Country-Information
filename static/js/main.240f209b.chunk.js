(this["webpackJsonpcountry-information"]=this["webpackJsonpcountry-information"]||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(13),r=n.n(a),i=(n(19),n(3)),o=n(14),j=n.n(o),l=n(0),u=function(){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("div",{className:"loadingContainer",children:[Object(l.jsx)("div",{className:"loader"}),Object(l.jsx)("h1",{children:"Loading ..."})]})})},b=function(e){var t=e.results.map((function(e,t){console.log(e);var n=e.name,c=e.flag,s=e.capital,a=e.population,r=e.callingCodes,i=e.currencies,o=e.languages,j=e.region,u=e.timezones;return Object(l.jsxs)("div",{className:"countries",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsxs)("h5",{children:["Region: ",j]}),Object(l.jsxs)("h5",{children:["Currencies: ",i[0].symbol," ",i[0].name]}),Object(l.jsxs)("h5",{children:["Languages: ",o[0].name]}),Object(l.jsxs)("h5",{children:["Calling Code: +",r]}),Object(l.jsxs)("h5",{children:["Capital: ",s]}),Object(l.jsxs)("h5",{children:["Population: ",a]}),Object(l.jsxs)("h5",{children:["Time Zones: ",u]}),Object(l.jsx)("img",{src:c,alt:n,className:"flag"})]},t)}));return Object(l.jsx)(s.a.Fragment,{children:t})},h=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),h=o[0],d=o[1],O=Object(c.useState)(!0),m=Object(i.a)(O,2),x=m[0],g=m[1];return Object(c.useEffect)((function(){setTimeout((function(){g(!1)}),1500)}),[]),x?Object(l.jsx)(u,{}):Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=encodeURIComponent(n);console.log(t);var c="https://restcountries.eu/rest/v2/name/".concat(t);j()(c).then((function(e){var t=e.data;return d(t)})).catch((function(e){return console.log("Your had an ".concat(e))}))},children:[Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)},placeholder:"Write a country name"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]}),Object(l.jsx)(b,{results:h})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.240f209b.chunk.js.map