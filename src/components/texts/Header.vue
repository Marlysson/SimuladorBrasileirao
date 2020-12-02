<template>
    <div class="title">
        <span>{{ part1 }}</span>
        <span style="color:#16a085;">{{ part2 }}</span>
    </div>
</template>

<script>

export default {
    props : ["part1", "part2"]
}

</script>
<style scoped>

    .title{
        color:#34495e;
        font-size:50px;
        font-weight: 900;
        text-align:center;
        margin:20px auto 10px;
    }
</style>