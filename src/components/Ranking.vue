<template>

    <div>
    
        <h3 class="title-section">{{ title }}</h3>

        <div class="ranking-table">
            <RankingSection :teams="first" />
            <RankingSection :teams="last" />
        </div>
        
        <CaptionRanking />

    </div>

</template>

<script>

// Components
import RankingSection from '../components/RankingSection.vue'
import CaptionRanking from '../components/CaptionRanking.vue'

export default {
    props : ["title", "teams"],
    components : { RankingSection, CaptionRanking },
    
    beforeMount(){
        this.first = this.teams.slice(0,10),
        this.last  = this.teams.slice(10)
    }

}

</script>

<style scoped>

    @import "../assets/common.css";

    .ranking-table{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>