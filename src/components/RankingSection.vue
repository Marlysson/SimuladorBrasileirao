<template>

    <table class="ranking-container">

        <thead class="ranking-header">
            <th class="team">Classificação</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>SG</th>
            <th>GP</th>    
        </thead>

        <tbody class="ranking-body">
            
            <TeamRanking 
                v-for="team in teams" 
                v-bind:team="team" 
                :key="team.name"/>
                
        </tbody>

    </table>

</template>

<script>

import TeamRanking from './TeamRanking.vue'

export default {

    props : ["teams"],
    
    components : {
        TeamRanking
    }
    
}

</script>

<style scoped>

    .ranking-container{
        width:47%;
        border-collapse: collapse;

        --border-color: #7f8c8d;
    }

    .ranking-header{
        width:100%;
        border-top:1px solid var(--border-color);
        border-bottom:1px solid var(--border-color);
    }

    .ranking-header th{
        width:25px;
        padding:7px 0;
        color:#34495e;
        font-weight: 500;
        font-size:11px;
    }

    .ranking-body{
        border-bottom:1px solid var(--border-color);
    }

    .ranking-header .team{
        padding-left:15px !important;
        text-align:left;
        border-right:1px solid var(--border-color);
    }

    .ranking-header .team{
        letter-spacing: 1px;
        text-transform:uppercase;
    }

</style>