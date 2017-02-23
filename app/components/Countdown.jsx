import React, {PropTypes} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentWillRecieveProps() {

  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
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
    this.timer = setInterval(()=> {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0 && this.timer) {
        this.setState({
          countdownStatus: 'stopped'
        });
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

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    })
  }

  render() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={(status) => this.handleStatusChange(status)}/>
      } else {
        return <CountdownForm onSetCountdown={(sec) => this.handleSetCountdown(sec)}/>
      }

    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>);
  }
}

Countdown.propTypes = {
};
