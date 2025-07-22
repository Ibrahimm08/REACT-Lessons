import { useState } from "react";


const Greeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggleLogin = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
    };

    return (
        <div>
            <p>{isLoggedIn ? "You're logged in" : "It's time to log in"}</p>
            <button onClick={toggleLogin}>{isLoggedIn ? "Log Out": "Log In"}</button>
        </div>
    )
};

export default Greeting;