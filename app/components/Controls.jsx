import React from 'react';

export default class Controls extends React.Component {
  render(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        // render pause button
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        // render start button
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired

}
