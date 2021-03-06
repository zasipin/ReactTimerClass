import React from 'react';

export default class Controls extends React.Component {
  onStatusChange(newStatus) {
    // return () => {
      this.props.onStatusChange(newStatus);
    // }
  }

  componentWillReceiveProps(nextProps) {
    console.log("Components will recieve props", nextProps.countdownStatus);
  }

  render(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        // render pause button
        return <button className="button secondary" onClick={(e) => this.onStatusChange('paused')}>Pause</button>
      } else {
        // render start button
        return <button className="button primary" onClick={(e) => this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={(e) => this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}
