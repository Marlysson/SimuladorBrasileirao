
import Game from '../../models/game.js'

class Generator{

    static generate(team_owner, team_visitor){        
        return new Game(team_owner, team_visitor);
    }
    
}

export default Generator