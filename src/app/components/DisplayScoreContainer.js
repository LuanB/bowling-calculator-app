import React, { Component } from "react";
import DisplayScoreComponent from "./DisplayScoreComponent";

// This is just a container to hold the display components.
// It allows for scaling the app. IE: add more presentitonal components like cards.
// I pass down the data to the Display Score Component va props.

export class DisplayScoreContainer extends Component {
  render() {
    console.log("display props", this.props);
    const { data } = this.props;
    return (
      <div>
        <div>
          <DisplayScoreComponent data={data} />
        </div>
      </div>
    );
  }
}
export default DisplayScoreContainer;
