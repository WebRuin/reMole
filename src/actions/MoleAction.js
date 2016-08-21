import dispatcher from '../dispatcher';

export function addMoles(mole) {
  dispatcher.dispatch({
    type: 'ADD_MOLES',
    mole
  });
}


export function resetScore() {
  dispatcher.dispatch({
    type: 'RESET_SCORE'
  });
}

export function resetTime() {
  dispatcher.dispatch({
    type: 'RESET_TIME'
  });
}

export function startClock() {
  dispatcher.dispatch({
    type: 'START_CLOCK'
  });
}

export function setMoleClickCount() {
  dispatcher.dispatch({
    type: 'INCREASE-MOLE-CLICK-COUNT'
  });
}
