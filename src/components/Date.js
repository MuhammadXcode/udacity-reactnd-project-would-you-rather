import React, { Component, Fragment } from "react";
import { formatDate } from "../utils/helpers";

class Date extends Component {
  render() {
    return <Fragment>{formatDate(this.props.timestamp)}</Fragment>;
  }
}

export default Date;
