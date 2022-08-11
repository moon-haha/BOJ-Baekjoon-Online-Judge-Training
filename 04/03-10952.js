const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString().split("\n");

solution(inputData);
function solution() {
  for (i = 0; i < inputData.length; i++) {
    let splitData = inputData[i].split(" ");
    if (splitData[0] == 0 && splitData[1] == 0) {
      break;
    }
    console.log(Number(splitData[0]) + Number(splitData[1]));
  }
}
