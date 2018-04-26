<template>
    <div class="layout">
        <Layout :style="{minHeight: '99.8vh'}">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="home" theme="dark" width="auto" :class="menuitemClasses" @on-select='handleChange'>
                    <div class='logo'>
                        <img src="http://mail.persagy.com/assets/logo.gif" alt="" width='150%'>
                    </div>
                    <MenuItem name="home">
                        <Icon type="ios-navigate"></Icon>
                        <span>首页首页</span>
                    </MenuItem>
                    <MenuItem name="work">
                        <Icon type="search"></Icon>
                        <span>工作工作</span>
                    </MenuItem>
                    <MenuItem name="core">
                        <Icon type="settings"></Icon>
                        <span>冷站冷站</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                    <div class="demo-avatar" style="float:right;marginRight:20px">
                        <Avatar :style="{background: color}">{{ user }}</Avatar>
                        <Button size="small" @click="handleChange2">Change</Button>
                    </div>
                </Header>
                <Content :style="{marginRight: '20px',  minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    export default {
        data () {
            return {
                isCollapsed: false,
                user: UserList[0],
                color: ColorList[0]
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            handleChange(name){
              this.$router.push(name);
            },
            handleChange2() {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            }
        }
    }
</script>
<style>
/* 公共样式 */

* {
    margin: 0;
    padding: 0;
}
body{
    user-select: none;
    width: 100%;
    height: 100%;
}

a {
    text-decoration: none;
}

ul li {
    list-style: none;
}
body ::-webkit-scrollbar { width: 10px; height: 10px; }
body ::-webkit-scrollbar-track { background-color: #fff; -webkit-border-radius: 8px; }
body ::-webkit-scrollbar-thumb { -webkit-border-radius: 5px; background: #e6e6e6; border: none; }
body ::-webkit-scrollbar-thumb:vertical:hover { background-color: #a6a6a6; border: none; }
body ::-webkit-scrollbar-thumb:hover { background-color: #a6a6a6; border: none; }
    .logo{
        opacity: 0.8;
        overflow: hidden;
        margin: 4px;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>