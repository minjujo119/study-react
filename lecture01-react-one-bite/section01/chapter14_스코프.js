// 전역스코프 / 지역스코프
// 전역스코프 : 전체 영역에서 접근 가능
// 지역스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역스코프 변수
function funcA(params) {
  let b = 2; // 지역스코프 변수
  console.log(a);

  function funcB(params) {
    return "a"
  }
}
funcA();
console.log(b); // error; 함수 바깥에서는 안쪽 변수에 접근할 수 없다

funcB(); // error; 함수 안에 선언된 함수도 지역스코프라 바깥에서 접근 불가이다.


