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

export default get_color_by_position