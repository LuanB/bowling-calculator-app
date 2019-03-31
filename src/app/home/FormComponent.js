import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import calculateScore from "piipbowling";
import DisplayScoreContainer from "../components/DisplayScoreContainer";

// This is the main component that takes the private npm module. Using state and input from user, the
// state is updated. When the user submits the form via button or enter, we call the npm function.
// The results are put into state and then sent to the child components for malipluation and display.

class FormComponent extends Component {
  state = {
    pins: "",
    bowlingResults: "",
    hasError: false
  };

  // let scoreArray1 = [10,10,10,10,10,10,10,10,10,1,9,4];
  // let score = calculateScore.calculateScore(scoreArray1);

  handleSubmitScoreChange = e => {
    this.setState({
      pins: e.target.value
    });
  };

  // Chatching errrors. When the npm package throws an errro then this component will catch this error
  // in the try catch block. It sets the error state to true so the other components can notify user.

  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit value is ", this.state.pins);
    const mystring = this.state.pins;
    const pinArray = mystring.split(",").map(Number);

    try {
      const result = calculateScore.calculateScore(pinArray);
      this.setState({
        bowlingResults: result
      });
    } catch (err) {
      console.log("thrown: ", err);
      this.setState({
        hasError: true
      });
    }
  };

  render() {
    console.log("bowlingResults state is ", this.state.bowlingResults);
    return (
      <div>
        {this.state.hasError ? (
          <div className="card-panel red">
            <h1>
              Your score data seems to be wrong. Please check your numbers again
            </h1>
          </div>
        ) : (
          <h3>Enter pins knocked down</h3>
        )}

        <hr />
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="pinsDown"> Pins Down: </label>
            <input
              className="ml-2"
              type="text"
              name="pinsDown"
              onChange={this.handleSubmitScoreChange}
            />

            <button
              className="waves-effect waves-light btn blue"
              onClick={this.handleSubmit}
            >
              Calculate My Score
            </button>
          </form>
        </div>
        <DisplayScoreContainer data={this.state.bowlingResults} />
      </div>
    );
  }
}

export default withRouter(FormComponent);
