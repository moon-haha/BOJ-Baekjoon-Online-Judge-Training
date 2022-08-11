const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString().split("\n");

let nxNum = inputData[0].split(" ");
let numN = +nxNum[0];
let numX = +nxNum[1];

let arrayNum = inputData[1].split(" ");
arrayNum = arrayNum.map((item) => +item);

solution(numN, numX, arrayNum);
function solution(n, x, array) {
  //정수 N개로 이루어진 정수 X가 주어진다.
  //X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

  //i가 n보다 작을때까지 1씩 증가하며
  for (i = 0; i < n; i++) {
    //array[i]가 x보다 작은지
    if (x > array[i]) {
      console.log(array[i]);
    }
  }
}
