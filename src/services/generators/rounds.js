
import Round from "../../models/round.js";
import GameGenerator from '../generators/games.js'

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
        
        /*
            - Separate championship in rounds ( first and second )
            - Generate all games for Rounds 
            - Split all games generates in Rounds where:
                - One team don't play in same round
            - Second Turn is just a "swap" from a game from First Turn.
                - Team that was Home transform in Away
            - Verification:
                - all total rounds should match with formula: (total_teams.length - 1) * 2
        */

        const TOTAL_GAMES_BY_ROUND = teams.length / 2

        let games  = Generator.games_for_first_turn(teams)
        let rounds = Generator.rounds_for_first_turn(teams)
        
        let has_team = (teams, team) => teams.includes(team.name)
        
        let round_sequences = rounds.map( round => round.sequence )
        
        let auxiliary_rounds = {}

        for ( let round of rounds ){
            auxiliary_rounds[round.sequence] = {}
            auxiliary_rounds[round.sequence].teams = []
            auxiliary_rounds[round.sequence].games= []
        }
                
        for ( let game of games ){
                
            for ( let sequence of round_sequences){
                
                let round = auxiliary_rounds[sequence]
                let teams = round.teams

                if ( has_team(teams, game.home) || has_team(teams, game.away) ){
                    break
                }

                round.teams.push(game.home.name, game.away.name)
                round.games.push(game)

            }
          
        } 
    
        for(let game of auxiliary_rounds[19].games){
            console.log(`${game.home.name} Vs ${game.away.name}`)
        }

        for( let round of rounds){
            // round.games = auxiliary_rounds[round.sequence].games
        }

        return rounds
        
    }

    static games_for_first_turn(teams){

        let last_team_position = teams.length - 1;
        let total_teams = teams.length;
        let games = []

        for( let current_position = 0 ; current_position < last_team_position ; current_position++ ){

            for( let away_team_index = current_position + 1; away_team_index < total_teams; away_team_index++ ){

                let home = teams[current_position];
                let away = teams[away_team_index];

                games.push(GameGenerator.generate(home, away))

            }

        }
        
        return games
   }

    static rounds_for_first_turn(teams){
        
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
            
        }

        return rounds

    }

}

export default Generator