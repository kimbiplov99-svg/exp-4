import React, { Component, createRef } from "react";
import "./App.css";   

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>Profile Card</h2>
        {this.props.children}
      </div>
    );
  }
}
export default class App extends Component {

  constructor() {
    super();

    this.state = {
      text: ""
    };

    this.inputRef = createRef();
  }

  render() {
    return (
      <div className="p-10">

        <Card>
          <input
            className="input"
            placeholder="Controlled Input"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />

          <p>Typed: {this.state.text}</p>
          <input
            className="input"
            placeholder="Uncontrolled Input"
            ref={this.inputRef}
          />

          <button
            className="button"
            onClick={() => alert(this.inputRef.current.value)}
          >
            Show Value
          </button>

        </Card>

      </div>
    );
  }
}