// 1. foreach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];
arr1.forEach(function(item, idx, arr){
  console.log(idx, item * 2)
})

let doubledArr = [];
arr1.forEach((item)=>{
  doubledArr.push(item*2);
})
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// 특정요소의 인덱스를 찾아서 반환하는 메서드
// 객체값은 못찾음
let arr3 = [1,2,3];
let index = arr3.indexOf(2); // 요소'2'의 인덱스를 찾아라
console.log(index); // 1
// 참고 : 존재하지 않는 요소를 넣게 되면 -1 반환함

// 4. findIndex
// 모든 요소를 순회하면서 특정 조건을 만족하는 요소의 인덱스를 반환하는 메서드
// 객체 값을 찾을 수도 있음
let arr4 = [1,2,3];
const findIndexReturn = arr4.findIndex((item)=>{
  if(item % 2 !== 0) { // 2로 나누어 떨어지지 않는 = 홀수
    return true;
  }
});
console.log(findIndexReturn); // 0 (조건을 만족하는 첫번째 요소는 1이므로)
// 참고 : 존재하지 않는 요소를 넣게 되면 -1 반환함

let objArr = [
  {name : "조민주"},
  {age : 29}
]
const objArrReturn = objArr.findIndex((item) =>{
  if (item.name === "조민주"){
    return true;
  }
});

console.log(objArrReturn); // 0

// 5. find
// 모든 요소를 순회하면서 조건을 만족하는 요소를 찾고, 요소 그대로 반환
let arr5 = [
  {name : "조민주"},
  {age : 29}
];

const findReturn = arr5.find((item) => {
  if(item.age === 29){
    return true
  }
});
console.log(findReturn); // {age:29}
