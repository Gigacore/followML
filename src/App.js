import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from "./actions/fetchActions";

import ConversationUI from "./components/ConversationUI";

@connect(store => {
  return {
    data: store.data
  }
})
class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {

    const { data, status } = this.props.data;

    return [
      <header>
        <h1>followML</h1>
      </header>,
      <div className="wrapper">
        {
          data === null ? (
            <p>loading...</p>
          ) : (
            <ConversationUI data={data} />
          )
        }
      </div>
    ];
  }
}

export default App;
