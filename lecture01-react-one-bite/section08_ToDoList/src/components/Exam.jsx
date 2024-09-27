import { useReducer, useState, useRef, useEffect } from "react";

// reducer : 변환기
// 실제로 상태를 변화시키는 역할의 함수
// function reducer(state, action){
//   switch (action.type) {
//     case "INCREASE" : return state + action.data;
//     case "DECREASE" : return state - action.data;
//     default : return state;
//   }
// }

// const Exam =()=>{ 

//   // dispatch : 발송, 급송하다
//   // 상태 변화가 일어나야한다는 사실을 발송하는 함수
//   const [state, dispatch] = useReducer(reducer, 0);

//   const onClickPlus =()=>{
//     // dispatch 함수에 전달할 인수는 객체형태 => 액션 객체
//     dispatch({
//       type : "INCREASE",
//       data : 1
//     });
//   }
//   const onClickMinus =()=>{
//     // dispatch 함수에 전달할 인수는 객체형태 => 액션 객체
//     dispatch({
//       type : "DECREASE",
//       data : 1
//     });
//   }
//   return (
//     <div className="Exam">
//       <h1>{state}</h1>
//       <button onClick={onClickPlus}>+</button>
//       <button onClick={onClickMinus}>-</button>
//     </div>
//   )
// };

// export default Exam; 