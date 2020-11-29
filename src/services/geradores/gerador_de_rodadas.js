
class GeradorDeRodadas{

    constructor(times){
        this.times = times;

        this.partidas = [];
        this.rodadas = [];
    }

    quantidadeDeRodadasTurno(){
        return (this.times.length - 1) * 2;
    }

    get qtd_rodadas_turno(){
        return this.quantidadeDeRodadasTurno();
    }

    gerar(){

        var quantidade_todadas = this.quantidadeDeRodadasTurno();
        var posicao_ultimo_time = times.length - 1;
        var total_times = this.times.length;

        for( var posicao_atual = 0 ; posicao_atual < posicao_ultimo_time ; posicao_atual++ ){

            for( var pos_time_visitante = posicao_atual + 1; pos_time_visitante < total_times; pos_time_visitante++ ){
                
                var mandante = this.times[posicao_atual];
                var visitante = this.times[pos_time_visitante];

                let partida = GeradorDePartida.gerar(mandante, visitante, null);

                this.partidas.push(partida);

            }

        }

        return this.partidas;
        
        // GERAR LISTA COM OBJETOS "RODADA"
        // GERAR LISTA COM OBJETOS "PARTIDA"
        // DEFININDO OS GOLS DO MANDANTE E VISITANTE
        // RETORNAR LISTA 

    }

}
