import React, {useState, useRef, useEffect} from "react"

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    //So when we mount our component and if isRunning changes 
    //we'll execute code
    useEffect(()=>{

    }, [isRunning]);

    function start(){

    }
    function stop(){

    }
    function reset(){

    }
    function formatTime(){

    }

    return(<div></div>)
}
export default Stopwatch