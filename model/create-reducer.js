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
export default function createReducer(actions) {
  return function(state, action) {
    let type = action.type;
    if (actions.hasOwnProperty(type)) {
      return actions[type](state, action);
    }
    return state;
  };
}
