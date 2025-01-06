import React, { useState } from "react";
import Title from "./Title";
const OpenScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(!isVisible)  
        if (isVisible) {
            document.getElementById('start').style.visibility = 'hidden';
            document.getElementById('mainScreen').style.visibility = 'visible';
        }  else{
            document.getElementById('start').style.visibility = 'visible';
        }
    }
    return (
    <div className="OpenScreen">
            {isVisible ? <Title/> : null}
            <button onClick={handleClick}
                    id="start" 
                    style={{color: "green", 
                        borderWidth: "4px", 
                        borderColor: "green", 
                        position: "bottom"}}>
                Start
            </button>
    </div>
    );
}
 
export default OpenScreen;