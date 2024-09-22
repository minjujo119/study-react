import './App.css'
import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

// 리렌더링 되지 않게 컴포넌트 외부에 생성
const mockData =[
  {
    id : 0,
    isDone : false,
    content : "장보기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "공부하기",
    date : new Date().getTime(),
  },
]


function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate =(content)=>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    };
    setTodos([newTodo, ...todos])
  }

  const onUpdate=(targetID)=>{
    // todos State의 값들 중에 targetID와 일치하는 ID를 갖는 todoItem의 isDone 변경
    setTodos(todos.map((todo)=>
      todo.id === targetID
      ? {...todo, isDone: !todo.isDone}
      : todo
    ))
  }

  // todos 배열에서 targetID와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  const onDelete=(targetID)=>{
    setTodos(todos.filter((todo)=>todo.id !== targetID))
  }
  
  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List onUpdate={onUpdate} onDelete={onDelete} todos={todos}/>
    </div>
  )
}

export default App;
