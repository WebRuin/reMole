'use strict';

import React from 'react';
import Mole from './Mole';
import MoleStore from 'stores//MoleStore';

require('styles//MoleBox.scss');

var MoleBox = React.createClass({
  getInitialState() {
    return{
      numberOfMoles: MoleStore.getNumberOfMoles(),
      moleArray: [],
      randomNumber: 0
    };
  },

  componentDidMount() {
    this.setState({ randomNumber: Math.floor(Math.random() * 9) + 1 })
  },

  getNewMole() {
    this.setState({ randomNumber: Math.floor(Math.random() * 9) + 1 })
  },

  render() {
    for (let i = 1; i <= (this.state.numberOfMoles); i++) {
      this.state.moleArray.push(i);
    }

    const drawMoles = this.state.moleArray.map(function(mole, n) {
      if (n === this.state.randomNumber) {
        return (
          <Mole
            key={n}
            number={n}
            className='moleUp'
            onClick={ this.getNewMole.bind(this) } />
        )
      } else {
        return (
          <Mole key={n} number={n} className='moleDown' />
        )
      }
    }).bind(this);

    return (
      <section className='molebox'>
        {drawMoles}
      </section>
    )
  }
});

MoleBox.displayName = 'MoleBox';

// Uncomment properties you need
// MoleBox.propTypes = {};
// MoleBox.defaultProps = {};

export default MoleBox;
