
function mostrar_partidas(partidas){

	partidas.forEach(function(partida){
		var mandante = partida.mandante.nome;
		var visitante = partida.visitante.nome;

		var gols_mandante =  partida.gols_mandante;
		var gols_visitante = partida.gols_visitante;

		console.log(mandante + ' (' + gols_mandante + ') ' + 'X ' + visitante + ' ('+ gols_visitante + ')')
	});

}

function gerar_confrontos(times){
	
	let qtd_times = times.length;

	arranjos = [];

	for(var i = 0; i < qtd_times; i++){
		for( var a = i + 1 ; a < qtd_times; a++ ){
			console.log(times[i].nome + ' X ' + times[a].nome);
		}
	}
}