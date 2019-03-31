import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./common/navbar/NavBar";
import HomeContainer from "../app/home/HomeContainer";

//import calculateScore from "piipbowling";

import "./App.css";

class App extends Component {
  render() {
    // let scoreArray1 = [10,10,10,10,10,10,10,10,10,1,9,4];
    // let score = calculateScore.calculateScore(scoreArray1);

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={HomeContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
