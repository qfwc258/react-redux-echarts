const baseUrl='http://localhost:8181/oldpie/';
export default {
	firstPage:{
		numInit:'http://localhost:3000/hour/init',
		fetch:'http://localhost:3000/hour/fetch',
		sellersInit:'http://localhost:3000/index/sellersInit'
	},
	sellers:{
		sellersListInit:'http://localhost:3003',
		allSellersLineChartInit:'http://localhost:3000/index/allsellers/',
		// allSellersTableInit:'http://localhost:3003/allsellers/allSellersTableInit',
		singleSellerLineChartInit:'http://localhost:3000/hour/singleSeller/',
		singleSellerCustomerNumInit:'http://localhost:3000/hour/singleSellerCustomerNumInit/',
		singleSellerCustomerNumFetch:'http://localhost:3000/hour/singleSellerCustomerNumFetch/',
		singleSellerCustomerInInit:'http://localhost:3000/hour/singleSellerCustomerInInit/',
		singleSellerCustomerFlowInit:'http://localhost:3000/hour/singleSellerCustomerFlowInit/',
		singleSellerRadar:'http://localhost:3000/hour/singleSellerRadar/',
		singleSellerStayBar:'http://localhost:3000/hour/singleSellerStayBar/',
		singleSellerOldOrNew:'http://localhost:3000/hour/singleSellerOldOrNew/',
		singleSellerTimeSection:'http://localhost:3000/hour/singleSellerTimeSection/',
		singleSellerDeepVisit:'http://localhost:3000/hour/singleSellerDeepVisit/',
		// singleSellerCycleAndActive:'http://localhost:3000/hour/singleSellerCycleAndActive/',
		singleSellerCycleInit:'http://localhost:3000/index/singleSellerCycleInit/',
		singleSellerActiveInit:'http://localhost:3000/index/singleSellerActiveInit/'
	},
	statistics:{
		statisticsCustomerNumInit:'http://localhost:3000/index/statisticsCustomerNumInit/',
		statisticsPeakInit:'http://localhost:3000/index/statisticsPeakInit/',
		statisticsOldOrNewInit:'http://localhost:3000/hour/statisticsOldOrNewInit/',
		statisticsTimeSectionInit:'http://localhost:3000/hour/statisticsTimeSectionInit/',
		statisticsCycleInit:'http://localhost:3000/index/statisticsCycleInit/',
		statisticsActiveInit:'http://localhost:3000/index/statisticsActiveInit/'
	},
	compare:{
		numInit:'http://localhost:3000/index/compareCustomerNum/',
		numInInit:'http://localhost:3000/index/numInInit/',
		cycleInit:'http://localhost:3000/index/customerCycleInit/',
		activeInit:'http://localhost:3000/index/customerActiveInit/',
		oldOrNewInit:'http://localhost:3000/index/customerOldOrNewInit/',
		deepVisitInit:'http://localhost:3000/index/customerDeepVisitInit',
		// outInit:'http://localhost:3000/index/customerOutInit',
		sellersNumInit:'http://localhost:3000/index/sellersNumInit/',
		sellersListInit:'http://localhost:3003',
		sellersInInit:'http://localhost:3000/index/sellersInInit/',
		sellersOldOrNewInit:'http://localhost:3000/index/sellersOldOrNewInit/',
		sellersOutInit:'http://localhost:3000/index/sellersDeepInit/',
		sellersDeepInit:'http://localhost:3000/index/sellersDeepInit/',
		sellersStayInit:'http://localhost:3000/index/sellersStayBarInit/',
		sellersActiveInit:'http://localhost:3000/index/sellersActiveInit/',
		sellersTimeSectionInit:'http://localhost:3000/index/sellersTimeSectionInit',
		sellersCycleInit:'http://localhost:3000/index/sellersCycleInit/'
	}
}