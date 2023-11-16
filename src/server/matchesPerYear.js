const fs = require("fs");
const matches = require("../data/matches.json");

let newObj = {};
for (let i in matches) {
  if (!newObj[matches[i]["season"]]) {
    newObj[matches[i]["season"]] = 0;
  }
  newObj[matches[i]["season"]]++;
}

const data = JSON.stringify(newObj);
fs.writeFileSync("../public/output/ans1.json", data);
