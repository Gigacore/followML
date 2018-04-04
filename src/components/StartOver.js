import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/fetchActions";
import { resetCount } from "../actions/questionCount";

@connect(store => {
  return {
    data: store.data,
    count: store.questionCount
  }
})
class StartOver extends Component {

  _startAgain = () => {
    this.props.dispatch(
      resetCount(1),
      getData()
    );
  }

  render() {

    const { data, status } = this.props.data;
    const { count } = this.props.count;

    return (
      <div className="start-over">
        <h2>Thanks for your participation!</h2>
        <h2>Would you like to contribute more?</h2>
          <div className="start-over-btn" onClick={() => {this._startAgain()}}>
            Start Over
          </div>
      </div>
    );
  }
}

export default StartOver;
