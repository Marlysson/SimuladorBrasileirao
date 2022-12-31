import axios from "axios";
import DATA from '../data/config.js';

const TOKEN = DATA.TOKEN;
const FOOTBALL_API = DATA.FOOTBALL_API;

class Football{
    
    static header = {"X-Auth-Token": TOKEN}
    static url = FOOTBALL_API;
    static competition = "BSA"; // Brasileirão
    static matchesEndpoint = `competitions/${Football.competition}/matches`;
    static classificationEndpoint = `competitions/${Football.competition}/standings`;

    static classification(){
        // todo
    }

    static async rounds(round){
        
        let result = axios.get('http://localhost:8080/')
        console.log(result)
        return result;
            
    }

}

export default Football;