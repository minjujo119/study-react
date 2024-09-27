import useInput from "../hooks/useInput"

const HookExam =()=>{

  // 커스텀 훅 불러오기
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <>
      <input value={input} onChange={onChange}/>
      <input value={input2} onChange={onChange2} />
    </>
  );
}

export default HookExam; 