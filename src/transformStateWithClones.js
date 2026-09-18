'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = [];
  let currentState = { ...state };

  for (const action of actions) {
    const curentState = { ...currentState };
    const { type, extraData, keysToRemove } = action;

    if (type === 'clear') {
      for (const key in curentState) {
        delete curentState[key];
      }
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete curentState[key];
      }
    }

    if (type === 'addProperties') {
      Object.assign(curentState, extraData);
    }
    stateHistory.push(curentState);
    currentState = curentState;
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
