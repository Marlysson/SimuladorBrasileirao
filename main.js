
let times = []
let nomes = ['São Paulo', 'Santos', 'Corinthians', 'Palmeiras', 'Flamengo', 'Fluminense', 'Vasco','Botafogo'];

let quantidade_times = 4;

nomes.splice(0,quantidade_times).forEach(function(time){
    times.push(new Time(time,null));
})

gerador = new GeradorDeRodadas(times);

console.log("Quantidade de times gerada: " + gerador.times.length);
console.log("Quantidade de partidas: " + gerador.qtd_rodadas_turno);

let partidas = gerador.gerar();

mostrar_partidas(partidas);
gerar_confrontos(times);

// GERAR CAMPEONATO

// campeonato = Campeonato("Brasileirão 2019", times, 10).gerar();
// campeonato.getClassificacao();

// campeonato.getPosicao("São Paulo");