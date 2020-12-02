<template>

    <table class="ranking-container">

        <thead class="ranking-header">
            <th class="team">Classificação</th>
            <th class="ranking-data">P</th>
            <th class="ranking-data">J</th>
            <th class="ranking-data">V</th>
            <th class="ranking-data">SG</th>
            <th class="ranking-data">GP</th>    
        </thead>

        <tbody class="ranking-body">

            <tr v-for="team in teams" :key="team.name">
               
                <td class="team">
                    
                    <span class="position">
                        {{team.position}}
                    </span> 
                    
                    {{ team.name }}

                </td>
               
                <td class="ranking-data">45</td>
                <td class="ranking-data">21</td>
                <td class="ranking-data">14</td>
                <td class="ranking-data">45</td>
                <td class="ranking-data">63</td>
            </tr>
            
        </tbody>

    </table>


</template>

<script>

export default {
    props : ["teams"]
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
        border-top:0.1px solid var(--border-color);
        border-bottom:0.1px solid var(--border-color);
    }

    .ranking-body td, .ranking-header th{
        padding:7px;
        color:#34495e;
    }

    .ranking-header th{
        font-weight: 500;
        font-size:11px;
    }

    .ranking-body td{
        font-size:16px;
        font-weight:400;
    }

    .ranking-body td:nth-child(2n+2){
        background:#f3f3f3;
    }

    .ranking-body td:nth-child(2){
        font-weight:700;
    }

    .ranking-body{
        border-bottom:1px solid var(--border-color);
    }

    .ranking-header .team, .ranking-body .team{
        padding-left:25px !important;
        text-align:left;
        border-right:1px solid var(--border-color);
    }

    .ranking-header .team{
        letter-spacing: 1px;
        text-transform:uppercase;
    }

    .ranking-data{
        text-align: center;
    }

    .position{
        padding-right:10px;
        font-weight:500;
    }

</style>