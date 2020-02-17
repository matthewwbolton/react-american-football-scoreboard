import React from "react";
import "./App.css";



function HomeButtons (props) {

    return(
        <div className="homeButtons">
          <button onClick = {() => props.setHomeScore(props.homeScore + 6)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => props.setHomeScore(props.homeScore + 1)}>Home PAT</button>
          <button onClick = {() => props.setHomeScore(props.homeScore + 2)}>Home 2-Point Conversion</button>
          <button onClick = {() => props.setHomeScore(props.homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
    );
};

export default HomeButtons;