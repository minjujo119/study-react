// math 모듈

export function add(a,b){
  return a+b;
}

export function sub(a,b){
  return a-b;
}

// export default: 모듈을 대표하는 기본 함수
export default function multiply(a,b){
  return a*b;
}

// CJS로 모듈로 내보내기
// module.exports = {
//   add : add, // 변수와 값이 같을 경우 값만 써도 됨
//   sub : sub,
// }

// ES 모듈시스템으로 모듈 내보내기
// export { add, sub }

// 혹은 function 앞에 export 붙여도 됨
// export function add(a,b){~~~}