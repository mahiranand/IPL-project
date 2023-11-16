const matches = require("../data/matches.json");
const fs = require("fs");

let ans = {};
for (let i = 0; i < matches.length; i++) {
  if (!matches[i].winner) continue;

  if (!ans[matches[i]["winner"]]) {
    ans[matches[i]["winner"]] = {};
  }

  if (!ans[matches[i]["winner"]][matches[i]["season"]]) {
    ans[matches[i]["winner"]][matches[i]["season"]] = 0;
  }
  ans[matches[i]["winner"]][matches[i]["season"]]++;
}

fs.writeFileSync("../public/output/ans2.json", JSON.stringify(ans));
