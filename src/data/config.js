import dotenv from "dotenv";
import dirname from "path";

let ROOT_DIR = dirname.resolve("..");
let env_location = dirname.join(ROOT_DIR, ".env");

dotenv.config({path: env_location})

export default {
    "TOKEN" : process.env.TOKEN,
    "FOOTBALL_API": "https://api.football-data.org/v2/"
};