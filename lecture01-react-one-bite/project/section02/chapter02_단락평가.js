// // 단락 평가 예시
// // 단락평가란, 첫번재 항에서 답이 명확해지면 나머지 항은 연산하지 않는 경우
// function returnFalse() {
//   console.log("False함수");
//   return undefined; // falsy값
// }

// function returnTrue() {
//   console.log("True함수");
//   return 10; // truthy값
// }

// console.log(returnFalse() && returnTrue());
// // 콘솔에 4개의답이 출력되어야 하지만, retrunFalse()의 값 2개만 출력된다.

// 단락평가 활용사례
function printName(person) {
  // 첫번째 person이 truthy이므로 바로 name에 person객체가 저장됨
  const name = person && person.name;
  // 객체와 문자열은 모두 truthy이고, T || T 일 경우 첫번째 값이 반환됨
  console.log(name || "person의 값이 없음");
}
printName({name : "이정환"}) // 파라미터로 Truthy한 값을 넘겨줌

// 참고
// T || T 일 경우 첫번째 항 반환
// T && T 일 경우 마지막 항 반환