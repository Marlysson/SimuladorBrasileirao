<template>
  <div id="app">    

    <Header texto="Simulador do Brasileirão 2020"/>

    <SubHeader texto="Simule os resultados dos jogos do Brasileirão 2020, 
                    e tente adivinhar o campeão, quais times vão à Libertadores e à 
                    Copa Sul-Americana e quem será rebaixado para a Série B"/>

    <div class="containers">
      
      <div class="container-ranking">
      
        <Ranking :teams="first" />
        <Ranking :teams="second" />

      </div>

      <div class="container-games">

      </div>

    </div>    

    <CaptionRanking />

  </div>
</template>

<script>

import Header from './components/texts/Header.vue';
import SubHeader from './components/texts/SubHeader.vue';
import CaptionRanking from './components/CaptionRanking.vue';
import Ranking from './components/Ranking.vue';
import TEAMS  from './services/data.js';

export default {
  name: 'App',
  components: {
    Header, SubHeader,
    CaptionRanking,
    Ranking
  },

  data(){
      return {
          first: [],
          second: []
      }
  },

  mounted(){    
        
    for (let index = 0; index < 20; index++) {

        let current_team = TEAMS[index];

        let team = {
            "name" : current_team.name,
            "position" : index + 1
        }

        if ( this.first.length < 10 ){
          this.first.push(team);
        }else{
          this.second.push(team);
        }
    }

    console.log(this.first);
    console.log(this.second);
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');

*{
  padding:0;
  margin:0;
}

#app {
  font-family: 'Roboto', sans-serif;
  width:95%;
  margin:0 auto;
}

.containers{
  display: flex;
  flex-direction: row;
  margin:40px auto 30px;
  height:400px;
}

.container-ranking{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:60%;
}

.container-games{
  width:40%;
}

</style>
