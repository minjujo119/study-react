// 1. 함수 표현식
function funcA(params) {
  // console.log("funcA");
}

let varA = funcA; // 함수 자체를 변수에 담을 수도 있음
console.log(varA);
varA();

let varB = function (params) { // 익명함수
  // console.log("funcB");
}
varB();

// 2. 화살표 함수
let varC  = (value) => {
  return value + 1;
}

// 반환값만 있다면 중괄호 생략 가능
// let varC  = (value) => value + 1; 

console.log(varC(10))

