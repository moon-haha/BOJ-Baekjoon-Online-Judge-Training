const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

solution(input);
function solution(input) {
  //첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
  let testCase = +input[0];

  for (i = 1; i <= testCase; i++) {
    let sum = 0;
    let count = 0;

    let scores = input[i].split(" ").map(Number);
    //둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고,

    let N = scores.shift();
    //console.log(scores); 점수들.
    //console.log(N); 5,7,3,3,9

    //acc 누산기, cur 현재값, 각 요소에 대해 함수를 실행, 누적 값 출력
    sum = scores.reduce((acc, cur) => (acc += cur), 0); //배열 각 요소에서 더해 반환한다.
    //console.log(sum);
    const avg = sum / N;
    //console.log(avg);

    for (j = 0; j < N; j++) {
      //console.log(scores[j]);
      if (scores[j] > avg) {
        count++;
      }
    }
    console.log(((count / N) * 100).toFixed(3) + "%");
  }
}
