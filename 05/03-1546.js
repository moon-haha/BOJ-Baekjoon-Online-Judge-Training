const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

solution(input);
function solution(input) {
  const num = +input[0];
  //console.log(num);
  //첫째 줄에 시험 본 과목의 개수 N이 주어진다.

  let score = input[1].split(" ");
  //console.log(score);

  //자기 점수 중에 최댓값을 골랐다.
  //이 값을 M이라고 한다.
  const max = Math.max(...score);
  //console.log(max);

  let sum = 0;

  //그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
  for (let i = 0; i < num; i++) {
    sum += (score[i] / max) * 100;
  }
  console.log(sum / num);

  //이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다.
  //이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.
}
