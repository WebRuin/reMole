'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class MoleStore extends EventEmitter {
  constructor() {
    super();
    this.state = {
      difficultyFactor: .25, // score to decriment per ms
      loopSpeed: 200,
      gameTime: 60000,
      moleClickCount: 0,
      numberOfMoles: 9,
      score: 0,
      successfulHits: 0
    };
  }

  addMoles(moles){
    this.setState({ numberOfMoles: this.state.numberOfMoles + moles });
  }

  getGameTime() {
    let gameTime = this.state.gameTime;
    return gameTime;
  }

  getMoleClickCount() {
    let moleClicks = this.state.moleClickCount;
    return moleClicks;
  }

  getNumberOfMoles() {
    let numberOfMoles = this.state.numberOfMoles;
    return numberOfMoles;
  }


  getMoleClickCount() {
    let moleClicks = this.state.moleClickCount;
    return moleClicks;
  }

  getScore() {
    var score = this.state.score;
    return score;
  }

  increaseMoleClickCount() {
    MoleStore.setState({ moleClickCount: this.state.moleClickCount + 3 });
    MoleStore.emit('change');
  }

  startClock() {
    while ( this.state.gameTime > 0 ) {
      this.state.gameTime = this.state.gameTime - 50;
      this.emit('change');
    }
  }

  handleActions(action) {
    switch(action.type) {
      case 'ADD_MOLES': {
        this.addMoles(action.moles);
        break;
      }
      case 'RESET_SCORE': {
        this.resetScore();
        break;
      }
      case 'RESET_TIME': {
        this.resetTime();
        break;
      }
      case 'START_CLOCK': {
        this.startClock();
        break;
      }
      case 'INCREASE-MOLE-CLICK-COUNT': {
        this.increaseMoleClickCount();
      }
    }
  }
}

const moleStore = new MoleStore
export default moleStore
dispatcher.register(moleStore.handleActions.bind(moleStore))
