<template>
    <div>
        <Col span='20' style="margin:20px 0 0 20px">
            <Button icon="arrow-down-a">我是按钮loading</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>

            <Button type="primary" shape="circle" icon="ios-search"></Button>
            <Button type="primary" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle">Circle</Button>
            <br><br>
            <Button type="ghost" shape="circle" icon="ios-search"></Button>
            <Button type="ghost" icon="ios-search">Search</Button>
            <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
            <Button type="ghost" shape="circle">Circle</Button>
        </Col>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
<style scoped>

</style>