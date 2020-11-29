<template>
  <div id="app">    
    <Header texto="Simulador do Brasileirão 2020"/>

    <SubHeader texto="Simule os resultados dos jogos do Brasileirão 2020, 
                    e tente adivinhar o campeão, quais times vão à Libertadores e à 
                    Copa Sul-Americana e quem será rebaixado para a Série B"/>
                    
  </div>
</template>

<script>

import Header from './components/texts/Header.vue';
import SubHeader from './components/texts/SubHeader.vue';

export default {
  name: 'App',
  components: {
    Header, SubHeader
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap');

*{
  padding:0;
  margin:0;
}

#app {
  font-family: 'Roboto', sans-serif;
}

</style>
