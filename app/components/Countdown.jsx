import React, {PropTypes} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        // case:
        default:

      }
    }
  }

  startTimer(){
    this.timer = setInterval(()=> {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
