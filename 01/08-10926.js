//아이디가 주어였을 때, 놀람을 표현하는 프로그램 작성
//아이디 뒤에 ??!을 붙여서 나타낸다.

//fs
const fs = require("fs");

//toString()을 하는 이유는 /dev/stdin 반환값이 Buffer객체라서
//.trim()의 등장 (양 끝 공백을 제거한다.)
//trim을 사용하지 않으면 split할 때 공백 배열을 반환하는 경우가 생길 수 있다.(가\n)
const input = fs.readFileSync("/dev/stdin").toString().trim();

// `` ${} 의 등장
console.log(`${input}??!`);
