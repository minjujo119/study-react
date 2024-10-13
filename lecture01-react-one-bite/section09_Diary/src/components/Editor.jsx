import { useState, useRef, useEffect } from "react";
import "./Editor.css"
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
  {
    emotionID : 1,
    emotionName : "완전 좋음"
  },
  {
    emotionID : 2,
    emotionName : "좋음"
  },
  {
    emotionID : 3,
    emotionName : "그럭저럭"
  },
  {
    emotionID : 4,
    emotionName : "나쁨"
  },
  {
    emotionID : 5,
    emotionName : "끔찍함"
  },
]

const Editor =()=>{
  const emotionID = 5;

  return (
    <div className="Editor">

      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_warpper">
          {emotionList.map((item)=>(
            <EmotionItem 
              key={item.emotionID} {...item} 
              isSelected={item.emotionID === emotionID}
            />
          ))}
        </div>
      </section>

      <section className="contetnt_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>

      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  )
};

export default Editor;