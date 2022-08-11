const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
input = input.map((item) => +item);

solution(input);
function solution(input) {
  let maxnum = input[0];
  let maxIdx = 0;

  for (let i = 0; i < input.length; i++) {
    if (maxnum < input[i]) {
      maxnum = input[i];
      maxIdx = i;
    }
  }

  console.log(maxnum);
  console.log(maxIdx + 1);
}
