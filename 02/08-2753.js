/*연도가 주어졌을 때 윤년인지 아닌지 확인하는 문제
  윤년은 4의 배우이면서 100의 배수가 아닐때, 또는 400의 배수일 때이다.
  출력 : 윤년이면 1, 아니면 0을 출력한다.
*/

//FS
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString();
inputData = +inputData;
solution(inputData);
//solution
function solution(A) {
  //4의 배수면서 //100의 배수가 아닐 때,400의 배수일 때
  if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
    console.log("1");
  } else {
    console.log("0");
  }
}
