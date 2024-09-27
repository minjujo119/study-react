// 비동기 작업 예시
// 비동기 함수 내 변수를 외부에서도 사용할 수 있는 예제
function add(a,b,callback) {
  setTimeout(()=>{
    const sum = a + b;
    callback(sum);
  },2000);
};
add(1,2, (value)=>{
  console.log(value);
});


// 비동기 함수 중첩 예시 (별로 좋은 예시는 아님)
function orderFood(callback) {
  setTimeout(()=>{
    const food = "떡볶이"
    callback(food);
  },2000);
};

function coolDownFood(food,callback) {
  setTimeout(()=>{
    const coolDowned = `식은 ${food}`;
    callback(coolDowned);
  },2000);
};

function freezeFood(food,callback) {
  setTimeout(()=>{
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  },2000)
}

orderFood((food)=>{
  console.log(food);
  coolDownFood(food, (coolDowned)=>{
    console.log(coolDowned);
    freezeFood(coolDowned, (freezedFood)=>{
      console.log(freezedFood);
    })
  });
});



