import React, { Component } from "react";
import { Link } from "react-router-dom";

class CallToAction extends Component {
  render() {
    return (
      <div className="container my-5 ">
        <div className="text-center border p-5">
          <h1 className="mb-2 text-uppercase">{this.props.heading}</h1>
          <div id="line" className="w-50"></div>
          <p className="mb-5">{this.props.text}</p>

          <Link to={"/"} className="btn btn-light w-25">
            CTA Link
          </Link>
        </div>
      </div>
    );
  }
}

export default CallToAction;
