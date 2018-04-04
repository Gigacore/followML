import { QUESTION_COUNT, RESET_COUNT } from "../constants/ActionTypes";

export const countQuestions = (payload) => {
  return {
    type: QUESTION_COUNT,
    payload: "foo"
  }
}

export const resetCount = (payload) => {
  return {
    type: RESET_COUNT,
    payload: 1
  }
}
