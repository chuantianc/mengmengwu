<template>
    <div>
        <el-row>
            <div style="float: left">英汉文本互译</div>
        </el-row>
        <el-row>
            <el-col :span="11">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 5000 }"
                        placeholder="请输入内容，输入英文将翻译成中文，输入中文将翻译成英文"
                        v-model="input_text"
                        maxlength="300"
                        show-word-limit
                        @input="translate"
                >
                </el-input>
            </el-col>
            <el-col :span="11" style="float: right">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 5000 }"
                        readonly
                        v-model="translate_data"
                >
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Translate",
        data() {
            return {
                input_text: "",
                translate_data: ""
            }
        },
        methods: {
            translate: function () {
                let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                let target_language = "zh-cn";
                if (reg.test(this.input_text)) { //如果输入是汉语，那么翻译成英语
                    target_language = "en"
                }
                axios
                    .get('/translate?q=' + this.input_text + '&tl=' + target_language)
                    .then(function (response) {
                            console.log(response);
                            // this.translate_data = 'haha';
                            // console.log(JSON.stringify(response.data))
                        }
                    )
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>
