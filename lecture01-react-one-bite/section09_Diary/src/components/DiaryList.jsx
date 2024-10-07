import { useState, useRef, useEffect } from "react";
import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList =()=>{
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select name="" id="">
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새로운 일기 쓰기"} type={"POSITIVE"}/>
      </div>
      <div className="list_wrapper">
        <DiaryItem emotionID={1}/>
        <DiaryItem emotionID={2}/>
        <DiaryItem emotionID={3}/>
        <DiaryItem emotionID={4}/>
        <DiaryItem emotionID={5}/>
      </div>
    </div>
  )
};

export default DiaryList;