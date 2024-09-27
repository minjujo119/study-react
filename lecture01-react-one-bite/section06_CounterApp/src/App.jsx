import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller'
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  // 빈 deps 전달 > 탄생 직후 딱 한번만 실행됨
  useEffect(()=>{
    console.log('mount')
  }, []);

  // 2. 업데이트 : 변화 시 리렌더링
  // deps 생략 > 변화할 때마다 업데이트
  useEffect(()=>{
    if(!isMount.current){ // 마운트 됐는지 확인
      isMount.current = true;
      return;
    }
    console.log('update');
  })

  // 3. 언마운트 : 죽음


  const onClickButton =(value)=>{
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
