import React from "react";
import "./App.css";

function DownChange (props) {
  
    return (
       <button onClick = {() => props.downChange < 4 ? props.setDownChange(props.downChange + 1) : props.setDownChange(1)} className = 'homeButtons__touchdown'>Down Increment</button>

  );
    
};

export default DownChange;