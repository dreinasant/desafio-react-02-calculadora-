import "./App.css";
import React, { Component } from "react";

class Calc extends Component {
  state = {
    n1: "",
    n2: "",
    result: "",
    sinal: ""
  };

  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChangeTwo = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  c = () => {
    const { n1, n2, result } = this.state;
    this.setState({
      n1: "",
      n2: "",
      result: "",
      sinal: ""
    });
  };

  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 * n2,
        sinal: "*"
      });
    }
  };

  dividir = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 / n2,
        sinal: "/"
      });
    }
  };

  subtrair = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 - n2,
        sinal: "-"
      });
    }
  };

  somar = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 + n2,
        sinal: "+"
      });
    }
  };

  render() {
    return (
      <div className="box">
        <h1>Calculadora básica</h1>
        <input onChange={this.handleChange} type="text" value={this.state.n1} />
        <h3>{this.state.sinal}</h3>
        <input
          onChange={this.handleChangeTwo}
          type="text"
          value={this.state.n2}
        />
        <h2>{this.state.result}</h2>
        <div className="contain">
          <button onClick={this.c}>C</button>
          <button onClick={this.mult}>&times;</button>
          <button onClick={this.dividir}>&divide;</button>
          <button onClick={this.subtrair}>-</button>
          <button onClick={this.somar}>+</button>
        </div>
      </div>
    );
  }
}
export default Calc;
