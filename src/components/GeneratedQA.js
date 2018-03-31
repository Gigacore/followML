import React, { Component } from "react";
import PropTypes from "prop-types";

class GeneratedQA extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    showQuestion: false,
    showAnswer: false
  }

  componentWillReceiveProps() {
    this.setState({
      showQuestion: false,
      showAnswer: false
    })

    setTimeout(() => {
      this.setState({
        showQuestion: true
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        showAnswer: true
      })
    }, 2300);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showQuestion: true
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        showAnswer: true
      })
    }, 2300);
  }

  render() {

    const { question, answer } = this.props;
    const { showQuestion, showAnswer } = this.state;

    return (
      <div className="message-area">
        <div className={`question-block ${showQuestion ? 'show' : 'hide'}`}>
          <div className="provided-question">
            {question}
          </div>
        </div>
        <div className={`answer-block ${showAnswer ? 'show' : 'hide'}`}>
          <div className="provided-answer">
            {answer}
          </div>
        </div>
      </div>
    )
  }
}

GeneratedQA.propTypes = {
  count: PropTypes.number
};

export default GeneratedQA;
