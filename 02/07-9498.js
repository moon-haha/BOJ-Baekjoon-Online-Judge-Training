const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString();
inputData = +inputData;

solution(inputData);
function solution(A) {
  if (A >= 90) console.log("A");
  else if (A >= 80) console.log("B");
  else if (A >= 70) console.log("C");
  else if (A >= 60) console.log("D");
  else console.log("F");
}
