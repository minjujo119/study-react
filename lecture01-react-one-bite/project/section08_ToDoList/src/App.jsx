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
  
  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
    </div>
  )
}

export default App;
