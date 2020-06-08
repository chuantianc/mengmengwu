<template>
    <textarea v-model="textdata"></textarea>
</template>

<script>

    export default {
        name: "Editor",
        components: {
            // CodeMirror
        },
        data() {
            return {
                textdata: ""
            }
        },
        watch: {
            textdata: function () {
                this.textdata = JSON.stringify(this.textdata);
            }
        }
    }
</script>

<style scoped>

</style>
