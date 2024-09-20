const Controller = ({onClickButton})=> {
  return (
    <div>
      <button onClick={()=>{onClickButton(-1)}} type="button">-1</button>
      <button onClick={()=>{onClickButton(-10)}} type="button">-10</button>
      <button onClick={()=>{onClickButton(-100)}} type="button">-100</button>
      <button onClick={()=>{onClickButton(100)}} type="button">+100</button>
      <button onClick={()=>{onClickButton(10)}} type="button">+10</button>
      <button onClick={()=>{onClickButton(1)}} type="button">+1</button>
    </div>
  )
};

export default Controller;