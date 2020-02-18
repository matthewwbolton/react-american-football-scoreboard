import React from "react";
import "./App.css";

function ToGo (props) {
  
    return (
        <>
       <button onClick = {() => props.toGo > 1 ? props.setToGo(props.toGo - 1) : props.setToGo(10) } className = 'homeButtons__touchdown'>Yards To Go Decrement</button>
       <button onClick = {() => props.setToGo(props.toGo + 1)} className = 'homeButtons__touchdown'>Yards To Go Increment</button>
       <button onClick = {() => props.setToGo(10) } className = 'homeButtons__touchdown'>Reset Yards</button>
       </>

  );
    
};

export default ToGo;