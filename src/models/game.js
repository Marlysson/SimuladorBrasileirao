
class Game{

    constructor(home, away){
        this.home = home;
        this.away = away;
        this.goals_home = 0;
        this.goals_away = 0;
    }

    swap(){
        return new Game(this.away, this.home)
    }

    equal(game){
        return game.home.equal(this.home) && game.away.equal(this.away)
    }

}

export default Game