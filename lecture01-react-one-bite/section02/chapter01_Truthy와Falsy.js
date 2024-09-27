// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
// 나열할 수 없음. Falsy값을 제외한 나머지 모든 값
let t1 = "hello" // 문자열
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  // person객체가 값이 없을 때의 조건이 너무 김
  if (person === undefined && person === null){
    console.log("person의 값이 없음");
    return;
  }

  // 조건을 간단하게 만들고 싶다면 두 조건이 모두 falsy 값이라는 것을 이용하자
  if (!person){
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = {name : "이정환"};
person = null;
printName(person);