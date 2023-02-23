//import "./App.css"
import React, { useState } from "react";
import App from "../../App";

//known issues 
// 1. completed sets increases on 11 and not 10
function Repetition(props){
//setting the function for setCount 
let [count, setCount] = useState(0)
let [addSet, setAddSet] = useState(0)
let [repList, setRepList] = useState([])
//let [repLogCount, setRepLogCount] = useState(0)
let [total, setTotal] = useState("Total:")
let [main, setMain] = useState("")


//increases the counter by +1 on button click
function incrRep(){
    setCount(count + 1)  
    setAddSet(Math.floor(count / 10))
          
   // setAddSet((count % 10 === 0) ?  count / 10 : ""  )
    
}



// increases the counter by +10 on button click 
function incrSet(){
    setCount(count + 10)
    setAddSet(addSet + 1)
}

//reset function
function resetCount(){
    //resets count "reps" to zero
    setCount(count = 0)
    //resets sets to zero
    setAddSet(addSet = 0)
    //deletes the log of reps 
    setRepList(repList = [" "])
    //deletes the word "total" that wouldnt delete any other way i tried to write it
    setTotal(total = "")
}

function handleAddReps(){
    const newAdd = [...repList]
    newAdd.push(count)
    setRepList(newAdd)
}


//returning to main screen
if(main === 'main'){
    return (
        <div><App Home = {main}></App></div>
    )
}

return (
    <>
    <div className="App">
    <h1>{props.yourExercise}</h1>
    <p>Current Reps: {count}</p>
    <p>Completed Sets:{addSet}</p>
    <button onClick = {incrRep}>Add rep</button>
    <button onClick = {incrSet}>Add set +10</button>
    <button onClick = {resetCount} disabled = {count < 1}>reset</button>
    <button className='App' onClick= { () => {
        setMain("main") 
        }}>main</button>
        <br/>
    <button onClick={handleAddReps} disabled = {count < 1}>log Reps</button>
        <p>Rep Log</p>
            
        <li>
        {repList.map((count) => {
          return (
            <div>          
                <p>
                {total} {count}</p>                               
            </div>
          );
        })}
    </li> 
          
    </div> 
    
    </>
    
)
}

export default Repetition

