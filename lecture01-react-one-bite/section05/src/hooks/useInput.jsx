import {useState} from "react";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트나 커스텀 훅 내부에서만 호출 가능
// 2. hook은 조건문, 반복문 내에서는 호출될 수 없다.
// 3. 나만의 커스텀 hook을 만들 수 있다.


// 커스텀 훅 만들기 (함수명 앞에 use-붙이면 됨)
function useInput(){
  const [input, setInput] = useState("");
  const onChange =(e)=>{
    setInput(e.target.value);
  }
  return [input, onChange];
};

export default useInput;

