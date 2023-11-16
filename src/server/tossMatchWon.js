const matches = require('../data/matches.json');
const fs = require('fs');

const ans = matches.reduce( (acc,cv) => {
    if(cv["toss_winner"] === cv["winner"]){
        if(!acc[cv["winner"]]){
            acc[cv["winner"]] = 0;
        }
        acc[cv["winner"]]++;
    }
    return acc;
},{});

fs.writeFileSync('../public/output/ans5.json',JSON.stringify(ans));