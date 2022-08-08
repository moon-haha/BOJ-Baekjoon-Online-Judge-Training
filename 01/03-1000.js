//두 정수 A, B를 입력받고, A+B 출력

//file system module
const fs = require("fs");

// 입력 받은 문자열을 .split()함수를 통해 배열화한다.
// 인코딩 옵션, string 자료형
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);

//fs, fs.readFileSync, parseInt 사용
