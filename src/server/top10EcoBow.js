const deliveries = require('../data/deliveries.json')
const matches = require('../data/matches.json')
const fs = require('fs')

let matchId = [];
for(let i in matches){
    if(matches[i]["season"] === "2015"){
        matchId.push(matches[i]["id"]);
    }
}

const list = deliveries.reduce((acc , cv) => {

    if(!matchId.find( ele => ele === cv["match_id"])) return acc;

    if(!(acc[cv["bowler"]])){
        acc[cv["bowler"]] = { totalruns : 0, totalbowl : 0};
    }
    acc[cv["bowler"]].totalruns += parseInt(cv["total_runs"]);

    if(parseInt(cv["wide_runs"]) > 0 || parseInt(cv["noball_runs"]) > 0){
        return acc;
    }
    acc[cv["bowler"]].totalbowl++;
    return acc;

},{});

let arr = [];

for(let key in list){
    arr.push({bowler : key, economy : ( (list[key].totalruns)/(list[key].totalbowl)*6).toFixed(2) });
}
const ans = arr.sort((a,b) => a.economy - b.economy).slice(0,10);

fs.writeFileSync('../public/output/ans4.json', JSON.stringify(ans));

