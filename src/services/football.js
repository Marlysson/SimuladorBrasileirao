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

        let competition = Football.competition || null;
        let desired_round = round || null;

        let client = axios.create({
            baseURL: Football.url,
            headers: Football.header
        })

        try{

            if ( competition == null){
                throw new Error("The competition is required.");
            }
            
            let resource = Football.matchesEndpoint;
    
            if ( round != null ){
                resource += `?matchday=${desired_round}`;
            }
    
            let result = await client.get(resource);
            let rounds = {};
            
            for( let match of result.data.matches ){            
                
                let currentMatch = {}
                let score = match.score;
                let statusMatch = {
                    "IN_PLAY": "EM ANDAMENTO",
                    "SCHEDULED": "AGENDADO",
                    "FINISHED": "FINALIZADO"
                }

                currentMatch.date = match.utcDate
                currentMatch.homeTeam = match.homeTeam;
                currentMatch.awayTeam = match.awayTeam;
                
                currentMatch.score = {
                    winner : null,
                    home: null,
                    away : null
                }

                if ( score.winner != null ){

                    let winnerTeam = {
                        "HOME_TEAM" : {"type": "CASA", "winner": match.homeTeam},
                        "AWAY_TEAM" : {"type": "FORA", "winner": match.awayTeam},
                        "DRAW": {"type": "EMPATE", "winner": null}
                    }

                    currentMatch.score.winner = winnerTeam[score.winner];
                    
                    currentMatch.score.home = score.fullTime.homeTeam;
                    currentMatch.score.away = score.fullTime.awayTeam;

                }
                currentMatch.status = statusMatch[match.status]

                if ( rounds[match.matchday] == null ) {
                    rounds[match.matchday] = [];
                }
                rounds[match.matchday].push(currentMatch);
                
            }

            return rounds;

        }catch(error){
            throw Error(error);
        }      
            
    }

}

export default Football;