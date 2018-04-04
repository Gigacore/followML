import axios from "axios";

import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../constants/ActionTypes";

const data = "https://api.myjson.com/bins/yrljz";

export const getData = () => (dispatch) => {
  return axios.get(data)
  .then((response) => {
    dispatch({type: FETCH_DATA_FULFILLED, payload: response.data});
  })
  .catch((err) => {
    dispatch({type: FETCH_DATA_REJECTED, payload: err}); // Error handling
  });
};
