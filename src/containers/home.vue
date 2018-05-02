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
                    <Dropdown style="float:right;marginRight:20px">
                        <a href="javascript:void(0)">
                            下拉菜单
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list" @click.self='aa'>
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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
import echarts from "echarts";
export default {
  data() {
    return {
      value1: [1, 2, 3],
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: true,
        trigger: "click",
        arrow: "hover"
      },
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直达", selected: true },
              { value: 679, name: "营销广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],

            data: [
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1048, name: "百度" },
              { value: 251, name: "谷歌" },
              { value: 147, name: "必应" },
              { value: 102, name: "其他" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("pie1"));
    myChart.setOption(this.option);
  }
};
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