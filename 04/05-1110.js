const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputData = fs.readFileSync(filepath).toString();

let Number = parseInt(inputData);
let count = 0;
let num = Number;

solution(Number, count, num);
function solution(Number, count, num) {
  while (true) {
    //26에서 26%10 -> 6, 26/10 -> 2.6 => 8
    let sum = parseInt((num % 10) + num / 10);
    // 6 * 10 + 8 % 10 -> 8
    num = (num % 10) * 10 + (sum % 10);
    count++;
    if (num === Number) break;
  }
  console.log(count);
}
