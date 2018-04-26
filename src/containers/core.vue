<template>
    <div id="coolerCore" style="margin:20px 0 0 20px">
            <div class="pages">
                <div class="page" v-for="(item,index) in systemList"
                :key="item.systemCode"
                :class="{'bigErr':item.alarmStatus.status==1}"
                    >
                    <header>
                        <span v-text="item.systemName"></span>
                    </header>
                    <State :code="systemCode[index]" :allstatus="alarmStatus[index]"/>
                </div>
            </div>
        </div>
</template>
<script>
import State from '../components/State'
import axios from 'axios'
    export default {
        data () {
            return {
                systemList:[],
                alarmStatus:[],
                systemCode:[]
            }
        },
        methods:{
            getData(){
                axios.post("http://192.168.100.81:3000/CPSystemListService",{
                    data:{}
                }).then((res)=>{return res.data}).then((res)=>{
                    this.systemList=res[0].dataList;
                    for (let i = 0; i < this.systemList.length; i++) {
                        this.systemCode[i] = this.systemList[i].systemCode;
                    }
                    // console.log(this.systemCode);

                    })
            }
        },
        mounted(){
            this.getData();
        },
        components:{
            State,
        }
    }

</script>
<style>
    @import "./core.css";
</style>