<template>
    <div class='list'>
        <Col span='6'>
            <Button @click="addT">添加</Button>
            <Button type="ghost" @click.native="deleteT">删除</Button>
            <Button type="ghost" @click.native="favour">收藏</Button>
            <br/>
            <ul>
                <a v-for="(item,index) in notes" :key="index" :class="{active: activeNote === item}" @click="select(item)" href="#">
                    <h4>
                        {{item.text}}
                    </h4>
                    <Icon v-if="item.favorite" type="star" size="18" color="#F56A00" style="float:right;marginTop:5px"></Icon>
                </a>
            </ul>
        </Col>
        <Col span='6'>
            <div class="tt">
                <p>编辑框</p>
                <textarea name="tt"  cols="30" rows="10" style="border:none" v-model="activeNote.text">默认值</textarea>
            </div>
        </Col>

    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
    export default {
        data () {
            return {

            }
        },
        computed: {
            ...mapState(["notes", "activeNote"])
        },
        methods: {
            ...mapActions(["addT", "deleteT","select","favour"]),
        //     aa(item){
        //         this.select(item);
        //     }
        }
    }
</script>
<style scoped>
    .list ul{
        margin: 10px;
    }
    .list ul a{
        display: inline-block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #666;
        padding: 0 5px;
    }
    .list ul a h4{
        width: 60%;
        display: inline-block;
    }
    .active{
        background: lightblue;
    }
</style>