import { useContext } from "react";
import { AuthContext } from "./AppReducer";
const fakeUser = { username: "pete@gmail.com", name: "น้องพีท" };

function LoginFromReducer() {
    const {authState,authDispatch} = useContext(AuthContext);

    function loginSubmit(event){
        event.preventDefault();
        authDispatch({type:'login', payload: fakeUser});
    }
    function logoutSubmit(){
        
        authDispatch({type:'logout'});
    }

    if (!!authState) {  
        return (
            <div>
                <h1 style={{fontSize:30,}}>Succeed</h1>
                <p> username = {authState.username}</p>
                <p> name = {authState.name}</p>
                <p><button type="submit" onClick={logoutSubmit}>Log out</button></p>
               
            </div>
        );
    }

    return (
        <form onSubmit={loginSubmit}>
            <h1>Plase Singin</h1>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p><button type="submit">Log in</button></p>
        </form>
    );
}

export default LoginFromReducer;