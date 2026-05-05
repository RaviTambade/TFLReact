import { useState,useEffect } from "react";
import Counter from "../Catalog/Components/Gallery/Counter";

function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

const EnviornmentConsole=()=>{

    const [temp,setTemp]=useState(25);
    const [humidity,setHumidity]=useState(100);
    const [luminosity, setluminosity]=useState(0);

 
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateTime = () => {
          setTime(new Date());
        };
        const intervalId = setInterval(updateTime, 1000);
    
        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array means this effect runs once on mount

      const timeString = time.toLocaleTimeString();
    

    const onIncreaseTemp=()=>{setTemp(temp+1);}
    const onDecreaseTemp=()=>{setTemp(temp-1);}
    const onIncreaseHumidity=()=>{setHumidity(humidity+1);}
    const onDecreaseHumidity=()=>{setHumidity(humidity-1);}

    return(
          <div>
            <h1>Greenhouse Enviornment Console</h1>
            <h2><u>Transflower Farms</u></h2>
            <br/>
            <lable>Greenhouse Name: Pathar</lable>
            <lable>Time : {timeString}</lable>
            <br/>
            <label>Temperature</label>
            <Counter key="1" likes={temp}  onCounterLike={() => onIncreaseTemp(1)}
                                     onCounterUnLike={() => onDecreaseTemp(1)} ></Counter>
            <label>Humidity</label>
            <Counter key="2" likes={humidity } onCounterLike={() => onIncreaseHumidity(1)}
                                     onCounterUnLike={() => onDecreaseHumidity(1)}></Counter>
          </div>
    );
}

export default EnviornmentConsole;