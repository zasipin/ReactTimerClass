import React, {PropTypes} from 'react';

export default class Clock extends React.Component {
  formatSeconds(totalSeconds){
      // 61 -> 01:01
      var seconds = totalSeconds % 60,
          minutes = Math.floor(totalSeconds / 60);
      if (seconds < 10) {
         seconds = '0' + seconds;
      }
      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      return minutes + ':' + seconds;
  }

  render() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
   );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};
