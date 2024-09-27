// Promise 객체란?
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내 내장객체
// 비동기 작업을 감싸는 객체임

function add10(num) {
  const promise = new Promise((resolve, reject)=>{
    // executer : 비동기 작업을 실행하는 함수
    // resolve(반환값); 프로미스객체를 성공상태(fulfilled)로 바꿔주는 함수
    // reject(반환값) : 객체를 실패상태(rejected)로 바꿔주고 오류메세지를 띄우는 함수
  
    setTimeout(()=>{
  
      if(typeof(num) === "number"){
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다")
      }
  
    },2000);
  });

  return promise;
};

add10(0)
  .then((result)=>{
    console.log(result); // 10
    return add10(result); // executer를 한번 더 실행
  })
  .then((result)=>{
    console.log(result); // 20
    return add10(undefined); // executer를 한번 더 실행
  })
  .then((result)=>{
    console.log(result); // 30
    return add10(result); // executer를 한번 더 실행
  })
  .catch((error)=>{
    console.log(error);
  })

// then 메서드
// Promise가 성공했을 때 반환값을 이용해 콜백함수 실행하는 메서드

// promise.then((value)=>{
//   console.log(value);
// })

// // catch 메서드
// // Promise가 실패했을 때 반환값을 이용해 콜백함수 실행해주는 메서드
// promise.catch((error)=>{
//   console.log(error);
// })

// // Promise chain (프로미스 체이닝)
// // then과 catch를 연결해서 쓸 수도 있다.
// promise
//   .then((value)=>{
//   console.log(value);
//   })
//   .catch((error)=>{
//     console.log(error);
//   })



// setTimeout(()=>{
//   console.log(promise);
// },3000);
