<template>
    <div>
        <Col span='6'>
            <Button @click="addT">增加</Button>
            <Button type="ghost" @click="deleteT">删除</Button>
            <br/>
            <ul>
                <li v-for="(item,index) in notes" :key="index">{{item.text}}</li>
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
            ...mapActions(["addT", "deleteT"]),
            aa(index){
                console.log(index);

            }
        }
    }
</script>
<style scoped>

</style>