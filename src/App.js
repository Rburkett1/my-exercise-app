import './App.css';
import Duration from './components/DurationExercise';
import { useState } from 'react';
import Repetition from './components/RepetitionExercise';
import WaterIntake from './components/WaterIntake';

export default function App() {
 let [exercise, setExercise] = useState("")

 switch(exercise) {
  case 'Running':
    return(
      <div><Duration yourExercise = {exercise}></Duration></div>
    );
  case 'Biking':
    return(
      <div><Duration yourExercise = {exercise}></Duration></div>
    );
  case 'pushups':
    return(
      <div><Repetition yourExercise = {exercise}></Repetition></div>
    );
  case 'situps':
    return(
      <div><Repetition yourExercise = {exercise}></Repetition></div>
    );
  case 'Jumping Jacks':
    return(
      <div><Repetition yourExercise = {exercise}></Repetition></div>
    );
    case 'Water Intake':
      return(
        <div><WaterIntake yourExercise = {exercise}></WaterIntake></div>
      );
  default:
    break;   
 }

  return (

    
    <div className="App">
      <h1>Exercises</h1>
      <ul>
        <li>
          <button className='App' onClick= { () => {
          setExercise("Running")
          console.log(exercise)      
          }}>
            running
          </button>
        </li>
        <li>
          <button className='App' onClick= { () => {
          setExercise("Biking")
          console.log(exercise)
          }}>
            Biking
          </button>
        </li>
        <li>
          <button className='App' onClick= { () => {
          setExercise("pushups")
          console.log(exercise)
          }}>
            pushups
          </button>
        </li>
        <li>
          <button className='App' onClick= { () => {
          setExercise("situps")
          console.log(exercise)
          }}>
            Situps
          </button>
        </li>
        <li>
          <button className='App' onClick= { () => {
          setExercise("Jumping Jacks")
          console.log(exercise)
          }}>
            Jumping Jacks
          </button>
        </li>
        <li>
          <h1>Health</h1>
          <button className='App' onClick= { () => {
          setExercise("Water Intake")
          console.log(exercise)
          }}>
            Water Intake
          </button>
        </li>
      </ul>
      
    </div>
  );
}


