const matches = require('../data/matches.json');
const fs = require('fs');

const list = matches.reduce( (acc,cv) => {

    if(!acc[cv["season"]]){
        acc[cv["season"]] = {};
    }
    if(!acc[cv["season"]][cv["player_of_match"]]){
        acc[cv["season"]][cv["player_of_match"]] = 0;
    }
    acc[cv["season"]][cv["player_of_match"]]++;
    return acc;
},{});
const highestMatches = [];
for(let key in list){
    const values = Object.values(list[key]);
    values.sort();
    highestMatches.push(values[values.length-1]);
}
let i = 0;
const ans = {};
for(let key in list){

    ans[key] = {};
    for(let key2 in list[key]){
        if(list[key][key2] === highestMatches[i]){
            ans[key][key2] = list[key][key2];
        }
    }
    i++;
}

fs.writeFileSync('../public/output/ans6.json',JSON.stringify(ans));