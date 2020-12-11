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

    let team_owner = game.team_owner
    let team_visitor = game.team_visitor

    team_owner.games += 1
    team_owner.goals_pro += game.goals_owner
    team_owner.balance_goals += balanced_goals(game.goals_owner, game.goals_visitor)
    
    team_visitor.games += 1
    team_visitor.goals_pro += game.goals_visitor
    team_visitor.balance_goals += balanced_goals(game.goals_visitor, game.goals_owner)

    if ( game.goals_owner > game.goals_visitor ){
        team_owner.points += 3
        team_owner.victories += 1
    } 
    
    else if ( game.goals_visitor > game.goals_owner ){
        team_visitor.points += 3
        team_visitor.victories += 1
    } 
    
    else {
        team_owner.points += 1
        team_visitor.points += 1
    }

    return {
        team_owner, 
        team_visitor
    }

}

export { 
    get_color_by_position, 
    update_ranking, 
    update_statistics_for_game 
}