import React, { Component } from "react";
import TempInput from "./TempInput";

export default class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: "c",
      temperature: 0,
    };
  }

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  onCelsiusChange = (value) => {
    this.setState({ scale: "c", temperature: parseFloat(value) });
  };

  onFahrenheitChange = (value) => {
    this.setState({ scale: "f", temperature: parseFloat(value) });
  };

  render() {
    const celsius =
      this.state.scale == "f"
        ? this.toCelsius(this.state.temperature)
        : this.state.temperature;

    const fahrenheit =
      this.state.scale == "c"
        ? this.toFahrenheit(this.state.temperature)
        : this.state.temperature;

    return (
      <div className="container ">
        <h1>TEMPERATURE CONVERTER</h1>
        <TempInput
          scale={"c"}
          temperature={celsius}
          onTempChange={this.onCelsiusChange}
        />

        <TempInput
          scale={"f"}
          temperature={fahrenheit}
          onTempChange={this.onFahrenheitChange}
        />
      </div>
    );
  }
}
