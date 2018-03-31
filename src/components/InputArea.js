import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { saveAnswer } from "../actions/saveAnswer";
import { getData } from "../actions/fetchActions";

@connect(store => {})
class InputArea extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    isDisabled: true
  }

  _onkeyPressOne = e => {
    if(this.__firstAnswer.value.length >= 4) {

      this.setState({
        isDisabled: false
      });

      e.key === "Enter" ? (
        this.__secondAnswer.focus()
      ) : null;
    }
  }

  _onkeyPressTwo = e => {
    e.key === "Enter" ? (
      this.__secondAnswer.focus()
    ) : null;

    e.key === "Enter" ? (
      this._saveAnswer()
    ) : null;
  }

  _saveAnswer = () => {
    const { question, answer } = this.props;
    const followUp1 = this.__firstAnswer.value;
    const followUp2 = this.__secondAnswer.value;

    const entryOne = {
      question,
      answer,
      followUp1
    }

    const entryTwo = {
      question,
      answer,
      followUp2
    }

    followUp1.length > 4 ? this.props.dispatch(saveAnswer(entryOne)) : null;
    followUp2.length > 4 ? this.props.dispatch(saveAnswer(entryTwo)) : null;
    this.__firstAnswer.value = "";
    this.__secondAnswer.value = "";
    this.props.dispatch(getData());
  }

  render() {

    const { data } = this.props;
    const { isDisabled } = this.state;

    return (
      <div className="follow-up-input">
        <h3>Submit your follow-up question(s):</h3>
        <div className="inputs">
          <fieldset>
            <div className="input-area">
              <div className="input-number">
                1
              </div>
              <input
                type="textarea"
                onKeyPress={this._onkeyPressOne}
                ref={input => this.__firstAnswer = input}
                placeholder="Enter your follow-up question. Minimum 4 words."
                autoFocus
                min={4}
              />
            </div>
            <div className="input-area">
              <div className="input-number">
                2
              </div>
              <input
                type="textarea"
                onKeyPress={this._onkeyPressTwo}
                ref={input => this.__secondAnswer = input}
                placeholder="Enter your follow-up question. Minimum 2 words."
                min={4}
              />
          </div>
          </fieldset>
          <input
            disabled={isDisabled}
            className={`submit-btn ${isDisabled ? 'disabled' : 'enabled'}`}
            type="button"
            value="submit"
            onClick={() => {this._saveAnswer()}}
          />
        </div>
      </div>
    )
  }
}

InputArea.propTypes = {
  count: PropTypes.number
};

export default InputArea;