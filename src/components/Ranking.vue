<template>

    <div>
    
        <h3 class="ranking-title">{{ title }}</h3>

        <div class="ranking-table">
            <RankingSection :teams="first" />
            <RankingSection :teams="last" />
        </div>
        
    </div>

</template>

<script>

// Components
import RankingSection from '../components/RankingSection.vue'

// Services
import TeamGenerator from '../services/generators/teams.js'

export default {

    components : { RankingSection }, 
    
    props : ["title"],

    data(){
        return {
            first: [],
            last: []
        }
    },

    mounted(){    

        let teams = TeamGenerator.generate()

        this.first = teams.slice(0, 10)
        this.last = teams.slice(10)
    }
}


</script>

<style scoped>

    .ranking-table{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .ranking-title{
        font-size:15px;
        color:#34495e;
        text-transform:uppercase;
        padding-bottom:10px;
    }

</style>