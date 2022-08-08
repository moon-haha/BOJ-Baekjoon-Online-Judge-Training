//두 자연수 A,B를 받아 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 출력

const fs = require("fs");

const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

//A, B
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

//A+B
console.log(A + B);
//A-B
console.log(A - B);
//A*B
console.log(A * B);
//A/B(몫), 소숫점 제거
console.log(parseInt(A / B));
//A%B(나머지)
console.log(A % B);

/*
filePath를 이용한 경우

const fs = require('fs');
const filePath = '/dev/stdin';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map(i=>+i);
console.log(input[0] + input[1])
console.log(input[0] - input[1])
console.log(input[0] * input[1])
console.log(Math.floor(input[0] / input[1]))
console.log(input[0] % input[1])

*/
