import { useState, useRef, useEffect, memo, useContext } from "react";
import "./TodoItem.css"
import { TodoDispatchContext } from "../App";

const TodoItem =({id,isDone,content,date})=>{

  const {onUpdate, onDelete} = useContext(TodoDispatchContext)

  const onChangeCheckbox = ()=>{
    onUpdate(id)
  }

  const onClickDeleteButton=()=>{
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>Delete</button>
    </div>
  )
};


// 고차 컴포넌트 (Higer Order Component, HOC)
// memo와 같이 새로운 기능이 부여된 컴포넌트
// props가 계속 바뀌는 컴포넌트는 memo()에게 두번째 인수로서
// props가 바뀌었는지 판단해주는 콜백함수를 넘겨줘야 함
// export default memo(TodoItem, (prevProps, nextProps)=>{
//   // True -> Props가 바뀌지 않음 -> 리렌더링 X
//   // False ->Props가 바뀜 -> 리렌더링 O
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
