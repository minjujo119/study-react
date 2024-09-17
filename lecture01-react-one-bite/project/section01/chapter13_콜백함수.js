// 1. 콜백함수
function main(sub) {
  console.log(1);
  console.log(2);
  console.log(sub); // 원하는 타이밍에 sub()함수를 실행시킬 수 있다.
}

// => 콜백함수(다른 함수에 전달되어 나중에 실행되는 함수)
function sub() {
  console.log("i am sub");
}

// 콜백함수는 아래와 같이 쓸 수도 있다.
// main(() => {
//   console.log("i am sub");
// })

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let i=1; i<=count; i++) {
    callback(i)
  }
}

// 조건이 변할 때마다 콜백함수를 달리 해주면
// 중복코드 없이 호출만 해도 된다.
repeat(5,(i)=>{
  console.log(i);
});
repeat(5,(i)=>{
  console.log(i*2);
});
repeat(5,(i)=>{
  console.log(i*3);
});
