(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(2),l=a.n(s),r=a(3),o=a(4),i=a(7),m=a(6),d=(a(13),a(5)),u=a.n(d),p=function(e){var t=e.item,a=e.selectHandler,n=e.selectedItem;return c.a.createElement("div",{className:"item"},c.a.createElement("button",{type:"button",className:u()("item__name",{"item__name--highlighted":n===t}),onClick:function(){return a(t)}},t))},g=function(e){var t=e.goods,a=e.selectHandler,n=e.selectedItem;return c.a.createElement("ul",{className:"goods"},t.map((function(e){return c.a.createElement("li",{className:"goods__item",key:e},c.a.createElement(p,{item:e,selectHandler:a,selectedItem:n}))})))};g.defaultProps={goods:[]};var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={selected:"-"},e.setSelected=function(t){e.setState({selected:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected good: ".concat(this.state.selected)),c.a.createElement("button",{type:"button",className:"App__button",onClick:function(){e.setState({selected:"-"})}},"Cancel"),c.a.createElement(g,{goods:h,selectHandler:this.setSelected,selectedItem:this.state.selected}))}}]),a}(c.a.Component);l.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5fd0ca84.chunk.js.map