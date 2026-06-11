import { useState } from "react";

function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <>
            <h1>{isLoggedIn ? "Welcome Admin" : "Please Login"}</h1>
            <button onClick={handleLogin}>Toggle Login</button>
        </>
    )
}

export default LoginStatus