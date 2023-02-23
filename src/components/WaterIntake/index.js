//import "./App.css"
import React, { useState } from "react";
import App from "../../App";


function WaterIntake(props){

let [water, setWater] = useState(0)
let [main, setMain] = useState("")
let [waterList, setWaterList] = useState([])


//increases the water intake by amount on button click
function incrWaterTwentyfour(){   
    if(water > 80){
        alert("your not aquaman bro")
    }else{
        setWater(water + 24)
    }
}
function incrWaterTwelve(){    
    if(water > 80){
        alert("your not aquaman bro")
    }else{
        setWater(water + 12)
    }
}
//Decreases the water by amount on button click
function decrWaterTwelve(){
    setWater(water - 12) 
}
function decrWaterEight(){
    setWater(water - 8)
}
function decrWaterFour(){
    setWater(water - 4)
}
function decrWaterTwo(){
    setWater(water - 2)
}
//resets water intake back to zero 
function resetWater(){
    setWater(water = 0)  
    setWaterList(waterList = [""])
    

}

function handleAddWater(){
    const newAdd = [...waterList]
    newAdd.push(water)
    setWaterList(newAdd)

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
    <p>Todays Goal: </p>
    <p style={{fontFamily: "monospace", fontSize: "30px"}}>{water}oz left</p>
    <p>Add Water</p>
    <button onClick = {incrWaterTwelve}>Add 12oz</button>
    <button onClick = {incrWaterTwentyfour}>Add 24oz</button>
    <br />
    <p>Subtract Water</p>
    {/* Makes the individual buttons disabled if the water amount is less then subtracting the 
        amount on the button press */}
        
    <button onClick = {decrWaterTwo} disabled = {water < 2}>Sub 2oz</button>
    <button onClick = {decrWaterFour} disabled = {water < 4}>Sub 4oz</button>
    <button onClick = {decrWaterEight} disabled = {water < 8}>Sub 8oz</button>
    <button onClick = {decrWaterTwelve} disabled = {water < 12}>Sub 12oz</button>
    <br />
    <button onClick = {resetWater} disabled = {water < 1 }>reset</button>
    <br />
    <button className='App' onClick= { () => {
        setMain("main") 
        }}>main</button>
         <button onClick={handleAddWater} disabled = {water < 1}>log water</button>
        <li>
        {waterList.map((water) => {
          return (
            <div>          
                <p> {water}</p>                               
            </div>
          );
        })}
    </li>
    </div> 
    </>
    
)
}

export default WaterIntake

