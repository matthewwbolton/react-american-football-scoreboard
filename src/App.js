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
import DownChange from './DownChange';
import ToGo from "./ToGo";





function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarterChange, setQuarterChange] = useState(1);
  const [downChange, setDownChange] = useState(1);
  const [toGo, setToGo] = useState(10);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
        <HomeScore homeScore = {homeScore}  />
        <Timer /> 
        <AwayScore awayScore = {awayScore} />
        </div>
        <BottomRow downChange = {downChange} quarterChange = {quarterChange} toGo = {toGo}/>
      </section>
      <section className="buttons">
        <DownChange downChange = {downChange} setDownChange = {setDownChange} />
        <HomeButtons homeScore = {homeScore} setHomeScore = {setHomeScore}/>
        <AwayButtons awayScore = {awayScore} setAwayScore = {setAwayScore} />
        <QuarterButton quarterChange = {quarterChange} setQuarterChange = {setQuarterChange} />
        <ToGo toGo = {toGo} setToGo = {setToGo} />
      </section>
    </div>
  );
}

export default App;
