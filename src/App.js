import React, { Component } from 'react';

import Digits from './components/digits';
import Operators from './components/operators';
import Reset from './components/reset';
import Result from './components/result';
import Sum from './components/sum';

const OPERATORS = ['+', '-', '*', '/'];

class App extends Component {
  state = {
    latestValue: '',
    result: '',
  }

  isOperator = value => OPERATORS.includes(value)

  isAllowed = (value) => {
    const { latestValue, result } = this.state;
    if (result === '' && this.isOperator(value)) { // cannot start with op
      return false;
    }
    if (this.isOperator(latestValue) && this.isOperator(value)) { // cannot double ops
      return false;
    }
    return true;
  }

  updateResult = (value) => {
    if (this.isAllowed(value)) {
      this.setState(prevState => ({
        latestValue: value,
        result: `${prevState.result}${value}`,
      }));
    }
  }

  onSumUp = () => {
    const { result } = this.state;
    const parsedResult = this.isOperator(result[result.length - 1])
      ? result.substring(0, result.length - 1)
      : result;
    let tempNumber = '';
    let finalResult = parsedResult[0];
    const results = [];

    for (let i = 1; i <= parsedResult.length; i += 1) {
      const s = parsedResult.charAt(i);
      if (!this.isOperator(s)) {
        tempNumber += s; // combine as string
        console.log('x not op', tempNumber);
      } else {
        results.push([Number(tempNumber), s]);
        tempNumber = '';
        console.log('x is op', results);
      }
    }

    console.log(results);

    results.forEach(([number, operator]) => {
      switch (operator) {
        case '+':
          finalResult += number;
          break;
        case '-':
          finalResult -= number;
          break;
        case '*':
          finalResult *= number;
          break;
        case '/':
          finalResult /= number;
          break;
        default:
          //
      }
    });

    this.setState({
      latestValue: '',
      result: finalResult.toString(),
    });
  }

  resetState = () => {
    this.setState({
      latestValue: '',
      result: '',
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="main-container">
        <Result value={result} />

        <Digits onClick={this.updateResult} />
        <Operators onClick={this.updateResult} />
        <Sum onClick={this.onSumUp} />

        <Reset onClick={this.resetState} />
      </div>
    );
  }
}

export default App;
