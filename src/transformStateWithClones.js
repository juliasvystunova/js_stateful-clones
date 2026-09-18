'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }
  }
}

module.exports = transformStateWithClones;
