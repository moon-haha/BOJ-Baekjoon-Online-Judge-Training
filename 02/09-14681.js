/*
 4분면.
 1사분면 : ++, 2사분면 : -+
 3사분면 : --, 4사분면 : +-
 입력 : 12 5
 출력 : 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
*/

//FS
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString().split("\n");
inputData = inputData.map((item) => +item);
solution(inputData[0], inputData[1]);
//solution
function solution(x, y) {
  if (x > 0 && y > 0) {
    //1사분면
    console.log("1");
  } else if (x < 0 && y > 0) {
    //2사분면
    console.log("2");
  } else if (x < 0 && y < 0) {
    console.log("3");
  } else if (x > 0 && y < 0) {
    console.log("4");
  }
}
