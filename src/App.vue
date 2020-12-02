<template>
  <div id="app">    

    <Header part1="Simulador do " part2="Brasileirão 2020"/>

    <SubHeader texto="Simule os resultados dos jogos do Brasileirão 2020, 
                    e tente adivinhar o campeão, quais times vão à Libertadores e à 
                    Copa Sul-Americana e quem será rebaixado para a Série B"/>

    <div class="containers">
      
      
      <div class="container-ranking">

        <h3 class="ranking-title">Tabela</h3>

        <div class="ranking-table">
          <Ranking :teams="first" />
          <Ranking :teams="second" />
        </div>

      </div>

      <div class="container-games">

      </div>

    </div>    

    <CaptionRanking />

  </div>
</template>

<script>

// Components
import Header from './components/texts/Header.vue';
import SubHeader from './components/texts/SubHeader.vue';
import CaptionRanking from './components/CaptionRanking.vue';
import Ranking from './components/Ranking.vue';

// Services
import TeamGenerator from './services/generators/teams.js'

let teams = TeamGenerator.generate()

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
    this.first = teams.slice(0, 10)
    this.second = teams.slice(10)
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
  margin:60px auto 10px;
  height:400px;
}

.container-ranking{
  width:60%;
  display:flex;
  flex-direction: column;
}

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

.container-games{
  width:40%;
}

</style>
