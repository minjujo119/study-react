// 1. filter
// 기존 배열에서 조건을 만족하는 요소(참)만 필터링하여 새로운 배열로 반환

let arr1 = [
  {name: "이정환", hobby: '테니스'},
  {name: "조민주", hobby: '테니스'},
  {name: "홍길동", hobby: '독서'}
];

const tennisPeople = arr1.filter((item)=>{
  if(item.hobby === '테니스'){
    return true; // 참일 경우 메서드 진행됨
  };
});
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서
// 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환함
let arr2 = [1,2,3];
const mapResult = arr2.map((item,idx,arr) => {
  return item * 2;
})
console.log(mapResult);

// 예제 하나 더!
let names = arr1.map((item) => item.name)
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬해줌
let arr3 = ['a','c','b'];
arr3.sort();
console.log(arr3); // [a,b,c]
// 참고! 숫자 정렬은 안됨 만약 하고 싶다면 아래처럼...
let arr4 = [10, 3, 5];
arr4.sort((a,b) => {
  if (a > b) {
    // a가 b보다 큰 경우 a가 b보다 뒤에 와라
    return 1;
    // 내림차순 정렬할 경우
    return -1;
  } else if (a < b) {
    // a가 b보다 작은 경우 a가 b보다 앞에 와라
    return -1;
    // 내림차순 정렬할 경우
    return 1;
  } else {
    // 값이 같을 경우 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr4);

// 4. toSorted
// 가장 최근에 추가된 최신 메서드
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();
console.log(arr5); // ["c","a","b"]
console.log(sorted); // ["a","b","c"]

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi","i'm","minju"];
const joined = arr6.join(" ");
console.log(joined);