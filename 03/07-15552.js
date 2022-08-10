const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString().split("\n");

//입력 첫 줄에 테스트케이스의 개수 T가 주어진다.
let testcase = +inputData[0];
solution(testcase);
function solution(T) {
  //출력 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
  for (i = 1; i < T + 1; i++) {
    let splitnumber = inputData[i].split(" ");
    let A = +splitnumber[0];
    let B = +splitnumber[1];
    console.log(A + B);
  }
}
