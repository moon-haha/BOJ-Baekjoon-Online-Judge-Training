const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString();
inputData = Number(inputData);
solution(inputData);

function solution(number) {
  for (i = 1; i < 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}
