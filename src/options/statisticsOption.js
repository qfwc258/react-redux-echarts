

let options = {
	customerNum:{
        color:['#b6d0e9','#d14a61'],
        title:{
           text: "整体客流量",
           show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['客流量','入店率']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                boundaryGap : false,
                data: undefined
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '客流量',

                // min: 0,
                // max: 250,
                // interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '入店率',
                position: 'right',

                // min: -5,
                // max: 5,
                // interval: 1,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name:'客流量',
                type:'line',
                smooth:true,
                areaStyle: {
                    normal: {
                        // color:'#ccdef0'
                        // color:'red'
                    }},
                data:undefined
            },
            
            {
                name:'入店率',
                type:'line',
                yAxisIndex: 1,
                smooth:true,
                data:undefined
            }
        ]
    },
    oldOrNew:{
        title : {
            text: '新老顾客',
            x:'center',
            show:false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        legend: {
            data: ['新顾客', '老顾客']
        },
        // grid: {
        //     left: '5%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        xAxis: [{
            type: 'category',
            data: undefined
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '新顾客',
            type: 'bar',
            stack: '顾客',
            data: undefined,
            label: {
                normal: {
                    show: true
                }
            },
        }, {
            name: '老顾客',
            type: 'bar',
            stack: '顾客',
            data: undefined,
            label: {
                normal: {
                    show: true
                }
            },
        }, ]
    },
    timeSection:{
        title:{
           text: "各时间段占比",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['各时间段占比']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: undefined
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'各时间段占比',
                type:'bar',
                label: {
                normal: {
                    position: 'top',
                    show: false
                    }
                },
                data:undefined
            }
        ]
    },
    cycle:{
        title:{
           text: "来访周期",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['来访周期']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: undefined
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'来访周期',
                type:'bar',
                label: {
                normal: {
                    position: 'top',
                    show: false
                    }
                },
                data:undefined
            }
        ]
    },
    active:{
        title:{
           text: "活跃度",
           show:false
        },
        tooltip: {
            // trigger: 'axis'
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
            data:['活跃度']
        },
        xAxis: [
            {
                type: 'category',
                axisLabel:{interval:0},
                data: undefined
            }
        ],
        yAxis: {
            //     type: 'value',
            //     name: '店铺客流量',

            //     // min: 0,
            //     // max: 250,
            //     // interval: 50,
            //     axisLabel: {
            //         formatter: '{value}'
            //     }
            // }
        },
        series: [{
                name:'活跃度',
                type:'bar',
                label: {
                normal: {
                    position: 'top',
                    show: false
                    }
                },
                data:undefined
            }
        ]
    
    }
}

export default options;