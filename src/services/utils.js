import { COLOR_BY_RANKING } from './data.js'

let get_color_by_position = function(position){

    if ( position <= 4 ){
        return COLOR_BY_RANKING['libertadores'];
    }

    if ( position == 5 || position == 6 ){
        return COLOR_BY_RANKING["pre_libertadores"];
    }
    
    if ( position >= 7 && position <= 12 ){
        return COLOR_BY_RANKING["sul_americana"]
    }

    if ( position >= 17) {
        return COLOR_BY_RANKING["rebaixamento"]
    }

    return COLOR_BY_RANKING["nenhum"]

}

let update_ranking = function(teams){

    teams.sort(function(a, b) {
        return b.points - a.points;
    });

}

let update_statistics_for_game = function(game){

    let balanced_goals = (goals_pro, goals_con) => goals_pro - goals_con

    let team_home = game.team_home
    let team_away = game.team_away

    team_home.games += 1
    team_home.goals_pro += game.goals_owner
    team_home.balance_goals += balanced_goals(game.goals_owner, game.goals_visitor)
    
    team_away.games += 1
    team_away.goals_pro += game.goals_visitor
    team_away.balance_goals += balanced_goals(game.goals_visitor, game.goals_owner)

    if ( game.goals_owner > game.goals_visitor ){
        team_home.points += 3
        team_home.victories += 1
    } 
    
    else if ( game.goals_visitor > game.goals_owner ){
        team_away.points += 3
        team_away.victories += 1
    } 
    
    else {
        team_home.points += 1
        team_away.points += 1
    }

    return {
        team_home, 
        team_away
    }

}

export { 
    get_color_by_position, 
    update_ranking, 
    update_statistics_for_game 
}