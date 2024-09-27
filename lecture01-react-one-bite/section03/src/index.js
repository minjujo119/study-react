// common JS(CJS)시스템으로 모듈 불러오기
// const moduleData = require("./math");

// common JS(CJS)시스템에서 구조분해할당으로 모듈 불러오기
// const {add, sub} = require("./math");

// ES모듈시스템 사용하여 모듈 불러오기
// import {add, sub} from "./math.js"

// default 함수는 따로 불러와야함
// import multiply from "./math.js"

// 합쳐서 불러오기
import multiply, {add, sub} from "./math.js";

// 라이브러리 불러오기 (파일경로가 아니므로 확장자 안적어도 됨)
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(moduleData); // 3
// console.log(moduleData.add(1,2)); // 3
// console.log(add(1,2)); // 3
// console.log(sub(1,2)); // -1
// console.log(multiply(1,2)); // 2
// console.log("hi Node.js");
