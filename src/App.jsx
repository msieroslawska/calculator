import React, { Component } from 'react';

import Digits from './components/digits';
import Operators from './components/operators';
import Reset from './components/reset';
import Result from './components/result';

const INITIAL_STATE = {
  currentResult: 0,
  operator: null,
  tempValue: 0,
};

class App extends Component {
  state = INITIAL_STATE;

  updateResult = (value) => {
    this.setState(prevState => ({
      currentResult: Number(`${prevState.currentResult}${value}`),
    }));
  }

  doMath = ({ operator, currentResult = this.state.currentResult }) => {
    const { tempValue } = this.state;
    switch (operator) {
      case null:
        return currentResult;
      case '+':
        return tempValue + currentResult;
      case '-':
        return tempValue - currentResult;
      case '/':
        return tempValue / currentResult;
      case '*':
        return tempValue * currentResult;
      default:
        break;
    }
  }

  removeLastDigit = () => {
    let currentResult = this.state.currentResult.toString();
    return Number(currentResult.substring(0, currentResult.length - 1))
  }

  onOperatorClick = (currentOperator) => {
    if (currentOperator === 'C' && this.state.currentResult > 9) {
      this.setState(prevState => ({
        currentResult: this.removeLastDigit(prevState.currentResult),
      }));
    } else if (currentOperator === 'C') {
      this.setState({
        currentResult: 0,
      });
    } else if (currentOperator === '=') {
      this.setState(prevState => ({
        currentResult: this.doMath({operator: prevState.operator, currentResult: prevState.currentResult }),
        operator: null,
        tempValue: 0,
      }));
    } else if (this.state.operator === null) {
      this.setState(prevState => ({
        currentResult: 0,
        operator: currentOperator,
        tempValue: prevState.currentResult,
      }));
    } else {
      this.setState(prevState => ({
        currentResult: 0,
        operator: currentOperator,
        tempValue: this.doMath({operator: prevState.operator }),
      }));
    }
  }


  resetState = () => {
    this.setState({...INITIAL_STATE});
  }

  render() {
    const { currentResult } = this.state;
    return (
      <div className="main-container">
        <Result value={currentResult} />

        <Digits onClick={this.updateResult} />
        <Operators onClick={this.onOperatorClick} />

        <Reset onClick={this.resetState} />
      </div>
    );
  }
}

export default App;
