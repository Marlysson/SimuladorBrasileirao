
class Game{

    constructor(home, away){
        this.home = home;
        this.away = away;
        this.goals_home = 0;
        this.goals_away = 0;

        this.day = undefined;
        this.week = undefined;
        this.hour = undefined;
        
        this.stadium = undefined;
        this.country = undefined;
        this.initials_county = undefined;
    }
    
}

export default Game