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
    if (this.state.operator === null) {
      this.setState(prevState => ({
        currentResult: Number(value),
      }));
    } else {
      this.setState(prevState => ({
        currentResult: Number(`${prevState.currentResult}${value}`),
      }));
    }
  }

  doMath = ({ operator, currentResult = this.state.currentResult }) => {
    const { tempValue } = this.state;
    switch (operator) {
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

  onOperatorClick = (currentOperator) => {
    if (this.state.operator === null) {
      this.setState(prevState => ({
        currentResult: 0,
        operator: currentOperator,
        tempValue: prevState.currentResult,
      }));
    } else if (currentOperator === '=') {
      this.setState(prevState => ({
        currentResult: this.doMath({operator: prevState.operator, currentResult: prevState.currentResult }),
        operator: null,
        tempValue: 0,
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
