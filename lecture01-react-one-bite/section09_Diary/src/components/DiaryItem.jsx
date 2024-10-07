import { useState, useRef, useEffect } from "react";
import "./DiaryItem.css"
import getEmotionImage from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem =({emotionID})=>{
  
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionID}`}>
        <img src={getEmotionImage(emotionID)} alt="" />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date().toLocaleDateString()}
        </div>
        <div className="content">
          일기 컨텐츠
        </div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"}/>
      </div>
    </div>
  )
};

export default DiaryItem;