import './App.css'
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';
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

// 컨텍스트 개체는 컴포넌트 외부에 생성
// prop을 손자에게 다이렉트로 전달 가능
// 다른 파일에 있는 컴포넌트에서 사용해야하기 때문에 export로 내보내기
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


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

  const onDelete = useCallback((targetID)=>{
    dispatch({
      type : "DELETE",
      targetID : targeID
    })
  },[])

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  },[])

  return (
    <div className='App'>
      <Header />
      {/* todos는 전체 컴포넌트에 전달해야하고, props가 가변적임 */}
      <TodoStateContext.Provider value={todos}>
        {/* onCreate, onUpdate, onDelete함수는 마운트 이후 리렌더링이 되지 않도록 memoization 함 */}
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider> 
    </div>
  )
}

export default App;
