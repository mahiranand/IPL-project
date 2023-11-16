const deliveries = require('../data/deliveries.json');
const matches = require('../data/matches.json')
const fs = require('fs');

let matchId = [];

for(let i in matches){
    if(matches[i]["season"] === "2016"){
        matchId.push(matches[i]["id"]);
    }
}

const ans = deliveries.reduce( (acc, cv) => {
    
    if(!matchId.find(ele => ele === cv["match_id"])){
       return acc;
    }
    if(!acc[cv["bowling_team"]]){
        acc[cv["bowling_team"]] = 0;
    }
    acc[cv["bowling_team"]] += parseInt(cv["extra_runs"]);
    return acc;
},{});
fs.writeFileSync('../public/output/ans3.json', JSON.stringify(ans));