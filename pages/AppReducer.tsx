import React, { useReducer } from "react";
import LoginAreaReducer from "./LoginAreaReducer";

function reducer(state, action) {
  if (action.type === "login") {
   const {username,name} =  action.payload 
   return {username,name}
  }
  if (action.type === "logout") {
    return null;
  }
  return state;
}

const AuthContext = React.createContext();

function AppReducer() {
  const [authState, authDispatch] = useReducer(reducer, null);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <section className="app-section">
        <div className="app-container">
          <LoginAreaReducer />
        </div>
      </section>
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AppReducer;
