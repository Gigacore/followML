import { SEND_DATA } from "../constants/ActionTypes";
import * as firebase from 'firebase/app';

require("firebase/firestore");

export default function reducer(state = {}, action) {
  switch(action.type) {
    case SEND_DATA: {

      const db = firebase.firestore();

      db.collection("entry").add({
        answer: action.payload
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      })
    }
  }
  return state;
}
