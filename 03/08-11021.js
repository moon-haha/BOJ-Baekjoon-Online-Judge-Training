const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filePath).toString().split("\n");

let testCase = +inputData[0];
solution(testCase, inputData);
function solution(T, input) {
  //각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
  for (i = 1; i < T + 1; i++) {
    let splitData = input[i].split(" ");
    let A = +splitData[0];
    let B = +splitData[1];
    console.log(`Case #${i}: ` + Number(A + B));
  }
}
