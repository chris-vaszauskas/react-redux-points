import { Actions, createReducer } from './actions';

let reducer = createReducer({

  [Actions.POINTS_INCREMENT]: function(points) {
    return {
      ...points,
      count: points.count + 1,
      updating: true,
    };
  },

  [Actions.POINTS_DECREMENT]: function(points) {
    return {
      ...points,
      count: points.count - 1,
      updating: true,
    };
  },

  [Actions.POINTS_UPDATED]: function(points) {
    if (points.updating) {
      points = {
        ...points,
        updating: false,
      };
    }
    return points;
  },

});


export default reducer;
