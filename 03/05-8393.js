const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString();
//Number
inputData = +inputData;

solution(inputData);
function solution(n) {
  //n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
  let answer = 0;
  for (i = 1; i <= n; i++) {
    answer = answer + i;
  }
  console.log(answer);
}
