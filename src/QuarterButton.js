import React from "react";
import "./App.css";

function QuarterButton (props) {
  
    return (
       <button onClick = {() => props.quarterChange < 4 ? props.setQuarterChange(props.quarterChange + 1) : props.setQuarterChange(1)} className = 'homeButtons__touchdown'>Quarter Increment</button>

  );
    
};

export default QuarterButton;