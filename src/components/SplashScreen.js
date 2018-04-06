import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/fetchActions";

class SplashScreen extends Component {

  constructor(props) {
    super(props)
  };

  state = {
    splash: 'show',
    modal: 'hide',
    modalContent: ''
  }

  _handleClick = () => {
    this.setState({
      splash: 'hide'
    })
  }

  _showModal = () => {
    this.setState({
      modalContent: <iframe width="560" height="315" src="https://www.youtube.com/embed/KbHF7_kMaA8?autoplay=1?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>,
      modal: 'show'
    })
  }

  _hideModal = () => {
    this.setState({
      modal: 'hide',
      modalContent: ''
    })
  }

  render() {

    const { splash, modal, modalContent } = this.state;

    return (
      <div className={`splash-screen ${splash}`}>
        <div className="splash-content">
          <img src="https://s3.amazonaws.com/follow-ml/brain.png" />
          <h2>Machine Learning needs human help!</h2>
          <p>At <strong>Multimodal Perception Lab, IIITB</strong> we are striving to automate the interview process.<br /> An integral part of this is to gather <span>follow-up questions</span> to make the process more natural.<br /> We need your help to accumulate follow-up questions for the already answered behavioral questions in mock interviews.</p>
          <p>Assume you are the interviewer or a hiring manager and fill in two follow-up questions for each of the question-answer pairs.<br /> Your contributions are appreciated and will be further used for research purposes. <strong>Thanks!</strong></p>

          <div className="intro-video" onClick={() => {this._showModal()}}>
            WATCH A DEMO
          </div>

          <div className="start-now" onClick={() => {this._handleClick()}}>Start</div>

          <div className="publications">
          <h3><strong>Our Publications:</strong></h3>
          <ol>
            <li><span><a href="https://dl.acm.org/citation.cfm?id=3136755.3136756" target="_blank">Automatic Assessment of Communication Skill in Non-conventional Interview Settings: A Comparative Study. ICMI 2017 > </a></span></li>
            <li><span><a href="http://ieeexplore.ieee.org/abstract/document/8272588/" target="_blank">Online Peer-to-peer Discussions: A Platform for Automatic Assessment of Communication Skill. ACII Workshop 2017 > </a></span></li>
            <li><span><a href="https://dl.acm.org/citation.cfm?id=2993183" target="_blank">Asynchronous Video Interviews vs. Face-to-Face Interviews for Communication Skill Measurement: A Systematic Study. > </a></span></li>
          </ol>
          </div>
        </div>

        <div className={`video-modal ${modal}`} onClick={() => {this._hideModal()}}>
          <div className="video-container">
            {modalContent}
          </div>
        </div>
      </div>
    );
  }
}

export default SplashScreen;
