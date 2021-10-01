(this["webpackJsonpdashboard-com-react"]=this["webpackJsonpdashboard-com-react"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(21),r=a.n(n),i=(a(28),a(29),a(7)),d=a(8),l=a(10),j=a(9),o=a(11),h=a(0),b=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(h.jsx)(o.b,{to:"/",className:"navbar-brand",children:"Dash"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"colapse","data-target":"#navbarNav",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-iten",children:Object(h.jsx)(o.b,{to:"/",className:"nav-link",children:"Resumo"})}),Object(h.jsx)("li",{className:"nav-iten",children:Object(h.jsx)(o.b,{to:"/consultas",className:"nav-link",children:"Consultas"})}),Object(h.jsx)("li",{className:"nav-iten",children:Object(h.jsx)(o.b,{to:"/faturamento",className:"nav-link",children:"Faturamento"})})]})})]})}}]),a}(c.Component),m="http://www.devup.com.br/php/api-dashboard/api";var u=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={consultas:{consultas_30dias_anteriores:0,consultas_30dias_posteriores:0},faturamento:{anterior:{valor:0,comparativo:0},previsao:{valor:0,comparativo:0}}},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/resumo"),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e.setState(t)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"mt-2",children:"Resumo"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("h3",{children:"Consultas"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-2 text-center",children:[Object(h.jsx)("div",{className:"card-header",children:"30 dias anteriores"}),Object(h.jsx)("div",{className:"card-body",children:this.state.consultas.consultas_30dias_anteriores})]})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-2 text-center",children:[Object(h.jsx)("div",{className:"card-header",children:"Pr\xf3ximos 30 dias"}),Object(h.jsx)("div",{className:"card-body",children:this.state.consultas.consultas_30dias_posteriores})]})})]})]}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("h3",{children:"Faturamento"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-2 text-center",children:[Object(h.jsx)("div",{className:"card-header",children:"30 dias anteriores"}),Object(h.jsxs)("div",{className:"card-body",children:[this.state.faturamento.anterior.valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),Object(h.jsxs)("span",{className:"badge ml-1 "+(this.state.faturamento.anterior.comparativo>0?"badge-success":"badge-danger"),children:[this.state.faturamento.anterior.comparativo," %"]})]})]})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-2 text-center",children:[Object(h.jsx)("div",{className:"card-header",children:"Pr\xf3ximos 30 dias"}),Object(h.jsxs)("div",{className:"card-body",children:[this.state.faturamento.previsao.valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),Object(h.jsxs)("span",{className:"badge ml-1 "+(this.state.faturamento.previsao.comparativo>0?"badge-success":"badge-danger"),children:[this.state.faturamento.previsao.comparativo," %"]})]})]})})]})]})]})]})}}]),a}(c.Component);var O=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={realizadas:[],marcadas:[]},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/consultas")).then((function(e){return e.json()})).then((function(t){return e.setState(t)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"mt-2",children:"Consultas"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-2",children:[Object(h.jsx)("div",{className:"card-header",children:"Realizadas"}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Especialidade"}),Object(h.jsx)("th",{children:"Quantidade"})]})}),Object(h.jsx)("tbody",{children:this.state.realizadas.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.especialidade}),Object(h.jsx)("td",{children:e.quantidade})]},t)}))})]})]})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-2",children:[Object(h.jsx)("div",{className:"card-header",children:"Marcadas"}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Especialidade"}),Object(h.jsx)("th",{children:"Quantidade"})]})}),Object(h.jsx)("tbody",{children:this.state.marcadas.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.especialidade}),Object(h.jsx)("td",{children:e.quantidade})]},t)}))})]})]})})]})]})}}]),a}(c.Component);var x=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={detalhamento:[]},c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/faturamento")).then((function(e){return e.json()})).then((function(t){return e.setState(t)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"mt-2",children:"Faturamento"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:"Total por forma de pagamento"}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(h.jsx)("th",{className:"text-right",children:"Valor"})]})}),Object(h.jsx)("tbody",{children:this.state.detalhamento.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.descricao}),Object(h.jsx)("td",{className:"text-right",children:e.valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})})]},t)}))})]})]})})})]})}}]),a}(c.Component),v=a(2);var p=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{exact:!0,path:"/",component:u}),Object(h.jsx)(v.a,{path:"/consultas",component:O}),Object(h.jsx)(v.a,{path:"/faturamento",component:x})]})})})})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))},f=a(16);window.Popper=f.default;var g=a(17);window.jQuery=window.$=g;a(35),a(36);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(p,{})})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.6511edae.chunk.js.map