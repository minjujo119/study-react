import { useState, useRef, useEffect, useContext } from "react";
import "./Editor.css"
import { TodoDispatchContext } from "../App";

const Editor =()=>{

  // 부모 컴포넌트에서 내보낸 Context를 불러와서 변수에 저장
  const {onCreate} = useContext(TodoDispatchContext)
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent =(e)=>{
    setContent(e.target.value)
  }

  const onKeyDown =(e)=>{
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  const onSubmit =()=>{
    // input에 아무것도 입력하지 않고 제출버튼 누르면 아무일도 일어나지 않게
    if(content === ""){
      contentRef.current.focus();
      return;    
    }
    onCreate(content);
    setContent("")
  }

  return (
    <div className="Editor">
      <input 
        ref={contentRef}
        value={content} 
        onChange={onChangeContent} 
        onKeyDown={onKeyDown}
        placeholder="새로운 To Do..." type="text" 
      />
      <button onClick={onSubmit}>추가</button> 
    </div>
  )
};

export default Editor;