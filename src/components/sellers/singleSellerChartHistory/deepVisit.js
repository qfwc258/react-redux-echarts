import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
const FaQuestion = require('react-icons/lib/fa/question');

import sellersAction from '../../../actions/sellersAction';

class _deepVisit extends React.Component {
  static propTypes = {
    singleSellerDeepVisit: React.PropTypes.func.isRequired,
    deepVisit: React.PropTypes.instanceOf(Immutable.Map)
  }
  constructor(props) {
    super(props);
    this.state = {
      singleSellerDeepVisitChart: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      deepList: '',
      deepPercentList: '',
      outList: '',
      outPercentList: ''
    };
  }
  componentDidMount() {
		// debugger
    this.state.time = this.props.time;
    this.props.singleSellerDeepVisit(this.props.params.id, this.state.time);

    const singleSellerDeepVisitChart = ReactDOM.findDOMNode(this.refs.singleSellerDeepVisitChart);
	  this.state.singleSellerDeepVisitChart = echarts.init(singleSellerDeepVisitChart);
    this.state.singleSellerDeepVisitChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.singleSellerDeepVisitChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.singleSellerDeepVisit(nextProps.params.id, nextProps.time);
      return;
    }
    const deep = nextProps.deepVisit.toJS();
    if (deep.series && deep.series[0] && deep.series[0].data && deep.series[0].data[0]) {
      const timeList = deep.xAxis.data;
      const deepList = deep.xAxis.deepNum;
      const deepPercentList = deep.series[0].data;
      const outList = deep.xAxis.outNum;
      const outPercentList = deep.series[1].data;
      this.setState({timeList, deepList, deepPercentList, outList, outPercentList});
      this.state.singleSellerDeepVisitChart.setOption(deep);
      this.state.singleSellerDeepVisitChart.hideLoading();
    }
  }
	// componentDidUpdate(){


	// }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')
		// debugger

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.singleSellerDeepVisitChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    const {timeList, deepList, deepPercentList, outList, outPercentList} = this.state;
    const rows = [];
    if (timeList) {
      timeList.forEach((item, i) => {
        rows.push(<tr key={i}><td>{timeList[i]}</td><td>{deepList[i]}</td><td>{deepPercentList[i]}%</td><td>{outList[i]}</td><td>{outPercentList[i]}%</td></tr>);
      });
    }
    return (<div>
      <div className="panel">
        <div className="panelHead">深访率&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示在一定时间内深访店铺所占入店量的比例<br /><strong>深访定义</strong>：停留时长超过{}分钟的顾客<br /></p></div></div>
        <div className="panelBody">
          <div className="singleSellerDeepVisitChart" ref="singleSellerDeepVisitChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">深访率明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>深访人数</th><th>深访率</th><th>跳出人数</th><th>深访率</th></tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({
  deepVisit: state.getIn(['b', 'deepVisit'])
});


export default connect(mapStateToProps, sellersAction)(_deepVisit);
