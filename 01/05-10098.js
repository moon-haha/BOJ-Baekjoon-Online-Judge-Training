// 두 정수 A , B 입력 받아 AxB 출력하기.
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A * B);
