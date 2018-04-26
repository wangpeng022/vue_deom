<template>
    <div>
        <Col span="12">
            <Card style="margin-right:20px">
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
            <Card span="5">
                <Collapse v-model="value1">
                <Panel name="1">
                    史蒂夫·乔布斯
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                </Panel>
                <Panel name="2">
                    斯蒂夫·盖瑞·沃兹尼亚克
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                </Panel>
                <Panel name="3">
                    乔纳森·伊夫
                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                </Panel>
            </Collapse>
            </Card>
        </Col>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: [1,2],
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
        /* width: 400px; */
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