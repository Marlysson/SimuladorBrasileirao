
class Round{

    constructor(sequence){
        this.sequence = parseInt(sequence);
        this.games = [];
        
        this.isFirst = this.sequence == 1;
        this.isLast = this.sequence == 38;
    }

    push(match){
        this.games.push(match);
    }

}

export default Round
