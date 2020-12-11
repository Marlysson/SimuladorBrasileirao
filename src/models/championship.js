import TeamGenerator from '../services/generators/teams.js'

class Championship{

    static ranking = []
    static rounds = []
    
    static new(){
        Championship.ranking = TeamGenerator.generate()
        return Championship
    }

}

export default Championship