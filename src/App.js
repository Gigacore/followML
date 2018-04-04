import React, { Component } from "react";
import { connect } from "react-redux";

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
  }

  render() {

    const { data, status } = this.props.data;
    const { count } = this.props.count;

    return [
      <header>
        <img src="https://s3.amazonaws.com/follow-ml/follow-ML-alpha.png" alt="follow-ml-logo" />
        <h1>followML</h1>

        <div className="counter">
          {`Set: ${count}/5`}
        </div>
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
