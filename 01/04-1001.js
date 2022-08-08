//정수 A, B 입력받아 A-B 계산하기

const fs = require("fs");

const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A - B);
