// 1. 객체 생성
let obj1 = new Object(); // new : 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체속성)
let person = {
  // key : value,
  name : "이정환",
  age : 27,
  hobby : "테니스",
  extra : {},
  10 : 20,
  "like cat" : true // 띄어쓰기가 있는 경우 따옴표로 감싸기
}

// 3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
let age = person["age"] // 괄호 표기법

let property = "hobby"
let hobby = person[property];
console.log(hobby) // 테니스

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE Developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 수정하는 방법
delete person.job;
delete person["favoriteFood"]

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);