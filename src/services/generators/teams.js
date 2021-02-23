import Team from "../../models/team.js"
import TEAMS from "../../data/teams.js"

class Generator{

    static generate(){
        
        let teams = []

        TEAMS.forEach(function(team, index){
            let new_team = new Team(team.name, team.initials, team.logo);
            new_team.position = index + 1
            
            teams.push(new_team)
        })

        return teams
        
    }
}

export default Generator