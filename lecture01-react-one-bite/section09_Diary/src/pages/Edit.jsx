import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./Edit.css"

const Edit =()=>{
  const params = useParams();

  return (
    <div className="Edit">
      {params.id}번 일기 수정페이지입니다.
    </div>
  )
};

export default Edit;