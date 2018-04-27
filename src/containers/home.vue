<template>
    <div>
        <Col span="12">
            <Card style="margin:20px 0 0 20px">
                <Form :model="setting" :label-width="100">
                    <FormItem label="自动切换">
                        <i-switch v-model="setting.autoplay">
                            <span slot="open">On</span>
                            <span slot="close">Off</span>
                        </i-switch>
                    </FormItem>
                    <FormItem label="圆形指示器">
                        <i-switch v-model="setting.radiusDot">
                            <span slot="open">On</span>
                            <span slot="close">Off</span>
                        </i-switch>
                    </FormItem>
                    <FormItem label="自动切换速度">
                        <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
                    </FormItem>
                    <FormItem label="指示器位置">
                        <RadioGroup v-model="setting.dots" type="button">
                            <Radio label="inside">内部</Radio>
                            <Radio label="outside">外部</Radio>
                            <Radio label="none">不显示</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="切换箭头">
                        <RadioGroup v-model="setting.arrow" type="button">
                            <Radio label="hover">悬停显示</Radio>
                            <Radio label="always">总显示</Radio>
                            <Radio label="never">不显示</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="指示器触发方式">
                        <RadioGroup v-model="setting.trigger" type="button">
                            <Radio label="click">点击</Radio>
                            <Radio label="hover">悬停</Radio>
                        </RadioGroup>
                    </FormItem>
                </Form>
                <Carousel
                    v-model="value3"
                    :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots"
                    :radius-dot="setting.radiusDot"
                    :trigger="setting.trigger"
                    :arrow="setting.arrow">
                    <CarouselItem>
                        <div class="demo-carousel blue">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel red">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel green">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel yellow">4</div>
                    </CarouselItem>
                </Carousel>
            </Card>
        </Col>
        <Col span="12">
            <Card style="margin:20px 0 0 20px">
                <Collapse v-model="value1">
                <Panel name="1">
                    故障报警
                    <p slot="content">无</p>
                </Panel>
                <Panel name="2">
                    运行策略
                    <p slot="content">冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制冷机室内负荷反馈控制</p>
                </Panel>
                <Panel name="3">
                    关键指标
                    <p slot="content">冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组1-冷冻一次泵开启台数反馈冷冻一次泵组</p>
                </Panel>
            </Collapse>
            </Card>
        </Col>
        <Col span="12">
            <Card style="margin:20px 0 0 20px">
                写点什么呢
            </Card>
        </Col>
        <Col span="24">
            <Card style="margin:20px 0 0 20px">
                <div id='pie1' style="width:100%;height:300px">
                </div>
            </Card>
        </Col>
        <BackTop></BackTop>
    </div>
</template>
<script>
import echarts from 'echarts'
    export default {
        data () {
            return {
                value1: [1,2,3],
                value3: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'hover'
                },
                option :{
                    backgroundColor: 'rgb(43, 51, 59)',
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    "tooltip": {
                        "trigger": "item",
                        "formatter": "{a}<br/>{b}:{c}千万元"
                    },
                    "title": {
                        "text": "南丁格尔玫瑰图--PieHalfRose",
                        "left": "center",
                        "top": 20,
                        "textStyle": {
                            "color": "#ccc"
                        }
                    },
                    // "calculable": true,
                    "legend": {
                        "icon": "circle",
                        "x": "center",
                        "y": "15%",
                        "data": [
                            "义乌市1",
                            "义乌市2",
                            "义乌市3",
                            "义乌市4",
                            "义乌市5",
                            "义乌市6",
                            "义乌市7",
                            "义乌市8",
                            "义乌市9"
                        ],
                        "textStyle": {
                            "color": "#fff"
                        }
                    },
                    "series": [{
                        "name": "XX线索",
                        "type": "pie",
                        "radius": [
                            37,
                            155
                        ],
                        "avoidLabelOverlap": false,
                        "startAngle": 0,
                        "center": [
                            "50.1%",
                            "34%"
                        ],
                        "roseType": "area",
                        "selectedMode": "single",
                        "label": {
                            "normal": {
                                "show": true,
                                "formatter": "{c}千万元"
                            },
                            "emphasis": {
                                "show": true
                            }
                        },
                        "labelLine": {
                            "normal": {
                                "show": true,
                                "smooth": false,
                                "length": 20,
                                "length2": 10
                            },
                            "emphasis": {
                                "show": true
                            }
                        },
                        "data": [{
                                "value": 600.58,
                                "name": "义乌市1",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#f845f1"
                                    }
                                }
                            },
                            {
                                "value": 1100.58,
                                "name": "义乌市2",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#ad46f3"
                                    }
                                }
                            },
                            {
                                "value": 1200.58,
                                "name": "义乌市3",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#5045f6"
                                    }
                                }
                            },
                            {
                                "value": 1300.58,
                                "name": "义乌市4",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#4777f5"
                                    }
                                }
                            },
                            {
                                "value": 1400.58,
                                "name": "义乌市5",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#44aff0"
                                    }
                                }
                            },
                            {
                                "value": 1500.58,
                                "name": "义乌市6",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#45dbf7"
                                    }
                                }
                            },
                            {
                                "value": 1500.58,
                                "name": "义乌市7",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#f6d54a"
                                    }
                                }
                            },
                            {
                                "value": 1600.58,
                                "name": "义乌市8",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#f69846"
                                    }
                                }
                            },
                            {
                                "value": 1800,
                                "name": "义乌市9",
                                "itemStyle": {
                                    "normal": {
                                        "color": "#ff4343"
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            },
                            {
                                "value": 0,
                                "name": "",
                                "itemStyle": {
                                    "normal": {
                                        "label": {
                                            "show": false
                                        },
                                        "labelLine": {
                                            "show": false
                                        }
                                    }
                                }
                            }
                        ]
                    }]
                },
            }
        },
        mounted(){
            var myChart = echarts.init(document.getElementById("pie1"));
            myChart.setOption(this.option);
        }
    }
</script>
<style scoped>
.blue,
.red,
.green,
.yellow {
  height: 200px;
}
.blue {
  background: lightblue;
}
.red {
  background: pink;
}
.green {
  background: lightgreen;
}
.yellow {
  background: khaki;
}
</style>