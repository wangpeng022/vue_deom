<template>
    <div class='login'>
        <div class="middle">
            <Input v-model="username" icon="ios-personadd" size="large" placeholder="admin" clearable style="width: 300px;textAlign:center"></Input>
            <br/>
            <Input v-model="password" icon="ios-locked-outline" size="large" placeholder="admin" clearable style="width: 300px;textAlign:center;margin:10px 0"></Input>
            <br/>
            <Button type="success" style="width:300px;marginBottom:10px" @click.native="login">登录</Button>
            <br/>
            <span v-show="1">{{returntext}}</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {setCookie} from '../../static/js/cookie'
    export default {
        data () {
            return {
                username:'',
                password:'',
                returntext:'',
                err:'',
            }
        },
        methods:{
            login(){
                axios.post("http://192.168.100.81:3000/login",{
                    data:{name:this.username,password:this.password}
                }).then((res)=>res.data).then((res)=>{
                    console.log(res);
                    this.returntext = res.error;
                    if (!res.code) {
                    setCookie('admin',222222);
                    this.$router.push("/home");
                }
                })
            }
        },
        mounted(){


        }
    }
</script>
<style>
    .login{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(lightblue, pink);
        z-index: 1000;
    }
    .middle{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }
</style>