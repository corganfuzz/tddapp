import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 4,
    disabled: false,
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>

        {this.state.counter <= 0 ? (
          <h2 style={{ color: "#df0909" }}>the counter cannot go below 0</h2>
        ) : null}

        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.counter <= 0) {
              this.setState({ disabled: false });
            } else {
              this.setState({ counter: this.state.counter - 1 });
            }
          }}
          disabled={this.state.disabled}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}
export default App;
