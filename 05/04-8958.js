const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

solution(input);
function solution() {
  let caseNum = +input[0];

  //문제 케이스마다 채점 (5회)
  for (let i = 1; i <= caseNum; i++) {
    let point = 0;
    let sum = 0;

    //정답 출력 확인 (문제수의 길이만큼)
    for (let j = 0; j < input[i].length; j++) {
      //console.log(input[i][j]);
      //정답이 O라면
      if (input[i][j] === "O") {
        //1, 2, 3...
        point++;
      } else {
        //1, 2, 0, 1, 2, 3, 0, 1, 0
        point = 0;
      }
      sum += point;
    }
    console.log(sum);
  }
}
