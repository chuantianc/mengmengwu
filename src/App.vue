<template>
    <div id="app">
        <Menu/>
        <el-row :gutter="20">
            <el-col :span="6">
                <div><img src="./assets/nice.jpeg"/></div>
            </el-col>
            <el-col :span="18">
                <div>我的联系方式</div>
                <div>邮箱：</div>
                <a href="mailto:chuantianc@163.com">chantianc@163.com</a>
                <div>QQ：</div>
                <div>910213078</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Menu from './components/Menu'

    export default {
        name: 'app',
        components: {
            Menu
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    img {
        height: 250px;
        width: 250px;
    }
</style>
