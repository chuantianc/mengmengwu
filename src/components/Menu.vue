<template>
    <div>
        <div class="title">萌萌工具屋</div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-menu default-active="activeIndex" router collapse="true">
                <el-menu-item index="/home"><i class="el-icon-s-home"></i></el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-notebook-2"></i>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">翻译</template>
                        <el-menu-item index="/trans">英汉互译</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-edit"></i>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">编辑器</template>
                        <el-menu-item index="/editor">Json 编辑器</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                activeIndex: "/home"
            };
        }
    }
</script>

<style scoped>
    .title {
        font-family: STSongti-SC-Bold;
        font-size: 32px;
        color: #222222;
    }
</style>
