<template>
    <div class="page_content" :class='{"bigErr":allstatus==1,"close":resulte.runStatus==0}'>
                <div class="online">
                    <span :title="resulte.linkTime" :class='{"online":resulte.linkStatus==1}'></span>
                    <span v-text='resulte.linkStatus==0?"断开":"在线"'></span>
                </div>
                <div class="state">
                    <span :class='{"bigErr":resulte.runStatus==2,"normal":resulte.runStatus==1}'></span>
                    <span :class='{"bigErr":resulte.runStatus==2}'>{{resulte.runStatus==-1?"未知":(resulte.runStatus==0?"关闭":(resulte.runStatus==1?"正常":(resulte.runStatus==2?"故障报警":"&nbsp;")))}}</span>
                </div>
                <div class="ee">
                    <span v-text="resulte.cop?resulte.cop:'--'"
                    :class="{'blue':resulte.copStatus==1,
                            'green':resulte.copStatus==2,
                            'yellow':resulte.copStatus==3,
                            'red':resulte.copStatus==4}">--</span>
                    <span>今日能效指标 (EER)</span>
                </div>
            </div>
</template>
<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      resulte0: {},
      resulte: {}
    };
  },
  props: ["code", "loading", "allstatus"],
  methods: {
    getData() {
      axios.post("http://192.168.100.81:3000/CPSystemStatusService",{data:this.code}).then((res)=>res.data
      ).then(res => {
        //   res = JSON.parse(res);
          // console.log(res);
          this.resulte0.linkStatus = res[0].linkStatus.status;
          this.resulte0.linkTime = res[0].linkStatus.lastUpdateTime;
          this.resulte0.cop = res[0].cop.value;
          this.resulte0.copStatus = res[0].cop.status;
          this.resulte0.runStatus = res[0].runStatus.status;
          // this.resulte0.runStatus = 2;
          this.resulte = this.resulte0;
          // console.log(this.resulte0);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped>

</style>