// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 변수에 담을 경우 요소 추가 후 배열의 길이를 반환한다.
let arr1 = [1,2,3];
const newLength = arr1.push(4,5,6,7);
console.log(arr1); // [1,2,3,4,5,6,7]
console.log(newLength); // 7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환함
let arr2 = [1,2,3];
const popedItem = arr2.pop();
console.log(arr2); // [1,2]
console.log(popedItem); // 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환함
let arr3 = [1,2,3]
const shiftedItem = arr3.shift();
console.log(arr3); // [2,3]
console.log(shiftedItem); // 1

// 4. unshift
// 배열 맨 앞에 새로운 요소를 추가하는 메서드
// 변경된 배열의 길이를 반환함
let arr4 = [1,2,3]
const newLength2 = arr4.unshift(0);
console.log(arr4); // [0,1,2,3]
console.log(newLength2);

// 참고 : push, pop과 달리 shift, unshift는 전체 배열의 
// 인덱스를 수정하는 작업이므로 속도가 느리다. (맨 앞에서 값을 수정하기 때문)
// 그러므로 되도록이면 push, pop 메서드를 사용하자!

// 5. slice
// 가위처럼 배열의 특정 부분을 잘라 새로운 배열로 반환
// 원본 배열은 수정되지 않음
let arr5 = [1,2,3,4,5];
const sliced = arr5.slice(2,5); // slice(시작인덱스, 끝인덱스+1)
const sliceEnd = arr5.slice(-3); // 끝에서 3개만 잘라라
console.log(arr5); // [1,2,3,4,5] // 원본 배열 수정 X
console.log(sliced); // [3,4,5]
console.log(sliceEnd); // [3,4,5]

// 6. concat 메서드
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1,2];
let arr7 = [3,4];
let concated = arr6.concat(arr7);
console.log(concated);

