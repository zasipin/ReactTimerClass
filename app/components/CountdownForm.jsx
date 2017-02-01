import React from 'react';

export default class CountdownForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    var that = this;
    var f = function(){
       return that.onSubmit.apply(that, arguments);
    }
    // or see Countdow.jsx (e) => {this.onSubmit(e)}
    return (
      <div>
        <form onSubmit={f} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {
};
