<template>
    <p>{{ texto }}</p>
</template>

<script>

export default {
    props : ["texto"]
}

</script>
<style scoped>

    p{
        color:#34495e;
        font-size:23px;
        text-align:center;
        width:80%;
        margin:0 auto;
        font-weight: 300;
    }
</style>