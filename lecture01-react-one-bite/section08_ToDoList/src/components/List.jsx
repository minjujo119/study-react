import { useState, useMemo, useContext, useRef, useEffect } from "react";
import "./List.css"
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List =()=>{

  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch =(e)=>{
    setSearch(e.target.value);
  }

  // 검색 기능
  const getFilteredData =()=>{
    if(search === ""){
      return todos;
    }
    return todos.filter((todo)=> 
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  }
  const filteredTodos = getFilteredData();

  // 함수를 useMemo로 기억하게 함
  // List 컴포넌트가 리렌더링될 때마다 연산되지 않게 함
  // [todos] deps가 변화할때만 연산됨
  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  },[todos]);

  // const getAnaylzedData =()=>{
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo)=>todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount
  //   }
  // }
  // const {totalCount, doneCount, notDoneCount} = getAnaylzedData();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
        type="text"
      />
      <div className="todo_wrapper">
        {filteredTodos.map((todo)=>{
          return (
            <TodoItem 
              key={todo.id} 
              {...todo} 
            />
          )
        })}
      </div>
    </div>
  )
};

export default List;