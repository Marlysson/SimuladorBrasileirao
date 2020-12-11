
class Round{

    constructor(sequence){
        this.sequence = sequence;
        this.games = [];
        
        this.isLast = false
        this.isFirst = false
    }

    first(){
        this.isFirst = true
    }

    last(){
        this.isLast = true
    }

    add(game){
        this.games.push(game)
    }

}

export default Round
