// 1. 대입 연산자(=)
let var1 = 1;

// 2. 산술 연산자(+,-,/,*,%)
let num1 = 1 + 2;
let num2 = 1 - 2;
let num3 = 1 * 2;
let num4 = 1 / 2;
let num5 = 1 % 2; // 모듈러 연산 (나머지 연산)
let num6_1 = 1 + 2 * 10; //21
let num6_2 = (1 + 2) * 10; //30
// console.log(num6_2);

// 3. 복합 대입 연산자 (산술+대입)
let num7 = 10;
num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 /= 20;
num7 *= 20;
num7 %= 20;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
++num8; // 전위연산
num8++; // 후위연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 자료형까지 비교하기 위해 === 사용
let comp2 = 1 !== 2;
let comp3 = 2 > 1;
let comp4 = 2 < 1;
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

console.log(comp1, comp2, comp3, comp4, comp5, comp6);

