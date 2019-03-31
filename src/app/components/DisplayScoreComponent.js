import React from "react";

// This component Displays the data for the score results. It checks that there is data
// then it maps the data and also reduce the array to work out total score.

const DisplayScoreComponent = props => {
  const getSum = (total, num) => {
    return total + num;
  };

  const DisplayResults = () => {
    return (
      <div>
        <div>
          {props.data.map((val, index) => (
            <div key={index}>
              Score at Frame {index + 1} is {val}
            </div>
          ))}
        </div>
        <hr />

        <div>
          <h3> Your Total Score is </h3>
          {props.data.reduce(getSum)}
        </div>
      </div>
    );
  };

  /* Ternary operator to check that there is score results before displaying the data using map and reduce functions */

  return <div>{props.data ? DisplayResults() : <div> </div>}</div>;
};

export default DisplayScoreComponent;
