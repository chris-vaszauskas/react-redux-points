import keyMirror from 'keyMirror';

export const Actions = keyMirror({
  POINTS_INCREMENT: null,
  POINTS_DECREMENT: null,
  POINTS_UPDATED: null,
});

/**
 * Creates a reducer function from a collection of responses to actions.
 *
 * @example  see the reducer-points.js file for an example, then search reducers.js for
 *           reducePoints for example usage after calling createReducer().
 *
 * @param  {Object} actions  Object whose keys are actions (from the Actions above) and whose
 *                           values are reducer functions - functions with the signature
 *                           (state, action) => state.
 *
 * @return {Function} reducer function
 */
export function createReducer(actions) {
  return function(state, action) {
    let type = action.type;
    if (actions.hasOwnProperty(type)) {
      return actions[type](state, action);
    }
    return state;
  };
}


/**
 * Dispatches an AJAX call to increment the point count on the given person.
 *
 * @param  store   Redux store that should process this action
 * @param  person  person to update
 */
export function incrementPoints(store, person) {
  let id = person.id;
  store.dispatch({
    type: Actions.POINTS_INCREMENT,
    id: id,
  });

  // Simulate some asynchronous delay...
  setTimeout(function() {
    store.dispatch({
      type: Actions.POINTS_UPDATED,
      id: id,
    });
  }, 1000);
}


/**
 * Dispatches an AJAX call to decrement the point count on the given person.
 *
 * @param  store   Redux store that should process this action
 * @param  person  person to update
 */
export function decrementPoints(store, person) {
  let id = person.id;
  store.dispatch({
    type: Actions.POINTS_DECREMENT,
    id: id,
  });

  // Simulate some asynchronous delay...
  setTimeout(function() {
    store.dispatch({
      type: Actions.POINTS_UPDATED,
      id: id,
    });
  }, 1000);
}
