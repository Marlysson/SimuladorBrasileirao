import Team from '../models/team.js'
import TEAMS from '../data.js'

class Generator{

    static teams = []

    static generate(){
        
        if ( Generator.teams.length > 0 ){
            return Generator.teams
        }

        TEAMS.forEach(function(team, index){
            let new_team = new Team(team.name, team.initials, team.logo);
            new_team.position = index + 1
            
            Generator.teams.push(new_team)
        })

        return Generator.teams
    }
}

export default Generator