// 함수선언
function greeting(params) {
  console.log("안녕하세요");
}

// 함수 호출
console.log("호출 전");
greeting();
console.log("호출 후");

// 직사각형의 넓이를 구하는 함수
function getArea(width, height) {
  function another() { // 중첩함수
    let area3 = width / height;
    console.log(area3);
  }
  another();
  let area = width * height;
  return area; // 함수의 반환값, 함수 종료

  console.log("hello"); // return 이후 식은 작동하지 않음

}

let area1 = getArea(10,20);
let area2 = getArea(30,20);
console.log(area1, area2);

// 호이스팅 (끌어올리기)
// 함수 선언문을 호출문보다 아래에 두어도 문제가 없는 이유