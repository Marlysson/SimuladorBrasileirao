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

// Services
import TeamGenerator from '../services/generators/teams.js'

export default {

    props : ["title"],

    components : { RankingSection, CaptionRanking }, 
    
    data(){
        return {
            first: [],
            last: []
        }
    },

    mounted(){    
        this.first = TeamGenerator.first()
        this.last = TeamGenerator.last()
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