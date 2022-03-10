import React, { Component } from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
@import url("https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Lobster&family=Montserrat:wght@100&family=Playfair+Display&display=swap");
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
body{
  background: #2F4F4F;
}
`
const Title = styled.h1`
margin-bottom: 10px;
margin-left: 42px;
color: white;
font-size: 1em;
font-family: "Playfair Display", serif;
border-style: solid;
border-bottom-width: 0.2px;
border-top-width: 0;
border-right-width: 0;
border-left-width: 0;
width: 25vh;
display:flex;
align-items: center;
justify-content: center;
`
const Title3 = styled.h3`
color: white;
`
const Title2 = styled.h2`
color: white;
margin-bottom: 5px;
font-size: 1.3rem;
`
const Box = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
margin: 0 auto;
width: 256px;
text-align: center;
border: 10px solid black;
background: black;
border-radius: 5px;
`
const Contain = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-auto-rows: minmax(37px, auto);
`
const BoxInput = styled.input`
margin-bottom: 4px;
border-radius: 4px;
height: 30px;
text-align: center;
`
const IntroButton = styled.button`
margin: 4px;
border: none;
border-radius: 4px;
background: #2F4F4F;
color: white;

&:hover{
cursor: pointer;
background: rgb(75, 121, 122);
font-weight: solid;
font-size: 1.1rem;
}
`

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
      <div>
        <GlobalStyle/>
      <Box>
        <Title>Calculadora básica</Title>
        <BoxInput onChange={this.handleChange} type="text" value={this.state.n1} />
        <Title3>{this.state.sinal}</Title3>
        <BoxInput
          onChange={this.handleChangeTwo}
          type="text"
          value={this.state.n2}
        />
        <Title2>{this.state.result}</Title2>
        <Contain>
          <IntroButton onClick={this.c}>C</IntroButton>
          <IntroButton onClick={this.mult}>&times;</IntroButton>
          <IntroButton onClick={this.dividir}>&divide;</IntroButton>
          <IntroButton onClick={this.subtrair}>-</IntroButton>
          <IntroButton onClick={this.somar}>+</IntroButton>
        </Contain>
      </Box>
      </div>
    );
  }
}
export default Calc;
