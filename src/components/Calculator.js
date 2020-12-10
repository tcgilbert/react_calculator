import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operator: "+",
      input1: 0,
      input2: 0,
      result: null
    };
  }

  inputOneChange = (evt) => {
    // console.log("input one changed");
    let inputValue = evt.target.value;
    if (isNaN(inputValue) || inputValue === '') inputValue = 0;
    this.setState({
      input1: parseInt(inputValue)
    })
  };

  inputTwoChange = (evt) => {
    // console.log("input two changed");
    let inputValue = evt.target.value;
    if (isNaN(inputValue) || inputValue === '') inputValue = 0;
    this.setState({
      input2: parseInt(inputValue)
    })
  };

  selectOperator = (evt) => {
    let operator = evt.target.value;
    console.log(operator);
    this.setState({
      result: null,
      operator
    })
  }

  calculate = () => {
    // console.log("CALCULATTTINNGGGGGG!!!!!!!!!");
    let result;
    switch (this.state.operator) {
      case "+":
        result = this.state.input1 + this.state.input2;
        break;
      case "-":
        result = this.state.input1 - this.state.input2;
        break;
      case "*":
        result = this.state.input1 * this.state.input2;
        break;
      case "/":
        result = (this.state.input1 / this.state.input2).toFixed(2);
        break;
    }
    
    this.setState({
      result
    })
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>Calculator!</h1>

          <div className="calculator">
            <input
              value={this.state.input1}
              onChange={this.inputOneChange}
              type="text"
            />
            <span className="operator">{this.state.operator}</span>
            <input 
            value={this.state.input2}
            onChange={this.inputTwoChange} 
            type="text" 
            />
            <button onClick={this.calculate}>=</button>
            <h3>{this.state.result}</h3>
          </div>

          <div>
            <button value="+" onClick={this.selectOperator}>+</button>
            <button value="-" onClick={this.selectOperator}>-</button>
            <button value="*" onClick={this.selectOperator}>*</button>
            <button value="/" onClick={this.selectOperator}>/</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
