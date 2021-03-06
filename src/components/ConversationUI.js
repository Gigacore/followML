import React, { Component } from "react";
import PropTypes from "prop-types";

import GeneratedQA from "./GeneratedQA"
import InputArea from "./InputArea";

 class ConversationUI extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if(this.props.count <= 5) {
      window.onbeforeunload = function (e) {
        e = e || window.event;

        if (e) {
            e.returnValue = 'Sure?';
        }

        return 'Sure?';
      };
    }
  }

  render() {
    const { data, count } = this.props;

    const randomQuestion = Math.floor(Math.random() * Math.max(data.length));
    const question = data[randomQuestion].Q;
    const answer = data[randomQuestion].A;

    return [
      <GeneratedQA
        question={question}
        answer={answer}
      />,
      <InputArea
        question={question}
        answer={answer}
        count={count}
      />
    ]
  }
}

ConversationUI.propTypes = {
  count: PropTypes.number
};

export default ConversationUI;
