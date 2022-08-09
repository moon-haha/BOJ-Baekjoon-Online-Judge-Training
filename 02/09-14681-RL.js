/*
 4분면.
 1사분면 : ++, 2사분면 : -+
 3사분면 : --, 4사분면 : +-
 입력 : 12 5
 출력 : 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
*/

//RL
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; //입력값
let quadrantVal; //사분면

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];
  if (x > 0 && y > 0) {
    //1사분면
    console.log("1");
  } else if (x < 0 && y > 0) {
    //2사분면
    console.log("2");
  } else if (x < 0 && y < 0) {
    console.log("3");
  } else if (x > 0 && y < 0) {
    console.log("4");
  }
});
