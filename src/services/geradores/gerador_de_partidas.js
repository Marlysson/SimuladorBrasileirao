
class GeradorDePartida{

    static gerar(mandante, visitante, rodada){
        
        let partida = new Partida(mandante, visitante, rodada);

        partida.gols_mandante = GeradorDeGols.gerar();
        partida.gols_visitante = GeradorDeGols.gerar();

        return partida;
    
    }
    
}