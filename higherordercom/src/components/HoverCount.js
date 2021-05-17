import React, { Component } from "react";
import hoc from "./hoc";

class HoverCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Delayed for {count} many times</h2>;
  }
}

export default hoc(HoverCount)
