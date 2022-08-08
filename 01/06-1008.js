//두 정수 A,B를 입력받아 A/B를 출력한다.
//fs
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

// A/B
console.log(A / B);
