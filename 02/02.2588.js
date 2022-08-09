const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0], input[1]);
function solution(A, B) {
  console.log(Number(A * B[2]));
  console.log(Number(A * B[1]));
  console.log(Number(A * B[0]));
  console.log(A * B);
}
