// 1. for 반복문
for (let i=0; i<10; i++) {

  // 특정 반복을 건너뛰기
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);

  // 중간에 종료시키기
  if(i >= 5) {
    break;
  }
}