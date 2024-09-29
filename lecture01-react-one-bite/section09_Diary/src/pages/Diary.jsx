import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";


// import "./Diary.css"

const Diary =()=>{

  const params = useParams();
  console.log(params.id)

  return (
    <div className="Diary">
      Diary
    </div>
  )
};

export default Diary;