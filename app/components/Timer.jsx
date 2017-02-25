import React, {PropTypes} from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    }
    this.timer = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleStatusChange(newStatus){
    this.setState({
      countdownStatus: newStatus
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0,
            countdownStatus: 'paused'
          })
          // break;
        case 'paused':
          if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
          }
          break;
        default:

      }
    }
  }

  startTimer(){
    this.timer = setInterval(()=>{
      var {count} = this.state;
      this.setState({
        count: ++count
      })
    }, 1000);
  }

  render() {
    var {count, countdownStatus} = this.state;

    return (<div>
          <h1 className="page-title">Timer</h1>
          <Clock totalSeconds={count}/>
          <Controls countdownStatus={countdownStatus} onStatusChange={(status) => this.handleStatusChange(status)}/>
    </div>);
  }
}

Timer.propTypes = {
};
