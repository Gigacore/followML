import React, { Component } from "react";
import { connect } from "react-redux";

import * as firebase from 'firebase/app';

require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyAjL7in8zCPeMWmnxHgnTc22LUndK1HXyo',
  authDomain: 'questionanswers-9d5bf.firebaseapp.com',
  projectId: "questionanswers-9d5bf",
  storageBucket: "",
  messagingSenderId: "722781417922"
});

import { getData } from "./actions/fetchActions";

import ConversationUI from "./components/ConversationUI";
import StartOver from "./components/StartOver";
import SplashScreen from "./components/SplashScreen";

@connect(store => {
  return {
    data: store.data,
    count: store.questionCount
  }
})
class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());

    const genID = () => {
      let text = "";
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 2; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text.toUpperCase();
    }

    sessionStorage.setItem('sessionID', Date.now() + genID());
  }

  render() {

    const { data, status } = this.props.data;
    const { count } = this.props.count;

    return [
      <header>
        <img src="https://s3.amazonaws.com/follow-ml/follow-ML-alpha.png" alt="follow-ml-logo" />
        <h1>followML</h1>

        {count <= 5 ? (
          <div className="counter">
            {`Set: ${count}/5`}
          </div>
        ) : null}
      </header>,
      <div className="wrapper">
        {
          data === null ? (
            <div className="loader">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Vector_Loading_fallback.gif" />
            </div>
          ) : (
            <div className="main-ui">
              {count <= 5 ? (
                <ConversationUI
                  data={data}
                  count={count}
                />
                ) : <StartOver />
              }
            </div>
          )
        }
      </div>,
      <SplashScreen />
    ];
  }
}

export default App;
