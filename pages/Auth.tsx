import React, { useState } from "react";
import { Button } from "antd";
interface IState {
  isLogin: boolean;
}
const AuthUser: React.FC = () => {
  const [state, setState] = useState<IState>({
    isLogin: false,
  });
  // login function 
  const handleLogin = ():void=>{
      setState({isLogin:true})
  };
  const handleLogout = ():void=>{
    setState({isLogin:false})
};
  return (
    <>
      <div>
        <div>
          {state.isLogin && state.isLogin ? (
            <p> 🤩 Welcom Users  🤩 </p>
          ) : (
            <p> 🌟 Plese Login  🌟</p>
          )}
          {state.isLogin && state.isLogin ? (
            <Button onClick={handleLogout} type="primary" danger > Logout </Button>
          ) : (
            <Button onClick={handleLogin}  type="primary"> Login</Button>
          )}
        </div>
      </div>
    </>
  );
};
export default AuthUser;
