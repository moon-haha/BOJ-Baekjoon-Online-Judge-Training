const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString();

let star = "";

solution(inputData);
function solution(stars) {
  for (i = 0; i < stars; i++) {
    star += "*";
    console.log(star);
  }
}
