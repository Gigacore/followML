import React, { Component } from "react";
import PropTypes from "prop-types";

import GeneratedQA from "./GeneratedQA"
import InputArea from "./InputArea";

 class ConversationUI extends Component {

  render() {

    const { data } = this.props;

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
      />
    ]
  }
}

ConversationUI.propTypes = {
  count: PropTypes.number
};

export default ConversationUI;
