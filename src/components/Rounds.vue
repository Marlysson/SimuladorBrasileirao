<template>
    
    <div>
        <h2 class="title-section">{{title}}</h2>

        <div class="round-steps">
            <ArrowLeftIcon class="round-navigator" />
            <span class="round-description">3ª RODADA</span>
            <ArrowRightIcon class="round-navigator" />
        </div>
    
    </div>

</template>

<script>

import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons'

export default {

    props : ["title"],

    components: {
        ArrowRightIcon,
        ArrowLeftIcon
    }

}

</script>

<style scoped>

    @import "../assets/common.css";

    .round-steps{
        width:100%;
        height:30px;
        background:#1abc9c;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .round-description{
        font-size:14px;
        color:#fff;
        text-transform:uppercase;
        font-weight:500;
    }

    .round-navigator{
        color:#fff;
        cursor:pointer;
    }

    .round-navigator:first-child, .round-navigator:last-child{
        margin:0 10px;
        width:23px;
        height:23px;
    }

</style>