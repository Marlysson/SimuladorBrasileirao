
class Team{
    
    constructor(name, initial, logo){
        this.name = name
        this.inicial = initial
        this.logo = logo
        this.position = null
        this.points = 0
        this.games = 0
        this.victories = 0
        this.goals_pro = 0
        this.balance_goals = 0
    }

    equal(team){
        return this.name == team.name
    }
}

export default Team
