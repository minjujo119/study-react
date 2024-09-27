// 1. null 병합 연산자(??)
// null, undefined가 아닌 존재하는 값을 추려내는 기능

let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 10; 둘다 값이 존재할 경우 첫번째 값이 출력됨

console.log(var4);
console.log(var5);

// 이름과 닉네임 중 존재하는 값으로 저장하고 싶을 때
let userName;
let userNickName = "minjujo119"
let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 연산자

let var7 = 1;
var7 = "hello"; // 숫자를 할당 했더라도 이후 문자열로 값을 재할당할 수 있음

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 이용하여 참, 거짓일 때의 값을 다르게 반환
// 요구사항 : 변수 res에 var8의 값이 짝수면 '짝', 홀수면 '홀' 반환해라
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);