const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString().split("\n");

let testCase = inputData[0];
solution(testCase, inputData);
function solution(T, input) {
  for (i = 1; i <= T; i++) {
    let number = input[i].split(" ");
    console.log(Number(number[0]) + +number[1]);
  }
}
