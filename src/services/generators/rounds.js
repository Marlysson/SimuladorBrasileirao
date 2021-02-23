import Football from "../football.js";
import Match from "../../models/match.js";
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
    
    static async generate(){ 

        let fetchedRounds = await Football.rounds();

        let rounds = {};

        for ( let round in fetchedRounds ){

            let fetchedMatches = fetchedRounds[round];

            if ( rounds[round] == null ) {
                rounds[round] = new Round(round);
            }

            for ( let match of fetchedMatches ){
                let matchModel = Match.transform(match);
                rounds[round].push(matchModel);
            }

        }

        return rounds;

    }
}

export default Generator