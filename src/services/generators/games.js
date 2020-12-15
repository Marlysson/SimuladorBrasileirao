
import Game from '../../models/game.js'

class Generator{

    static generate(home, away){        
        return new Game(home, away);
    }
    
}

export default Generator