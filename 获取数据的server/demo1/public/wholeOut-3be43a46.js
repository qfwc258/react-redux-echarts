webpackJsonp([16],{241:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(1),u=l(c),m=a(8),d=l(m),o=a(11),f=(l(o),a(13)),p=a(10),h=(l(p),a(3)),E=l(h),v=a(21),T=l(v),N=a(537),y=l(N);a(18),a(28),a(19),a(27),a(20);var g=a(31),O=l(g),b=a(26),w=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.resizeFun=function(){a.state.resizeHandler&&clearTimeout(a.state.resizeHandler),a.state.compareOutChart&&(a.state.resizeHandler=setTimeout(function(){a.state.compareOutChart.resize()},100))},a.changeTime=function(e){if("active"!==e.target.className)switch(e.target.innerText){case"日":return void a.setState({time:"day",selectTime:"day"});case"周":return void a.setState({time:"week",selectTime:"week"});case"月":a.setState({time:"month",selectTime:"month"})}},a.search=function(){var e=d.default.findDOMNode(a.refs.selectTime1).getElementsByClassName("calendar")[0].getElementsByTagName("input")[0].value,t=d.default.findDOMNode(a.refs.selectTime2).getElementsByClassName("calendar")[0].getElementsByTagName("input")[0].value;e=y.default.changeTime(e),t=y.default.changeTime(t),d.default.findDOMNode(a.refs.selectTime1).className=d.default.findDOMNode(a.refs.selectTime1).className.replace(" selectTimeError",""),d.default.findDOMNode(a.refs.selectTime2).className=d.default.findDOMNode(a.refs.selectTime1).className.replace(" selectTimeError","");var l=new Date(e).getTime(),n=new Date(t).getTime(),s=Date.now(),i=!1;if(l>s&&(d.default.findDOMNode(a.refs.selectTime1).className+=" selectTimeError",i=!0),l>=n&&(d.default.findDOMNode(a.refs.selectTime2).className+=" selectTimeError",i=!0),n>s&&(d.default.findDOMNode(a.refs.selectTime2).className+=" selectTimeError",i=!0),i)return!1;a.props.outInit(e+","+t,a.state.selectTime),a.state.time1=e,a.state.time2=t},a.state={compareOutChart:"",resizeHandler:null,Data:[],selectTime:"day",time:"",time1:"",time2:"",timeList:"",num1List:"",num2List:"",percent1List:"",percent2List:""},a}return i(t,e),r(t,[{key:"componentDidMount",value:function(){var e=y.default.getTime();this.state.time=e,this.state.time1=e.split(",")[0],this.state.time2=e.split(",")[1],this.props.outInit(y.default.changeTime(this.state.time),this.state.selectTime),d.default.findDOMNode(this.refs.selectTime1).getElementsByClassName("calendar")[0].getElementsByTagName("input")[0].value=this.state.time.split(",")[0];var t=d.default.findDOMNode(this.refs.compareOutChart);this.state.compareOutChart=E.default.init(t),this.state.compareOutChart.showLoading(),window.addEventListener("resize",this.resizeFun)}},{key:"componentWillReceiveProps",value:function(e,t){var a=e.out.toJS();if(a.series[0].data&&a.series[0].data&&a.series[0].data[0]){var l=a.xAxis[0].data,n=a.xAxis[0].out1Num,s=a.xAxis[0].out2Num,i=a.series[0].data,r=a.series[1].data;this.setState({timeList:l,num1List:n,num2List:s,percent1List:i,percent2List:r}),a.legend.data.push("时间一","时间二"),a.series[0].name="时间一",a.series[1].name="时间二",this.state.compareOutChart.setOption(a),this.state.compareOutChart.hideLoading()}}},{key:"componentWillUnmount",value:function(){this.state.compareOutChart.dispose(),window.removeEventListener("resize",this.resizeFun)}},{key:"render",value:function(){var e=this.state,t=e.timeList,a=e.num1List,l=e.percent1List,n=e.num2List,s=e.percent2List,i=[],r=void 0,c=void 0;return t&&t.forEach(function(e,m){r=t[m].split("/")[0],c=t[m].split("/")[1],i.push(u.default.createElement("tr",{key:m},u.default.createElement("td",null,r),u.default.createElement("td",null,a[m]),u.default.createElement("td",null,l[m],"%"),u.default.createElement("td",null,c),u.default.createElement("td",null,n[m]),u.default.createElement("td",null,s[m],"%")))}),u.default.createElement("div",{className:"chartWrapper"},u.default.createElement("div",{className:"selectOption inline"},"时间：",u.default.createElement("div",{className:"selectTime1",ref:"selectTime1"},u.default.createElement(T.default,null)),"   对比时间： ",u.default.createElement("div",{className:"selectTime1",ref:"selectTime2"},u.default.createElement(T.default,null)),"      对比时间范围：",u.default.createElement("div",{className:"quickSelect defaultCursor"},u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{className:"day"==this.state.selectTime?"active":"",onClick:this.changeTime},"日")),u.default.createElement("li",null,u.default.createElement("a",{className:"week"==this.state.selectTime?"active":"",onClick:this.changeTime},"周")),u.default.createElement("li",null,u.default.createElement("a",{className:"month"==this.state.selectTime?"active":"",onClick:this.changeTime},"月")))),u.default.createElement("div",{className:"selectClick"},u.default.createElement("input",{type:"button",value:"查询",onClick:this.search}))),u.default.createElement("div",{className:"panel"},u.default.createElement("div",{className:"panelHead"},"跳出率对比 ",u.default.createElement(b,{className:"questionMark"}),u.default.createElement("div",{className:"messageMark"},u.default.createElement("p",null,"展示商城在两个时间段内的跳出率对比",u.default.createElement("br",null)))),u.default.createElement("div",{className:"panelBody"},u.default.createElement("div",{ref:"compareOutChart",className:"compareOutChart"}))),u.default.createElement("div",{className:"panel"},u.default.createElement("div",{className:"panelHead"},"跳出率对比明细"),u.default.createElement("div",{className:"panelBody"},u.default.createElement("table",{className:"Table"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"时间一"),u.default.createElement("th",null,"跳出量"),u.default.createElement("th",null,"跳出率"),u.default.createElement("th",null,"时间二"),u.default.createElement("th",null,"跳出量"),u.default.createElement("th",null,"跳出率"))),u.default.createElement("tbody",null,i)))))}}]),t}(u.default.Component);w.propTypes={};var C=function(e){return{out:e.getIn(["d","out"])}};t.default=(0,f.connect)(C,O.default)(w)},537:function(e,t,a){"use strict";function l(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,l=e.getDate();return t+"-"+a+"-"+(l-1)+","+t+"-"+a+"-"+l}function n(e){if(e){if(e.indexOf(",")>-1){var t=e.split(",");return n(t[0])+","+n(t[1])}var a=e.split("-");return a[1]=a[1]>=10?a[1]:"0"+a[1],a[2]=a[2]>=10?a[2]:"0"+a[2],a.join("-")}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={getTime:l,changeTime:n}}});