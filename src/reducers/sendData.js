import { SEND_DATA } from "../constants/ActionTypes";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyAjL7in8zCPeMWmnxHgnTc22LUndK1HXyo',
  authDomain: 'questionanswers-9d5bf.firebaseapp.com',
  projectId: "questionanswers-9d5bf",
  storageBucket: "",
  messagingSenderId: "722781417922"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

export default function reducer(state = {}, action) {
  switch(action.type) {
    case SEND_DATA: {
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
