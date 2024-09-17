// 비동기 방식의 예제
console.log(1);
// 비동기 함수의 대표격인 setTimeout
// 타이머와 콜백함수를 Web APIs에 넘겨준 뒤 (싱글 쓰레드이므로)
// 반환값을 기다리지 않고 다음 태스크로 넘어감
setTimeout(()=>{
  console.log(2);
},1000);

console.log(3);
