(this["webpackJsonpui-products"]=this["webpackJsonpui-products"]||[]).push([[0],{40:function(e,t,n){e.exports=n(99)},45:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),i=(n(45),n(46),n(47),n(48),n(38)),o=n(7),u=n(32),d=n(33),s=n(12),m=n.n(s),f=function(){function e(){Object(u.a)(this,e),this.baseUrl="https://springapimongo.herokuapp.com/api/"}return Object(d.a)(e,[{key:"create",value:function(e){return m.a.post(this.baseUrl+"producto/crear",e).then((function(e){return e.data}))}},{key:"readAll",value:function(){return m.a.get(this.baseUrl+"producto/listar").then((function(e){return e.data}))}},{key:"update",value:function(e){return m.a.put(this.baseUrl+"producto/actulizar"+e._id,e).then((function(e){return e.data}))}},{key:"delete",value:function(e){return m.a.post(this.baseUrl+"producto/borrar"+e).then((function(e){return e.data}))}}]),e}(),p=Object(a.createContext)(),b=function(e){var t=new f,n=Object(a.useState)([]),l=Object(o.a)(n,2),c=l[0],u=l[1],d=Object(a.useState)(null),s=Object(o.a)(d,2),m=s[0],b=s[1];Object(a.useEffect)((function(){t.readAll().then((function(e){return u(e)}))}),[]);return r.a.createElement(p.Provider,{value:{createProduct:function(e){t.create(e).then((function(e){return u([].concat(Object(i.a)(c),[e]))}))},deleteProduct:function(e){t.delete(e).then((function(){return u(c.filter((function(t){return t._id!==e})))}))},findProduct:function(e){var t=c.find((function(t){return t._id===e}));b(t)},updateProduct:function(e){t.update(e).then((function(t){return u(c.map((function(n){return n._id===e._id?t:e})))})),b(null)},editProduct:m,products:c}},e.children)},v=n(34),E=n(35),h=n(8),g=n(11),O=n(15),C=n(36),j=n(37),P=n(16),k=n(17),y=(n(96),function(e){var t=e.isVisible,n=e.setIsVisible,l=Object(a.useContext)(p),c=l.createProduct,i=l.deleteProduct,u=l.editProduct,d=l.updateProduct,s={_id:null,id:0,nombre:"",precio:0,cantidad:0,descripcion:null},m=Object(a.useState)(s),f=Object(o.a)(m,2),b=f[0],v=f[1];Object(a.useEffect)((function(){u&&v(u)}),[u]);var E=function(e,t){v(Object(C.a)({},b,Object(O.a)({},t,e))),console.log(b)},h=r.a.createElement("div",{className:"ui-dialog-buttonpane p-clearfix"},r.a.createElement(g.Button,{label:"Delete",icon:"pi pi-times",onClick:function(){u&&(i(b._id),v(s)),n(!1)}}),r.a.createElement(g.Button,{label:"Save",icon:"pi pi-check",onClick:function(){u?d(b):c(b),v(s),n(!1)}}));return r.a.createElement("div",null,r.a.createElement(j.Dialog,{visible:t,modal:!0,style:{width:"420px"},contentStyle:{overflow:"visible"},header:"Detalles del Producto",onHide:function(){return n(!1),void v(s)},footer:h},r.a.createElement("div",{className:"p-grid p-fluid"},r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(P.InputText,{value:b.name,onChange:function(e){return E(e.target.value.trim(),"nombre")}}),r.a.createElement("label",null,"Nombre:")),r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(k.InputNumber,{value:b.price,onChange:function(e){return E(e.target.value,"precio")},mode:"currency",currency:"USD"}),r.a.createElement("label",null,"Precio:")),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(k.InputNumber,{value:b.cantidad,onChange:function(e){return E(e.target.value,"cantidad")}}),r.a.createElement("label",null,"Precio:")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(P.InputText,{value:b.descripcion,onChange:function(e){return E(e.target.value.trim(),"descripcion")}}),r.a.createElement("label",null,"Descripcion:")))))}),w=function(){var e=Object(a.useContext)(p),t=e.products,n=e.findProduct,l=Object(a.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1],d=r.a.createElement("div",{className:"p-clearfix",style:{width:"100%"}},r.a.createElement(g.Button,{style:{float:"left"},icon:"pi pi-plus",label:"Add",onClick:function(){return u(!0)}}));return r.a.createElement("div",null,r.a.createElement(v.Panel,{header:"LISTA DE PRODUCTOS",style:{textAlign:"center"}},r.a.createElement(E.DataTable,{value:t,selectionMode:"single",onSelectionChange:function(e){return t=e.value._id,n(t),void u(!0);var t},footer:d},r.a.createElement(h.Column,{field:"_id",header:"Id"}),r.a.createElement(h.Column,{field:"id",header:"Ids"}),r.a.createElement(h.Column,{field:"name",header:"Nombre"}),r.a.createElement(h.Column,{field:"precio",header:"Precio"}),r.a.createElement(h.Column,{field:"cantidad",header:"Cantidad"}),r.a.createElement(h.Column,{field:"descripcion",header:"Descripcion"}))),r.a.createElement(y,{isVisible:i,setIsVisible:u}))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b32c93e6.chunk.js.map