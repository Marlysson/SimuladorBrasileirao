<template>
    
    <tr>
               
        <td class="team">
            
            <span class="position" v-bind:style="styleForPosition">
                {{team.position}}
            </span> 
            
            {{ team.name }}

        </td>
        
        <td class="statistics points">{{ team.points }}</td>
        <td class="statistics">{{ team.games }}</td>
        <td class="statistics">{{ team.victories }}</td>
        <td class="statistics">{{ team.goals_pro }}</td>
        <td class="statistics">{{ team.balance_goals }}</td>

    </tr>

</template>

<script>

import get_color_by_position from "../services/utils.js"

export default {
    props : ["team"],

    data(){

        return { 
            styleForPosition : {
                color: get_color_by_position(this.team.position)
            }
        }

    }

}

</script>

<style scoped>

    @import '../assets/colors_by_position.css';

    td{ 
        color:#34495e;
        padding:7px;
        font-size:15px;
        font-weight:400;
        border-bottom: 1px solid #ccc;
    }
    
    /* Alternating from second element */
    td:nth-child(2n+2){
        background:#f5f5f5;
    }

    .team{
        padding-left:15px !important;
        text-align:left;
        border-right:1px solid var(--border-color);
    }
    
    .statistics{ 
        text-align:center;
    }

    .points{
        font-weight:700;
    }
    
    .position{
        padding-right:10px;
        font-weight:500;
    }

</style>