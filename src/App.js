//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeScore from "./HomeScore";
import AwayScore from "./AwayScore";
import Timer from "./Timer.js";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";
import QuarterButton from "./QuarterButton";




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarterChange, setQuarterChange] = useState(1);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
        <HomeScore homeScore = {homeScore}  />
        <Timer /> 
        <AwayScore awayScore = {awayScore} />
        </div>
        <BottomRow quarterChange = {quarterChange}/>
      </section>
      <section className="buttons">
        <HomeButtons homeScore = {homeScore} setHomeScore = {setHomeScore}/>
        <AwayButtons awayScore = {awayScore} setAwayScore = {setAwayScore} />
        <QuarterButton quarterChange = {quarterChange} setQuarterChange = {setQuarterChange} />
      </section>
    </div>
  );
}

export default App;
