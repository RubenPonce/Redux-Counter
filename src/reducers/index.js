import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log(state, "state passed")
  console.log(action, 'action available in reducer')
  switch (action.type) {
    case INCREMENT:
    console.log(state,'current state in increment help')
      return {
        count: action.newCountValue + 1
      }
    // Fill in the body of this case
    case DECREMENT:
      return {
        count: action.newCountValue - 1 
      }
    // Fill in the body of this case
    default:
      return state;
  }
};
