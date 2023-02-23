//import "./App.css"
import React, {  useEffect, useState } from "react";
import App from "../../App";

//there are 1000 milliseconds in a second
//getting called 100 times per second since it is in tenths of milliseconds 
const formatTime = (time) => {
    //turning millaseconds into seconds, divide by 6000, modulus by 60 returns whats left over by the seconds 
    let minutes = (Math.floor((time / (100*60)) % 60))

    let seconds = (Math.floor(time / 100 % 60))
    let mil = (time % 100)  
   
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    } 
    if(mil < 10){
        mil = `0${mil}`;
    }
    
    return `${minutes}:${seconds}.${mil}`
}


function Duration(props){ 
     let [curTime, setCurTime] = useState(0)
     let [running, setRunning] = useState(false)
     let [lapList, setLapList] = useState([" "])
     let [main, setMain] = useState("")
    useEffect(() => {
        if(running){
            const interval = setInterval(() => {
                setCurTime((curTime) => curTime +1);
            }, 10);
            return () => clearInterval(interval)
        }   
    }, [running]   
    
)

function resetTimer(){
    setCurTime(0)
    setRunning(false)
    setLapList(lapList = [" "])
    
 
}

function handleAddLap(){
    const newLaps = [...lapList]
    newLaps.push(formatTime(curTime))
    setLapList(newLaps)
    console.log(lapList)
}

//returning to main screen
if(main === 'main'){
    return (
        <div><App Home = {main}></App></div>
    )
}


/*
function tenMin(){
    setCurTime(60000)
}
function twentyMin(){
    setCurTime(120000)
}
function thirityMin(){
    setCurTime(180000)
}
*/

return (
<div className="App">
    <h1 style = {{fontFamily: "monospace"}}>{props.yourExercise}</h1>
    <p style={{fontSize: "large"}}>Timer</p>
    <p style={{fontFamily: "monospace", fontSize: "30px"}}>{formatTime(curTime)}</p>
    <button style={{color:"green"}} onClick = {() => setRunning(true)} disabled = {running}>Start</button>
    
    <button style={{color:"red"}}  onClick={() => setRunning(false)} disabled = {!running}>Stop</button>
    <br/>
    {/*
    <p>Set time</p>
  <button onClick = {() => setCurTime(60000)}>10:00</button>
  <button onClick = {() => setCurTime(120000)}>20:00</button>
  <button onClick = {() => setCurTime(180000)}>30:00</button>
  <br />
  */}
    <button onClick = {resetTimer} disabled ={curTime <1}>reset</button>
    <br/>
    <button className='App' onClick= { () => {
    setMain("main") 
    }}>main</button>
    <br/>
    <button onClick = {handleAddLap} disabled = {!running}>Lap</button>
    <li>
        {lapList.map((lap) => {
          return (
            <div>            
                {lap}                                 
            </div>
          );
        })}
    </li>
</div> 
    )
}

export default Duration

