<template>
    <div>
        <div class="title">萌萌工具屋</div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                     :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-notebook-2"></i>
                        <span slot="title">翻译</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">翻译</template>
                        <el-menu-item index="1-1" @click="openSubMenu(1)">英汉互译</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <el-container>
                <el-main>
                    <div v-if="inTranslate">
                        <Translate/>
                    </div>
                    <div v-else>
                        <Home/>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Translate from "./Translate"
    import Home from "./Home"

    export default {
        name: "Menu",
        components: {
            Translate,
            Home
        },
        data() {
            return {
                isCollapse: true,
                inTranslate: false,
                inHome: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            openSubMenu(index) {
                switch (index) {
                    case 1:
                        this.inTranslate = true;
                        break;
                    default:
                        this.inHome = true;
                        break;

                }
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .title {
        font-family: STSongti-SC-Bold;
        font-size: 32px;
        color: #222222;
    }
</style>
