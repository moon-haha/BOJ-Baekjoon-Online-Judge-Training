const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputData = fs.readFileSync(filepath).toString();

solution(inputData);
function solution(input) {
  let starSpace = "";

  //input data만큼 실행
  for (i = 0; i < input; i++) {
    //i번째에 input-i-1만큼 공백을 채운다.(4, 3, 2, 1,)
    for (let j = 0; j < input - i - 1; j++) {
      starSpace += " ";
    }
    //i번째에 k <= i 만큼 별을 채운다.(1, 2, 3, 4, 5 ...)
    for (let k = 0; k <= i; k++) {
      starSpace += "*";
    }

    // 한 케이스 끝날 때 스페이스 프린트
    starSpace += "\n";
  }
  console.log(starSpace);
}
