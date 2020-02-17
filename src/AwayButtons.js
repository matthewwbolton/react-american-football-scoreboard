import React from "react";
import "./App.css";

function AwayButtons (props) {
    
    return (
        <div className="awayButtons">
          <button onClick = {() => props.setAwayScore(props.awayScore + 6)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => props.setAwayScore(props.awayScore + 1)}>Away PAT</button>
          <button onClick = {() => props.setHomeScore(props.homeScore + 2)}>Home 2-Point Conversion</button>
          <button onClick = {() => props.setAwayScore(props.awayScore + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
    );
};

export default AwayButtons;