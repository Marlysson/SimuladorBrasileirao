<template>
    <h2>{{ texto }}</h2>
</template>

<script>

export default {
    props : ["texto"]
}

</script>
<style scoped>

    h2{
        color:#2c3e50;
        font-size:50px;
        text-align:center;
        margin:20px auto 10px;
    }
</style>