import { useState } from 'react';
import OpenScreen from './OpenScreen'
import MainScreen from './MainScreen'

const ScreenSwitch = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(!isVisible)  
    }
    return (
    <div className='ScreenSwitch'>
        {isVisible ? <div> <OpenScreen/> 
            <button  onClick={handleClick}
              id="start" 
              style={{color: "green", 
                  borderWidth: "4px", 
                      borderColor: "green", 
                      position: "bottom"}}>
              Start
            </button> </div> : <MainScreen/>}
    </div>
    );
}
 
export default ScreenSwitch;
