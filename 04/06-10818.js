const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString().split("\n");

let N = Number(inputData[0]);
let arrayNum = inputData[1].split(" ");
arrayNum = arrayNum.map((item) => +item);

solution(N, arrayNum);
function solution(N, numbers) {
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < N; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }

  console.log(`${min} ${max}`);
}
