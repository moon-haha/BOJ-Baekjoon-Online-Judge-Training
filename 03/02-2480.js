const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let inputData = fs.readFileSync(filepath).toString().split(" ");
inputData = inputData.map((item) => +item);

solution(inputData[0], inputData[1], inputData[2]);
function solution(D1, D2, D3) {
  let money;
  let maxNum;
  if (D1 === D2 && D1 === D3) {
    //같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
    money = 10000 + D1 * 1000;
  } else if (D1 === D2 || D2 === D3 || D3 == D1) {
    //같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
    if (D1 === D2 || D1 === D3) {
      money = 1000 + D1 * 100;
    } else {
      money = 1000 + D2 * 100;
    }
  } else {
    //최대 숫자 찾기
    //모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
    maxNum = Math.max(D1, D2, D3);
    money = maxNum * 100;
  }
  console.log(money);
}
