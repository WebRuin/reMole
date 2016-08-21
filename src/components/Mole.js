'use strict';

import React from 'react';
import MoleStore from 'stores//MoleStore';

require('styles//Moles.scss');

var Mole = React.createClass({
  render () {
    let moleStatus = <img src='../images/moleUp.svg' className='moleUp' alt='mole up'/>
    return (
      <button className={'moles mole-' + this.props.umber} onClick={MoleStore.increaseMoleClickCount.bind(this)}>
        { moleStatus }
      </button>
    )
  }
});

Mole.displayName = 'Mole';

// Uncomment properties you need
// MolesComponent.propTypes = {};
// MolesComponent.defaultProps = {};
export default Mole;
