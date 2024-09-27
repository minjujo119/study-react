// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

// 위 배열의 값을 모두 변수에 저장하고 싶다면?
// 아래 방법은 너무 귀찮다.
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 아래와 같은 코드를 추가하면 됨.
// 변수와 배열의 순서대로 저장됨
let [one, two, three, four = 4] = arr;
console.log(four);

// 2. 객체의 구조 분해 할당
// 쉽게 말해 객체의 키를 변수명으로 값을 별도 저장할 수 있음
let person = {
  name : "이정환",
  age : 27,
  hobby : "테니스",
};

let {
  age,
  name : myName, // 다른 변수명으로 바꾸고 싶을 때
  hobby,
  extra = "hello", // 존재하지 않는 키와 값을 변수로 추가
} = person;
console.log(myName, age, hobby);
console.log(person.name);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra})=>{ // 파라미터 자리에 구조분해할당 뿌리기
  console.log(name, age, hobby, extra);
}

func(person); // 반드시 객체를 파라미터로 넘기기