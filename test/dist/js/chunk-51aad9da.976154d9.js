(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51aad9da","chunk-2d0cc054"],{"4bc3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("v-btn",t._g({attrs:{icon:"",dark:""}},s),[e("v-icon",[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-text",[e("v-container",{attrs:{"grid-list-sm":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Launch Slave")])])],1),e("v-flex",{attrs:{xs12:""}},[e("v-select",{attrs:{items:["Scraper","Processor","Shooter"],label:"Slave Type",required:""}})],1)],1)],1),e("small",[t._v("*indicates required field")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Launch")])],1)],1)],1)},l=[],r={data:function(){return{dialog:!1}}},n=r,i=e("2877"),c=e("6544"),o=e.n(c),d=e("8336"),v=e("b0af"),u=e("99d9"),f=e("12b2"),_=e("a523"),x=e("169a"),p=e("0e8f"),b=e("132d"),g=e("a722"),m=e("b56d"),V=e("9910"),h=Object(i["a"])(n,s,l,!1,null,null,null);a["default"]=h.exports;o()(h,{VBtn:d["a"],VCard:v["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:f["a"],VContainer:_["a"],VDialog:x["a"],VFlex:p["a"],VIcon:b["a"],VLayout:g["a"],VSelect:m["a"],VSpacer:V["a"]})},c3ed:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md6:"",lg8:""}},[e("v-card",[e("v-toolbar",{attrs:{color:"indigo",dark:""}},[e("v-toolbar-title",[e("h1",[t._v("Slaves")])]),e("v-spacer"),e("launch_slave_btn")],1),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.$store.getters.slaves,pagination:t.slave_pagination},on:{"update:pagination":function(a){t.slave_pagination=a}},scopedSlots:t._u([{key:"items",fn:function(a){return[e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.id))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.slave_type))]),1==a.item.active?e("td",{staticClass:"text-xs-left"},[e("v-icon",{attrs:{small:"",color:"green"}},[t._v(" check_circle")])],1):e("td",{staticClass:"text-xs-left"},[e("v-icon",{attrs:{small:"",color:"red"}},[t._v(" error ")])],1),e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.is_ec2))]),e("td",{staticClass:"px-0"},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                  delete\n                ")])],1)]}}])})],1)],1),e("v-flex",{attrs:{xs3:""}},[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("h1",{staticClass:"header"},[t._v("\n                  Actions\n                ")])]),e("v-btn",t._g({attrs:{color:"warning",dark:""}},t.on),[t._v("Modify Slave")])],1)],1)],1)],1)},l=[],r=e("4bc3"),n={components:{launch_slave_btn:r["default"]},methods:{},data:function(){return{slave_pagination:{sortBy:"active",descending:!0,rowsPerPage:6},dialog:!1,headers:[{text:"id",align:"left",sortable:!0,value:"id"},{text:"Type",value:"slave_type"},{text:"Status",value:"active"},{text:"Ec2",value:"is_ec2"},{text:"Remove",sortable:!1}]}}},i=n,c=e("2877"),o=e("6544"),d=e.n(o),v=e("8336"),u=e("b0af"),f=e("12b2"),_=e("a523"),x=e("8fea"),p=e("0e8f"),b=e("132d"),g=e("a722"),m=e("9910"),V=e("71d9"),h=e("2a7f"),C=Object(c["a"])(i,s,l,!1,null,null,null);a["default"]=C.exports;d()(C,{VBtn:v["a"],VCard:u["a"],VCardTitle:f["a"],VContainer:_["a"],VDataTable:x["a"],VFlex:p["a"],VIcon:b["a"],VLayout:g["a"],VSpacer:m["a"],VToolbar:V["a"],VToolbarTitle:h["a"]})}}]);
//# sourceMappingURL=chunk-51aad9da.976154d9.js.map