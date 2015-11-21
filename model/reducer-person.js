import { Actions, createReducer } from './actions';
import reducePoints from './reducer-points';

function reducePersonFromPointsAction(person, action) {
  let points = reducePoints(person.points, action);
  if (points !== person.points) {
    person = {
      ...person,
      points,
    };
  }
  return person;
}

export default createReducer({
  // These three actions do the same thing from the perspective of this reducer
  [Actions.POINTS_INCREMENT]: reducePersonFromPointsAction,
  [Actions.POINTS_DECREMENT]: reducePersonFromPointsAction,
  [Actions.POINTS_UPDATED]: reducePersonFromPointsAction,
});
