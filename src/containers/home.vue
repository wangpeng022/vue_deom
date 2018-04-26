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
        <BackTop></BackTop>
    </div>
</template>
<script>
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
                }
            }
        },
    }
</script>
<style scoped>
    .blue,.red,.green,.yellow{
        height: 200px;
    }
    .blue{
        background: lightblue;
    }
    .red{
        background: pink;
    }
    .green{
        background: lightgreen
    }
    .yellow{
        background: khaki;
    }
</style>