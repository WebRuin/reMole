'use strict';

import React from 'react';
import MoleStore from 'stores//MoleStore';

require('styles//Scores.scss');


var ScoresComponent = React.createClass({
  getInitialState: function() {
    return {
      score: MoleStore.getScore(),
      timerMinutes: this.getMins(),
      timerSeconds: this.getSecs(),
      gameTime: MoleStore.getGameTime(),
      moleClicks: MoleStore.getMoleClickCount()
    };
  },

  handleTimer() {
    MoleStore.startClock()
  },

  getMins() {
    const minutes = this.score / 1000 / 60 << 0;

    return( minutes );
  },

  getSecs() {
    const seconds = (this.score / 1000) % 60;

    return( seconds );
  },

  render() {
    // if (this.state.timer.mins === 0) {
    //   let timer = 'Minute: ' + this.state.timer.mins;
    // } else {
    //   let timer = 'Minute: ' + this.state.timer.mins + ' Seconds: ' + this.state.timer.secs;
    // }
    return (
      <div className={this.props.className}>
        <section className='score-box'>
          <p>
            <span className='score'>Score</span>
            <span className='score-number'>{ this.state.score }</span>
          </p>

          <p>
            <span className='clicks'>Clicks</span>
            <span className='click-number'>{ this.state.moleClicks }</span>
          </p>

          <section className='timer'>
            <p>
              <span className='minutes'>Minutes</span>
              <span className='minutes-number'>{ this.state.Timerminutes }</span>
            </p>

            <p>
              <span className='seconds'>Seconds</span>
              <span className='seconds-number'>{ this.state.timerSeconds }</span>
            </p>
            <button className='startClock' onClick={this.handleTimer.bind(this)}>Start Clock</button>
          </section>

        </section>
      </div>
    );
  }
});

ScoresComponent.displayName = 'ScoresComponent';

// Uncomment properties you need
// ScoresComponent.propTypes = {};
// ScoresComponent.defaultProps = {};

export default ScoresComponent;
