<template>
    <HomeMd></HomeMd>
</template>

<script>
    import HomeMd from '../assets/home.md';

    export default {
        name: "Home",
        components: {
            HomeMd
        },
        data() {
            return {
                mdText: "哈哈哈"
            }
        }
    }
</script>

<style scoped>

</style>
