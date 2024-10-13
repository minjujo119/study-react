import { useState, useRef, useEffect } from "react";
import "./EmotionItem.css"
import getEmotionImage from "../util/get-emotion-image";

const EmotionItem =({emotionID, emotionName, isSelected})=>{
  return (
    <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionID}`: ""}`}>
      <img className="emotion_img" src={getEmotionImage(emotionID)} alt="" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
};

export default EmotionItem;