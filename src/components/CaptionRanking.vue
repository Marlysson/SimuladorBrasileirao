<template>
    
    <ul class="caption-container">
        
        <li class="caption-ranking" v-for="championship in championship_by_ranking" :key="championship.ranking">
            <span class="caption-icon" v-bind:style="{ background : championship.color }"></span>
            <span class="caption-text">{{ championship.ranking}}</span>
        </li>

    </ul>

</template>

<script>

import { COLOR_BY_RANKING } from '../services/data.js'

export default {
    
    data(){
        
        return {
            
            championship_by_ranking : [
                {
                    "color": COLOR_BY_RANKING['libertadores'],
                    "ranking": "Libertadores"
                },
                {
                    "color": COLOR_BY_RANKING['pre_libertadores'],
                    "ranking": "Pré-Libertadores"
                },
                {
                    "color": COLOR_BY_RANKING['sul_americana'],
                    "ranking": "Sul-Americana"
                },
                {
                    "color": COLOR_BY_RANKING['rebaixamento'],
                    "ranking": "Rebaixamento"
                },
                {
                    "color": COLOR_BY_RANKING['nenhum'],
                    "ranking": "Sem alteração"
                }
            ]
        }
    }
}

</script>

<style scoped>

    @import '../assets/colors_by_position.css';

    .caption-container{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;

        list-style-type: none;
        width:700px;
    }

    .caption-icon{
        width:10px;
        height:10px;
        margin-right:10px;
        display:inline-block;
        border-radius:100%;
    }

    .caption-text{
        font-size:15px;
        color: #34495e;
    }

</style>