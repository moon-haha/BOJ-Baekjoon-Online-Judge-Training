const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString().split(" ");
inputData = inputData.map((item) => +item);
solution(inputData[0], inputData[1]);
//24시간에서 45분 일찍 알람 설정하기.
function solution(hour, min) {
  //1. 분 계산
  min = min - 45;
  //2. 시 계산
  if (min < 0) {
    hour = hour - 1;
    min = min + 60;
  }
  //3. 24시 계산
  if (hour < 0) {
    hour = hour + 24;
  }
  console.log(hour, min);
}
