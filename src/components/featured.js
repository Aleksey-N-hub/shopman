import React, { Component } from "react";
import { Context } from "../context";

export default class featured extends Component {
  static contextType = Context;

  render() {
    console.log(this.context.products);
    return <div></div>;
  }
}
