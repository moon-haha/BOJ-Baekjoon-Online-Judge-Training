//A % B
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
let arr = input.map((item) => +item);
arr = arr.map((item) => item % 42);

//set으로 중복 제거
const set = new Set(arr);
//console.log(set);
//다시 배열로 만듬
const uniqueArr = [...set];
console.log(uniqueArr.length);
