<template>
  <div id="app">    

    <Header part1="Simulador do " part2="Brasileirão 2020"/>

    <SubHeader texto="Simule os resultados dos jogos do Brasileirão 2020, 
                    e tente adivinhar o campeão, quais times vão à Libertadores e à 
                    Copa Sul-Americana e quem será rebaixado para a Série B"/>

    <div class="containers">
      
      <div class="container-ranking">

        <Loading>
          <Ranking title="Tabela" :teams="championship.teams" v-if="championship != null"/>
        </Loading>

      </div>

      <div class="container-games">

        <Loading>
          <Rounds title="Rodadas"
                  v-if="championship != null"
                  :round="round"
                  @navigate="navigate" />
        </Loading>        

      </div>

    </div>    

  </div>
</template>

<script>

// Components
import Header from './components/Header.vue';
import SubHeader from './components/SubHeader.vue';
import Ranking from './components/Ranking.vue';
import Rounds from './components/Rounds.vue';
import Loading from './components/Loading.vue';

// Services
import Championship from './models/championship.js'

export default {
  name: 'App',
  
  components: {
    Header, 
    SubHeader,
    Ranking,
    Rounds,
    Loading
  },

  data(){
    return {
      championship: null,
      round: null
    }
  },

  methods: {

      navigate: function(type){

          if ( type == 'prev'){
            this.round = this.championship.prevRound()

          }else if ( type == 'next') {
            this.round = this.championship.nextRound()
          }
          
      }
  },

  async beforeMount(){
      this.championship = await Championship.new();
      this.round = this.championship.currentRound();
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
  justify-content: space-between;
  margin:50px auto;
  height:400px;
}

.container-ranking{
  width:705px;
  height: 400px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}

.loading{
  align-self:center;
}

.container-games{
  width:495px; /* 45% */
  overflow:hidden;
}

</style>
