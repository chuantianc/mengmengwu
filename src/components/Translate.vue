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
                <div>{{src_translit}}</div>
            </el-col>
            <el-col :span="11" style="float: right">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 5000 }"
                        readonly
                        v-model="translate_word"
                >
                </el-input>
                <div style="margin-top: 8px;margin-bottom: 10px">{{orig}} 的翻译</div>
                <ul v-for="dict in translate_data.Dict" :key="dict.Pos"> {{ dict.Pos }}
                    <li v-for="entry in dict.Entry" :key="entry.word">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div>{{entry.Word}}</div>
                            </el-col>
                            <el-col :span="12">
                                <div style="color:rgba(0,0,0,0.54);">{{entry.Reverse_translation.join(",")}}</div>
                            </el-col>
                        </el-row>

                    </li>
                </ul>

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
                translate_data: "",
                src_translit: "",
                translate_word: "",
                orig: ""
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
                    .then(response => {
                            this.translate_data = response.data;
                            console.log(JSON.stringify(this.translate_data));
                            for (let i = 0; i < this.translate_data.Sentences.length; ++i) {
                                if (this.translate_data.Sentences[i].Trans.length > 0) {
                                    this.translate_word = this.translate_data.Sentences[i].Trans;
                                    this.orig = this.translate_data.Sentences[i].Orig;
                                } else {
                                    this.src_translit = this.translate_data.Sentences[i].Src_translit;
                                }
                            }
                        }
                    )
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
        border: 0;
        display: block;
        overflow: hidden;
        zoom: 1;
        color: #4285f4;
    }

    li {
        color: black;
        padding: 16px 0;
        font-size: 15px;
        font-weight: bold;
        border-top: 1px solid #e0e0e0;
        list-style: none;
    }
</style>
