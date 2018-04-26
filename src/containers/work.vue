<template>
    <div>
        <Card style="margin:20px 0 0 20px">
            <Transfer
                :data="data1"
                :target-keys="targetKeys1"
                :render-format="render1"
                @on-change="handleChange1">
            </Transfer>
        </Card>
        <Col span='6'>
            <Card style="margin:20px 0 0 20px;height:400px;overflowY:scroll">
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <Affix :offset-top="500">
                    <span class="demo-affix">Fix the position at the top of 500px at the top</span>
                </Affix>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
                <p>mmmmm</p>
            </Card>
        </Col>
        <Col span="6">
            <Card style="margin:20px 0 0 20px">
                <Timeline>
                    <TimelineItem>
                        <p class="time">1976年</p>
                        <p class="content">Apple I 问世</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">1984年</p>
                        <p class="content">发布 Macintosh</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2007年</p>
                        <p class="content">发布 iPhone</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2010年</p>
                        <p class="content">发布 iPad</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2016年</p>
                        <p class="content">发布 iPhone7</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2017年</p>
                        <p class="content">发布 iPhoneX</p>
                    </TimelineItem>
                </Timeline>
            </Card>
        </Col>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>
<style>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>