import React, { Component } from "react";
import Typing from "react-typing-animation";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Typing>
          <span>This line will stay.</span>
          <span>This line will get instantly removed after a 500 ms delay</span>
          <Typing.Reset count={1} delay={500} />
        </Typing>
      </div>
    );
  }
}

export default MyComponent;
