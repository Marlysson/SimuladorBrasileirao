
import Round from "../../models/round.js";

class Generator{

    /* 
    
    Abstract representation

    Rounds  > 1
                > Games
                    > Game1
                    ...
                    > Game10
            > 2
            ...
            > 38

    Programming representation
    
        1 : {
            "games" : [Game1, Game2..., Game10]
        },
        2 : {
            "games" : [Game1, Game2..., Game10]
        },
        3 : {
            "games" : [Game1, Game2..., Game10]
        }

    */

   
   static generate(teams){
       
       let rounds = []  

        var total_rounds = (teams.length - 1) * 2;
        
        for ( let sequence = 1; sequence <= total_rounds; sequence++){            
            rounds.push(new Round(sequence))
        }

        // GERAR LISTA COM OBJETOS "RODADA" OK
        // GERAR LISTA COM OBJETOS "PARTIDA"
        // RETORNAR LISTA 

        return rounds
    }

}

export default Generator