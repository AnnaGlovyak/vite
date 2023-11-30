import React from "react";
import ViteLogo from "./assets/vitelogo.png";
import AppleLogo from "./assets/apple.svg?react";

const App = () => {
    return (
        <div> Hello World 
            <img src={ViteLogo} />
            <AppleLogo></AppleLogo>
        </div>
    )
}

export default App;