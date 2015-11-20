import { Actions, createReducer } from './actions';
import reducePerson from './reducer-person';

let reducePeopleFromPointsAction = function(people, action) {
  // Search for the person in the people array
  let id = action.id;
  let index = people.findIndex(p => p.id === id);
  if (index !== -1) {
    // The person was found in the people array. Now, reduce the person.
    let person = reducePerson(people[index], action);
    if (person !== people[index]) {
      // If the person object has changed, we need to create a new array with the new object
      // instead of the old object.
      people = people.slice();  // shallow copy
      people[index] = person;
    }
  }
  return people;
};

export default createReducer({
  // These three actions do the same thing from the perspective of this reducer
  [Actions.POINTS_INCREMENT]: reducePeopleFromPointsAction,
  [Actions.POINTS_DECREMENT]: reducePeopleFromPointsAction,
  [Actions.POINTS_UPDATED]: reducePeopleFromPointsAction,
});
