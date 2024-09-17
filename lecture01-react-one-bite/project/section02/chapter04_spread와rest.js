// 1. Spread 연산자(...)
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열에 사용 예시
let arr1 = [1,2,3];
let arr2 = [4,...arr1,5,6];
console.log(arr2);

// 객체에도 사용가능
let obj1 = {
  a:1,
  b:2,
}
let obj2 = {
  ...obj1,
  c:3,
  d:4
}
console.log(obj2);

// 함수에도 사용 가능
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수라는 뜻
// rest파라미터 뒤에는 추가 파라미터 쓰지 못함
// ...뒤에 아무 문자나 쓰면 됨 / 꼭 rest가 아니어도 됨!!
function funcB({a:one, b:two, ...rest}) {
  console.log(one, two);
  console.log(rest);
}

funcB(obj2);

