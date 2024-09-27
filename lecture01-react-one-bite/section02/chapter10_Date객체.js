// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// 특정 시간을 담은 객체를 생성하고 싶을때
let date2 = new Date("1997. 01. 07");
console.log(date2);

// 2. 타임스탬프 getTime()
// 현재 시간이 UTC로부터 몇 ms가 지났는지 숫자값 반환하는 메서드
// UTC : 세계 협약 시간 ("1970.01.01 00:00:00")
let ts1 = date1.getTime();
console.log(ts1);
let date4 = new Date(ts1);
console.log(date1, date4);

// 3. Date객체로부터 시간요소 추출하기
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0월부터 시작하므로 더해주자
let date = date1.getDate();
let hour = date1.getHours();
let min = date1.getMinutes();
let sec = date1.getSeconds();
let msec = date1.getMilliseconds();

console.log(
  year,
  month,
  date,
  hour,
  min,
  sec,
  msec
);

// 4. 시간 수정하기 (원본객체 값 수정)
date1.setFullYear(2023);
date1.setMonth(8);
date1.setDate(30);
date1.setHours(13);
date1.setMinutes(59)
date1.setSeconds(59)

// 5. 시간을 여러 포맷으로 출력하기
console.log(
  date1.toDateString(), // 시간 제외하고 날짜만
  date1.toLocaleString() // 우리나라 방식
);