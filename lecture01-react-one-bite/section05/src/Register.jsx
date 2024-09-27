// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState , useRef } from "react";

const Register = () => {

  // 반복되는 state 선언을 하나의 state 객체로 정리하기
  const [input, setInput] = useState({
    name :"",
    birth :"",
    country : "",
    bio : "",
  });

  // 레퍼런스 객체
  const countRef = useRef(0);
  const inputRef = useRef();
  console.log(inputRef.current)

  // 통합 이벤트 핸들러 만들기
  const onChange =(e)=>{
    countRef.current++;
    console.log(countRef.current)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit =(e)=>{
    if (input.name === ""){
      // 이름을 입력하는 DOM 요소에 포커스 주기
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <button
        
        >
          ref + 1
        </button>
      </div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          type="text"
          placeholder={"이름"} 
          onChange={onChange}
        />
      </div>
      <div>
        <input 
          name="birth"
          type="date" 
          onChange={onChange}
        />
        {input.birth}
      </div>
      <div>
        <select 
          name="country"
          value={input.country} 
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea 
          name="bio"
          value={input.bio} 
          id="" 
          onChange={onChange} 
        />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  )
};

export default Register;