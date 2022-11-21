import { useContext } from "react";
import { AuthContext } from "./AppContext";
import { Button } from "antd";
function LoginFrom() {
    const auth = useContext(AuthContext);

    if (!!auth) {
        return (
            <div>
                <h1 style={{fontSize:30,}}>Succeed</h1>
                <p>Auth username = {auth.username}</p>
                <p>Auth fullname = {auth.name}</p>
               
            </div>
        );
    }

    return (
        <form>
            <h1>Plase Singin</h1>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p><Button type="submit">Log in</Button></p>
        </form>
    );
}

export default LoginFrom;