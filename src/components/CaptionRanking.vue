<template>
    
    <ul class="caption-container">
        
        <li class="caption-ranking" v-for="championship in championship_by_ranking" :key="championship.ranking">
            <span class="caption-icon" v-bind:class="championship.color"></span>
            <span class="caption-text">{{ championship.ranking}}</span>
        </li>

    </ul>

</template>

<script>

export default {
    
    data(){
        
        return {
            
            championship_by_ranking : [
                {
                    "color": "blue",
                    "ranking": "Libertadores"
                },
                {
                    "color": "yellow",
                    "ranking": "Pré-Libertadores"
                },
                {
                    "color": "green",
                    "ranking": "Sul-Americana"
                },
                {
                    "color": "red",
                    "ranking": "Rebaixados"
                }
            ]
        }
    }
}

</script>

<style scoped>
    
    .caption-container{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;

        list-style-type: none;
        width:600px;
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
        letter-spacing: 0.5px;
        color: #34495e;
    }

    .green  { background: #1abc9c; }
    .blue   { background: #3498db; }
    .yellow { background:#f1c40f; }
    .red    { background: #e74c3c; }

</style>