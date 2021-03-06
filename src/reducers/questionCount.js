import { QUESTION_COUNT, RESET_COUNT } from "../constants/ActionTypes";

export default function reducer(state = {
  count: 1
}, action) {
  switch(action.type) {
    case QUESTION_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
      break;
    case RESET_COUNT:
      return {
        ...state,
        count: 1
      }
  }

  return state;
}
