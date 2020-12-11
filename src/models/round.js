
class Round{

    constructor(sequence){
        this.sequence = sequence;
        this.games = [];
    }

    add(game){
        this.games.push(game)
    }

}

export default Round
