// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html

import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../constants/ActionTypes";

export default function reducer(state = {
  data: null,
  status: null
}, action) {
  switch (action.type) {
  case FETCH_DATA_FULFILLED:
    return {
      ...state,
      data: action.payload,
      status: "success"
    }
    break;
  case FETCH_DATA_REJECTED:
    alert("Something went wrong. Please check your network.")
    return state;
    break;
  }

  return state;
}
