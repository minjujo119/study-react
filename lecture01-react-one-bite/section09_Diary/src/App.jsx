import './App.css'
import { useReducer, useRef, createContext } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import NotFound from './pages/Notfound'

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-10-07").getTime(),
    emotionID: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date("2024-10-06").getTime(),
    emotionID: 2,
    content: "2번 일기 내용"
  },
  {
    id: 3,
    createdDate: new Date("2024-09-17").getTime(),
    emotionID: 5,
    content: "3번 일기 내용"
  },
  
]

function reducer(state, action) {
  switch(action.type){
    case 'CREATE': return [...state, action.data];
    case 'UPDATE': return (
      state.map((item)=>
      String(item.id) === String(action.data.id)
      ? action.data 
      : item
    ));
    case 'DELETE': return (
      state.filter((item)=>
        String(item.id) !== String(action.data)
      )
    )
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 일기 추가
  const onCreate =(createdDate,emotionID,content)=>{
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionID,
        content,
      }
    })
  }
  const onUpdate=(id,createdDate,emotionID,content)=>{
    dispatch({
      type: "UPDATE",
      data: {id,createdDate,emotionID,content}
    })
  }
  const onDelete=(id)=>{
    dispatch({
      type: "DELETE",
      data: id
    })
  }

  return (
    <>      
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/diary/:id" element={<Diary/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
