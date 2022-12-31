
class Match{

    constructor(){
        this.home = null;
        this.away = null;
        this.goals_home = null;
        this.goals_away = null;

        this.day = null;
        this.week = null;
        this.hour = null;
        
        this.status = null;

        this.stadium = null;
        this.country = null;
        this.initials_county = null;
        
    }

    static transform(fetchedMatch){

        let match = new Match();
        
        match.home = fetchedMatch.homeTeam.name;
        match.away = fetchedMatch.awayTeam.name;
        match.goals_home = fetchedMatch.score.home;
        match.goals_away = fetchedMatch.score.away;
        match.status = fetchedMatch.status;

        return match;
    }
    
}

export default Match