import './App.css'
import { useRef, useReducer, useCallback } from 'react';
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

// reducer 함수
function reducer(state, action){
  switch(action.type){
    case "CREATE" : 
      return [action.data, ...state];
    case "UPDATE" : 
      return state.map((item)=> 
        item.id === action.targetID
        ? {...item, isDone: !item.isDone}
        : item
      )
    case "DELETE" : 
      return state.filter((item)=>item.id !== action.targetID);
    default :
      return state;
  } 
}

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback을 사용하여 컴포넌트 내 함수들을 메모이제이션(최적화)하기
  const onCreate = useCallback((content)=>{
    dispatch({
      type : "CREATE",
      data : {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  },[])
  const onUpdate = useCallback((targetID)=>{
    dispatch({
      type: "UPDATE",
      targetID : targetID
    })
  },[])
  
  // useCallback 사용 전 원래 함수
  // todos 배열에서 targetID와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  // const onDelete=(targetID)=>{
  //   dispatch({
  //     type : "DELETE",
  //     targetID : targetID
  //   })
  // }

  const onDelete = useCallback((targetID)=>{
    dispatch({
      type : "DELETE",
      targetID : targetID
    })
  },[])


  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List onUpdate={onUpdate} onDelete={onDelete} todos={todos}/>
    </div>
  )
}

export default App;
