/*
  입력 : 첫째 줄 - 현재 시각, 두번째 줄 - 요리가 필요한 시간
  출력 : 종료되는 시와 분을 공백을 사이에 두고 출력.
*/
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString().split("\n");

let currentHour = inputData[0].split(" ")[0];
let currentMin = inputData[0].split(" ")[1];
let cookTime = inputData[1];

solution(+currentHour, +currentMin, +cookTime);
function solution(doneHour, doneMin, cookTime) {
  //분 계산을 한다.
  doneMin += cookTime;

  //60분이 지나면 1시간을 올려준다.
  while (doneMin >= 60) {
    doneMin -= 60;
    doneHour += 1;
  }

  //24시간제이므로 24시간을 나눠준다.
  doneHour %= 24;
  console.log(doneHour, doneMin);
}
