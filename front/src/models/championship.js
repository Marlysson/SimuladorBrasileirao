import TeamGenerator from "../services/generators/teams.js"
import RoundGenerator from "../services/generators/rounds.js"

class Championship{

    static teams = null
    static rounds = null
    static round = 1

    static async new(){
        Championship.teams = TeamGenerator.generate()
        Championship.rounds = await RoundGenerator.generate()
        return Championship
    }

    static currentRound(){
        return Championship.rounds[Championship.round]
    }

    static prevRound(){

        let exist = Championship.rounds[Championship.round - 1] != null

        if ( exist ){
            Championship.round -= 1    
            return Championship.rounds[Championship.round]
        }

    }

    static nextRound(){

        let exist = Championship.rounds[Championship.round + 1] != null

        if ( exist ){
            Championship.round += 1
            return Championship.rounds[Championship.round]
        }
    }
}

export default Championship