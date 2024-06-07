// import { useState } from "react";

// import React from "react"
// import { useState } from "react"

// const Stopwatch=()=>{
//     const [hours, setHours]=useState(0);
//     const [minutes, setMinutes]=useState(0);
//     const [seconds, setSeconds]=useState(0);
//     function Seconds(){
//         setInterval(() => {
//             setSeconds((seconds) =>seconds+1)
//           },1000)
//         }
//     return(
//         <>
//           <div>{hours}:{minutes}:{seconds}</div>
//           <button onClick={Seconds}>Start</button>  
//           <button>Stop</button>
//           <button>Clear</button>
//         </>


//     )
//     }
// export default Stopwatch;


// 

import { useState } from 'react';

function Stopwatch() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = window.setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 10);
      }, 10);
      setIntervalId(id);
    }
  };
 
  const stop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

 
  const reset = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    setTimeElapsed(0);
    setIsRunning(false);
  };


  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0') +
      ':' +
      String(milliseconds).padStart(2, '0')
    );
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(timeElapsed)}</p>
      <button onClick={start}>
        Start
      </button>
      <button onClick={stop} >
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;




