"use strict";(self["webpackChunkplant_rubik"]=self["webpackChunkplant_rubik"]||[]).push([[122],{5122:function(s,t,i){i.r(t),i.d(t,{default:function(){return C}});var a=function(){var s=this,t=s._self._c;return t("comp-product")},e=[],c=function(){var s=this,t=s._self._c;return t("section",{staticClass:"search-products"},[t("form",{staticClass:"form",attrs:{action:""}},[t("div",{staticClass:"box-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Tìm kiếm sản phẩm..."},domProps:{value:s.searchQuery},on:{input:function(t){t.target.composing||(s.searchQuery=t.target.value)}}}),t("i",{staticClass:"fa-solid fa-magnifying-glass"})])]),t("div",{staticClass:"box-container-products"},[t("div",{staticClass:"products-box"},s._l(s.resultQuery,(function(i,a){return t("div",{key:`item-${a}`,class:i.cls},[t("div",{staticClass:"image"},[t("img",{attrs:{src:i.img,alt:""}})]),t("div",{staticClass:"content"},[t("div",{staticClass:"evalute"},[t("div",{staticClass:"name"},[s._v(" "+s._s(i.name)+" ")]),t("div",{staticClass:"start"},[t("i",{class:i.icon}),t("i",{class:i.icon}),t("i",{class:i.icon}),t("i",{class:i.icon}),t("i",{class:i.icon})])]),t("div",{staticClass:"shopping"},[t("div",{staticClass:"price"},[t("span",{staticClass:"price-old"},[s._v(" "+s._s(s.totalPrice(i?.price_old))+" ")]),t("span",{staticClass:"price-new"},[s._v(" "+s._s(s.totalPrice(i?.price_new))+" ")])])]),t("button",{staticClass:"shopping-cart",on:{click:function(t){return s.viewModel(i)}}},[t("i",{staticClass:"fa-solid fa-cart-shopping"})])])])})),0),s._l(s.storeView,(function(i){return t("div",{key:i.id,class:i.clss},[t("div",{staticClass:"detail-container"},[t("div",{staticClass:"fa-solid fa-xmark",attrs:{id:"btn-closeDetail"},on:{click:function(t){return s.removeView(i.id)}}}),t("div",{staticClass:"detail-image"},[t("img",{attrs:{src:i.img,alt:""}})]),t("div",{staticClass:"detail-content"},[t("div",{staticClass:"list-name"},[t("h3",[s._v(s._s(i.name))])]),t("div",{staticClass:"list-evaluate"},[t("div",{staticClass:"start"},[t("i",{class:i.icon}),t("i",{class:i.icon}),t("i",{class:i.icon}),t("i",{class:i.icon}),t("i",{class:i.icon})]),s._m(0,!0)]),t("div",{staticClass:"list-price"},[t("span",{staticClass:"list-priceNew"},[s._v(" "+s._s(s.totalPrice(i?.price_new))+" ")]),t("span",{staticClass:"list-priceOld"},[s._v(s._s(s.totalPrice(i.price_old)))])]),t("div",{staticClass:"list-desc"},[t("p",[s._v(s._s(i.describe))])]),t("div",{staticClass:"switch-add"},[t("div",{staticClass:"add-button",on:{click:function(t){s.addToCart(i),s.showAlert()}}},[t("button",[s._v(" Thêm vào giỏ hàng")])])])])])])}))],2)])},r=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"review"},[t("a",{attrs:{href:"/"}},[s._v("(đánh giá khách hàng)")])])}],l=(i(6699),i(3822)),n={name:"comp-product",data(){return{searchQuery:""}},computed:{...(0,l.Se)(["products","storeView"]),resultQuery(){return this.searchQuery?this.products.filter((s=>this.searchQuery.toLowerCase().split("").every((t=>s.name.toLowerCase().includes(t))))):this.products}},methods:{...(0,l.nv)(["","getProducts","viewModel","removeView","addQtyPopup","removeQty","addToCart"]),showAlert(){this.$swal.fire({icon:"success",title:"Sản phẩm được thêm vào giỏ hàng 😉"})},totalPrice(s){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(s)}},mounted(){this.getProducts()}},o=n,d=i(1001),u=(0,d.Z)(o,c,r,!1,null,"1c9965f9",null),v=u.exports,p={components:{CompProduct:v}},m=p,h=(0,d.Z)(m,a,e,!1,null,null,null),C=h.exports}}]);
//# sourceMappingURL=122.0978bb3a.js.map