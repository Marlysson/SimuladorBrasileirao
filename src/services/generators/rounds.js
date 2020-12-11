
import Round from "../../models/round.js";
// import GameGenerator from '../generators/games.js'

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

        let total_rounds = (teams.length - 1) * 2;

        for ( let sequence = 1; sequence <= total_rounds; sequence++){   
            
            let round = new Round(sequence)

            if ( sequence == 1){
                round.first()
            }

            if ( sequence == total_rounds ){
                round.last()
            }

            rounds.push(round)
            
            // GERAR LISTA COM OBJETOS "PARTIDA"

        }

        return rounds

    }

}

export default Generator