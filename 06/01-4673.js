// 1) 생성자 함수
function d(n) {
  //d(75) = 75+7+5 = 87
  //d(33) = 33+3+3 = 39

  let number = n;
  let result = 0;

  //number의 자리수를 파악하고, 10으로 나눠가며 각 자리 수를 result에 합한다.
  for (let i = 0; i < String(n).length; i++) {
    // 10으로 나눈 수의 나머지를 먼저 더한다.
    // 1) 0 + 5
    // 2) 5 + 7
    // -> 5 + 7
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return n + result;
}

// 2) 범위
const range = 10000;
//0~10000 true array
let selfNumArr = Array(range + 1).fill(true);

//self number check
for (i = 0; i <= 10000; i++) {
  //selfNumber가 아니면 false
  //생성자로 생성되지 않는 애들은 true(selfNumber)
  selfNumArr[d(i)] = false;
}

//true index output
for (let i = 0; i < range; i++) {
  if (selfNumArr[i]) {
    console.log(i);
  }
}
