import React, { Component } from "react";
import { render } from "react-dom";
import { cities } from "./cities";
import CitiesList from "./components/CitiesList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: cities
    };
  }
  render() {
    return (
      <div>
        <h1>PropTypes</h1>
        <h3>Lets build some cities</h3>
        <CitiesList cities={this.state.cities} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
