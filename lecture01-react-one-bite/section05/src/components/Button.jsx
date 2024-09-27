const Button =({text, color, children})=>{

  // 이벤트 객체
  const onClickButton =(e)=>{
    console.log(e);
  }
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{color:color}}>
      {text},
      {color.toUpperCase()}
      {children}
    </button>
  )
};

// Props 값이 안들어올 때를 대비해 기본 Props값 설정하기
// 그런데 곧 이 기능 사라진다고 함...
Button.defaultProps = {
  color:"black",
}


export default Button;