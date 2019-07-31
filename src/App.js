import React from 'react';

import Button from './components/Button';
import Result from './components/Result';

import './App.css';

class App extends React.Component {
  state = {
    input: "",
    operation: "",
    tempInput: "",
  };

  handleNumberClick = (number) => {
    const { operation, input, tempInput } = this.state;

    if (operation !== "" && input !== "" && tempInput === "") {
      this.setState(({ input }) => ({
        tempInput: input,
        input: "",
      }));
    }

    this.setState(({ input }) => ({
      input: input + number,
    }))
  };

  handleOperationButtonClick = (operation) => {
    this.setState({
      operation,
    });
  }

  handleClearButtonClick = () => {
    this.setState({
      input: "",
      tempInput: "",
      operation: "",
    });
  }

  handleCalculation = () => {
    const { input, tempInput, operation } = this.state;

    const inputInt = parseInt(input, 10);
    const tempInputInt = parseInt(tempInput, 10);

    let result = 0;

    switch(operation) {
      case '+':
        result =  tempInputInt + inputInt;
        break;

      case '-':
        result = tempInputInt - inputInt;
        break;

      case 'X':
        result = inputInt * tempInputInt;
        break;

      case '/':
        result = tempInputInt / inputInt
        break;

      default:
        result = input;
        break;
    }

    this.setState({
      input: result,
      tempInput: "",
      operation: "",
    });
  }

  render() {
    const { input } = this.state;

    return (
      <div className="container">
        <Result value={input || "0"} />
        <div>
          <Button onClick={() => this.handleOperationButtonClick('+')}>+</Button>
          <Button onClick={() => this.handleOperationButtonClick('-')}>-</Button>
          <Button onClick={() => this.handleOperationButtonClick('X')}>X</Button>
          <Button onClick={() => this.handleOperationButtonClick('/')}>/</Button>
        </div>
        <div>
          <Button onClick={() => this.handleNumberClick(7)}>7</Button>
          <Button onClick={() => this.handleNumberClick(8)}>8</Button>
          <Button onClick={() => this.handleNumberClick(9)}>9</Button>
        </div>
        <div>
          <Button onClick={() => this.handleNumberClick(4)}>4</Button>
          <Button onClick={() => this.handleNumberClick(5)}>5</Button>
          <Button onClick={() => this.handleNumberClick(6)}>6</Button>
        </div>
        <div>
          <Button onClick={() => this.handleNumberClick(1)}>1</Button>
          <Button onClick={() => this.handleNumberClick(2)}>2</Button>
          <Button onClick={() => this.handleNumberClick(3)}>3</Button>
        </div>
        <div>
          <Button onClick={() => this.handleNumberClick(0)}>0</Button>
          <Button onClick={() => this.handleNumberClick(",")}>,</Button>
          <Button onClick={this.handleClearButtonClick}>Clear</Button>
        </div>
        <div>
          <Button onClick={this.handleCalculation} style={{ width: '150px' }}>=</Button>
        </div>
      </div>
    );
  }
}

export default App;
