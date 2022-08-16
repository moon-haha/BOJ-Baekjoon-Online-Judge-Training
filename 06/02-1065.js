/*
  문제 :
  어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
  ex) 110, 210, 1000 ,500
  등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
  N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
*/
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString();

solution(input);

function solution(input) {
  //자릿수 구하기
  //1의 자리 수,10의 자리 수는 전부 한수
  //1000의 자리, 100의 자리 수 10의 자리 수 1의 자리 수를 구하고 차이를 구함
  let N = Number(input);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    let nArr = String(i); //문자열로 변환
    if (i < 100) {
      //99까지는 다 한수
      count++;
      continue;
    }
    //123, 1-2, 2-3,
    let A = Number(nArr[0]) - Number(nArr[1]);
    let B = Number(nArr[1]) - Number(nArr[2]);
    if (A === B) {
      count++;
    }
  }
  console.log(count);
}
