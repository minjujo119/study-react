import { useState, useRef, useEffect, memo } from "react";
import "./Header.css"

const Header =()=>{
  return (
    <div className="Header">
      <h3>오늘은 🤔</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
};

// memo 내장함수로 컴포넌트 자체를 최적화하기
export default memo(Header);