//1998년생, 태국에서는 2541년생?
//불기 연도를 서기 연도로 바꾸는 프로그램.
//2541-1998 = 543

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

//number로 문자열을 숫자 타입으로 변형해서 계산.
console.log(Number(input) - 543);
