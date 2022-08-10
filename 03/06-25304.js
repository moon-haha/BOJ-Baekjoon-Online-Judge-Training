//get inputdata
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString().split("\n");

// data sort

// 첫째 줄에는 영수증에 적힌 총 금액 $X$가 주어진다.
let cost = +inputData[0];
// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류 N이 주어진다.
let N = +inputData[1];

solution(cost, N, inputData);
function solution(cost, N, inputData) {
  let cal = 0;

  //시작 2, N만큼(4회)
  for (let i = 2; i < N + 2; i++) {
    let splitData = inputData[i].split(" ");
    let cost = +splitData[0];
    let q = +splitData[1];
    cal = cal + cost * q;
  }

  if (cal === cost) {
    //구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다.
    console.log("Yes");
  } else {
    //일치하지 않는다면 No를 출력한다.
    console.log("No");
  }
}
