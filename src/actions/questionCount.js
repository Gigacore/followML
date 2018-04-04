import { QUESTION_COUNT } from "../constants/ActionTypes";

export const countQuestions = (payload) => {
  return {
    type: QUESTION_COUNT,
    payload: "foobar"
  }
}
