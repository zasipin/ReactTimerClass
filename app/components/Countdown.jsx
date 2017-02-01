import React, {PropTypes} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
    });
  }

  render() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={(sec) => this.handleSetCountdown(sec)}/>
      </div>);
  }
}

Countdown.propTypes = {
};
