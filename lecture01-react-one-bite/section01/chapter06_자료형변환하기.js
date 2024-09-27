// 1. 묵시적 형변환 -> 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";

const result = num+str;
console.log(result); // str과 num을 더했지만 str으로 묵시적 형변환 해버림

// 2. 명시적 형변환 -> 내장함수 등을 이용해서 직접 형변환을 명시
// 2-1. 문자 => 숫자 변환 함수들
// Number()
let str1 = "10"
let strToNum1 = Number(str1); // str -> num
console.log(10 + strToNum1); // num

// parseInt() : str에서 찐 숫자만 뽑아 num으로 변환하는 함수
let str2 = "10개"
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);

// 2-2. 숫자 => 문자 변환 함수
let num1 = 20;
let numToStr1 = String(num1);
