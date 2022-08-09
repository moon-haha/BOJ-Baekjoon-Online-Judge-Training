//두 정수 A, B를 비교하는 프로그램
// A가 B보다 크면 >, 작으면 <, 같으면 == 출력

//filesystem
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
//number 전환
input = input.map((item) => +item);
solution(input[0], input[1]);
function solution(A, B) {
  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else if (A === B) {
    console.log("==");
  }
}
