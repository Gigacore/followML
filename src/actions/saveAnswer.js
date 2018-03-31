import { SEND_DATA } from "../constants/ActionTypes";

export const saveAnswer = (payload) => {
  return {
    type: SEND_DATA,
    payload: payload
  }
}
