(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e753a060"],{"071d":function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),l("el-table-column",{attrs:{label:"币种",align:"center",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.symbol)+" ")]}}])}),l("el-table-column",{attrs:{label:"交易数量",align:"center",width:"70","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.quantity))])]}}])}),l("el-table-column",{attrs:{label:"止盈率",align:"center",width:"70","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.rate)+"% ")]}}])}),l("el-table-column",{attrs:{label:"买单价",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.buy_price)+" ")]}}])}),l("el-table-column",{attrs:{label:"卖单价",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.sell_price)+" ")]}}])}),l("el-table-column",{attrs:{label:"当前数量",align:"center",width:"70","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.buy_quantity)+" ")]}}])}),l("el-table-column",{attrs:{type:"expand",label:"交易记录",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("el-table",{attrs:{data:n.history_trade,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}],null,!0)}),l("el-table-column",{attrs:{label:"交易数量",align:"center",width:"75","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s(l.quantity)+" ")]}}],null,!0)}),l("el-table-column",{attrs:{label:"交易价格",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s(l.price)+" ")]}}],null,!0)}),l("el-table-column",{attrs:{label:"交易方向",align:"center",width:"75"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s("BUY"===l.side?"买入":"卖出")+" ")]}}],null,!0)}),l("el-table-column",{attrs:{label:"已卖出",align:"center",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[!0===n.isSell?l("span",{staticStyle:{color:"green"}},[t._v("是")]):!1===n.isSell?l("span",{staticStyle:{color:"red"}},[t._v("否 ")]):l("span",[t._v("-")])]}}],null,!0)}),l("el-table-column",{attrs:{label:"交易时间",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v(" "+t._s(l.time)+" ")]}}],null,!0)})],1)]}}])})],1)],1)},r=[],a=l("1da1"),o=(l("96cf"),l("2465")),i={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var l,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(o["a"])();case 3:l=e.sent,n=l.data,t.list=n.list,t.listLoading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},u=i,s=l("2877"),c=Object(s["a"])(u,n,r,!1,null,null,null);e["default"]=c.exports},2465:function(t,e,l){"use strict";l.d(e,"a",(function(){return r})),l.d(e,"b",(function(){return a}));var n=l("b775");function r(){return Object(n["a"])({url:"/trades",method:"get"})}function a(t){return Object(n["a"])({url:"/trades",method:"put",data:t})}}}]);