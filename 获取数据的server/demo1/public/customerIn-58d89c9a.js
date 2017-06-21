webpackJsonp([29],{250:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(1),u=l(s),c=n(8),f=l(c),h=n(11),d=(l(h),n(13)),m=n(10),p=l(m),g=n(3),S=l(g);n(18);var y=n(536),v=l(y),I=n(26),C=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.resizeFun=function(){n.state.resizeHandler&&clearTimeout(n.state.resizeHandler),n.state.resizeHandler=setTimeout(function(){n.state.singleSellerCustomerInChart.resize()},100)},n.state={singleSellerCustomerInChart:"",resizeHandler:"",time:"",timeList:"",numList:"",percentList:"",tableSpace:1},n}return o(t,e),a(t,[{key:"componentDidMount",value:function(){this.state.time=this.props.time,this.props.singleSellerCustomerInInit(this.props.params.id,this.state.time);var e=f.default.findDOMNode(this.refs.singleSellerCustomerInChart);this.state.singleSellerCustomerInChart=S.default.init(e),this.state.singleSellerCustomerInChart.showLoading(),window.addEventListener("resize",this.resizeFun)}},{key:"componentWillReceiveProps",value:function(e){if(this.state.time!=e.time)return this.setState({time:e.time}),void this.props.singleSellerCustomerInInit(e.params.id,e.time);var t=e.customerIn.toJS();if(t.series&&t.series[0]&&t.series[0].data&&t.series[0].data[0]){var n=t.xAxis.data,l=t.series[0].data,r=t.series[1].data;this.setState({timeList:n,numList:l,percentList:r}),this.state.singleSellerCustomerInChart.setOption(t),this.state.singleSellerCustomerInChart.hideLoading()}}},{key:"componentWillUnmount",value:function(){this.state.singleSellerCustomerInChart.dispose(),window.removeEventListener("resize",this.resizeFun)}},{key:"render",value:function(){var e=this.state,t=e.timeList,n=e.numList,l=e.percentList,r=e.tableSpace,i=[];return t&&t.forEach(function(e,o){o%r||i.push(u.default.createElement("tr",{key:o},u.default.createElement("td",null,t[o]),u.default.createElement("td",null,n[o]),u.default.createElement("td",null,l[o],"%")))}),u.default.createElement("div",null,u.default.createElement("div",{className:"panel"},u.default.createElement("div",{className:"panelHead"},"商店入店量 ",u.default.createElement(I,{className:"questionMark"}),u.default.createElement("div",{className:"messageMark"},u.default.createElement("p",null,"展示商家在一定时间内的入店量及入店率",u.default.createElement("br",null),u.default.createElement("strong",null,"入店量"),"：时间段内进入商店的人数",u.default.createElement("br",null),u.default.createElement("strong",null,"入店率"),"：时间段内，从进入店铺内的客流量与店铺门口经过的客流量的比率。"))),u.default.createElement("div",{className:"panelBody"},u.default.createElement("div",{className:"singleSellerCustomerInChart",ref:"singleSellerCustomerInChart"}))),u.default.createElement("div",{className:"panel"},u.default.createElement("div",{className:"panelHead"},"商店入店量明细"),u.default.createElement("div",{className:"panelBody"},u.default.createElement("table",{className:"Table"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"时间"),u.default.createElement("th",null,"入店量"),u.default.createElement("th",null,"入店率"))),u.default.createElement("tbody",null,i)),u.default.createElement("div",null))))}}]),t}(u.default.Component);C.propTypes={singleSellerCustomerInInit:u.default.PropTypes.func.isRequired,customerIn:u.default.PropTypes.instanceOf(p.default.Map)};var E=function(e){return{customerIn:e.getIn(["b","customerIn"])}};t.default=(0,d.connect)(E,v.default)(C)},536:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(127),i=l(r),o=n(45),a=l(o),s=a.default.sellers,u=i.default.sellers,c={sellersListInit:function(){return function(e){fetch(u.sellersListInit+"/").then(function(e){return e.json()}).then(function(t){e({type:s.sellersListInit,payload:t})}).catch(function(e){console.log(e)})}},allSellersLineChartInit:function(e,t){return function(n){var l=u.allSellersLineChartInit+e+"/"+t+"/";fetch(l).then(function(e){return e.json()}).then(function(e){n({type:s.allSellersLineChartInit,payload:e})}).catch(function(e){console.log(e)})}},singleSellerLineChartInit:function(e,t){return function(n){var l=u.singleSellerLineChartInit+e+"/"+t+"/";fetch(l).then(function(e){return e.json()}).then(function(e){n({type:s.singleSellerLineChartInit,payload:e})}).catch(function(e){console.log(e)})}},singleSellerCustomerNumInit:function(e){return function(t){var n=u.singleSellerCustomerNumInit+e+"/";fetch(n).then(function(e){return e.json()}).then(function(e){t({type:s.singleSellerCustomerNumInit,payload:e})}).catch(function(e){console.log(e)})}},singleSellerCustomerNumFetch:function(e){var t=u.singleSellerCustomerNumFetch+e+"/";return function(e){fetch(t).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerNumFetch,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCustomerAvgInit:function(e,t){var n=u.singleSellerCustomerAvgInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerAvgInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCustomerFlowInit:function(e,t){var n=u.singleSellerCustomerFlowInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerFlowInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCustomerInInit:function(e,t){var n=u.singleSellerCustomerInInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerInInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerRadar:function(e){var t=u.singleSellerRadar+e+"/";return function(e){fetch(t).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerRadar,payload:t})}).catch(function(e){console.log(e)})}},singleSellerStayBar:function(e,t){var n=u.singleSellerStayBar+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerStayBar,payload:t})}).catch(function(e){console.log(e)})}},singleSellerOldOrNew:function(e,t){var n=u.singleSellerOldOrNew+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerOldOrNew,payload:t})}).catch(function(e){console.log(e)})}},singleSellerTimeSection:function(e,t){var n=u.singleSellerTimeSection+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerTimeSection,payload:t})}).catch(function(e){console.log(e)})}},singleSellerDeepVisit:function(e,t){var n=u.singleSellerDeepVisit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerDeepVisit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCycleInit:function(e,t){var n=u.singleSellerCycleInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCycleInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerActiveInit:function(e,t){var n=u.singleSellerActiveInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerActiveInit,payload:t})}).catch(function(e){console.log(e)})}}};t.default=c}});