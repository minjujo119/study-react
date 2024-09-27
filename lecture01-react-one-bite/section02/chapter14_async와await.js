// async
// 함수를 비동기 함수로 변환하고 프로미스를 반환하도록 하는 키워드

async function getData(params) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    },1500)
  })
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
  const data = await getData(); // 프로미스가 종료되기를 기다렸다가 변수(data)에 값을 넣어줌
  console.log(data);
}

printData();