const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString().split("\n");

solution(inputData);
function solution(input) {
  for (i = 0; i < input.length - 1; i++) {
    let splitData = input[i].split(" ");
    console.log(Number(splitData[0]) + Number(splitData[1]));
  }
}
