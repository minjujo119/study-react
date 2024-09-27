import "./Main.css"

const Main =()=> {

  const user = {
    name:"이정환",
    isLogin : true,
  };

  if(user.isLogin){
    return <button className="logout" type="button">Logout</button>
  } else{
    return <button type="button">Login</button>
  }

  // return(
  //   <>
  //     {user.isLogin
  //       ? <button>로그아웃</button>
  //       : <button>로그인</button>}
  //   </>
  // );
};

export default Main;
