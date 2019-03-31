import React, { Component } from "react";

import FormComponent from "./FormComponent";

// This is just a Home container to hold the components of the app.
// It holds the Form Component that does the main function of this app.
// Doing it this way will allow me to expand the app and add more components.

export class HomeContainer extends Component {
  render() {
    return (
      <div>
        <hr />
        <FormComponent />
      </div>
    );
  }
}
export default HomeContainer;
