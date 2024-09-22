import { useState, useRef, useEffect } from "react";
import "./TodoItem.css"

const TodoItem =({id,isDone,content,date,onUpdate,onDelete})=>{

  const onChangeCheckbox = ()=>{
    onUpdate(id)
  }

  const onClickDeleteButton=()=>{
    onDelete(id);
  }

  console.log('test')

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>Delete</button>
    </div>
  )
};

export default TodoItem;