//체스는 킹 퀸 1개, 룩 비숍 나이트 2개, 폰 8개로 구성 돼 있다.
//흰색 피스가 주어졌을 때 몇 개를 더 빼고 더해야 올바른 세트가 되는지 구한다.
// 예시 : [0 0 1 0 1 5]
// 출력 : [1 1 1 2 1 3]

const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
var d = parseInt(input[3]);
var e = parseInt(input[4]);
var f = parseInt(input[5]);

const king = 1;
const queen = 1;
const rook = 2;
const bishops = 2;
const knights = 2;
const pawns = 8;

console.log(king - a);
console.log(queen - b);
console.log(rook - c);
console.log(bishops - d);
console.log(knights - e);
console.log(pawns - f);
