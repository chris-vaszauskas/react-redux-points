import keyMirror from 'keyMirror';

export const Actions = keyMirror({
  POINTS_INCREMENT: null,
  POINTS_DECREMENT: null,
  POINTS_UPDATED: null,
});


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
