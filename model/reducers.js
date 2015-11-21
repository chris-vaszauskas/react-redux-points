import { Actions, createReducer } from './actions';
import reducePeople from './reducer-people';

let initialState = {
  people: [
    {
      id: 1,
      name: 'Chris Vaszauskas',
      points: {
        count: 100,
        updating: false,
      },
    },
    {
      id: 2,
      name: 'Garfield',
      points: {
        count: 50,
        updating: false,
      },
    },
    {
      id: 3,
      name: 'James the 1st',
      points: {
        count: 500,
        updating: false,
      },
    },
  ],
};


/**
 * Redux reducer for the actions related to points.
 */
function reduceStateFromPointsAction(state, action) {
  // Reduce the people array
  let people = reducePeople(state.people, action);
  if (people !== state.people) {
    // Since people is now different, we need to re-create the state object
    state = {
      ...state,
      people,
    };
  }
  return state;
}


// Create the root reducer and export it
let rootReducer = createReducer({
  // These three actions do the same thing from the perspective of this reducer
  [Actions.POINTS_INCREMENT]: reduceStateFromPointsAction,
  [Actions.POINTS_DECREMENT]: reduceStateFromPointsAction,
  [Actions.POINTS_UPDATED]: reduceStateFromPointsAction,
});

export default function(state = initialState, action) {
  return rootReducer(state, action);
}
