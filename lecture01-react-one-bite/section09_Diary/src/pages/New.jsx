import { useState, useRef, useEffect } from "react";
// import "./New.css"
import Header from "../components/Header";
import Button from "../components/Button"
import Editor from "../components/Editor";

const New =()=>{
  return (
    <div className="New">
      <Header 
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={()=>{nav()}} />}
      />
      <Editor/>
    </div>
  )
};

export default New;