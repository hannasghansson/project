import React, { Component } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// icons
const FaChevronDownIcon = <FaChevronDown />;
const FaChevronUpIcon = <FaChevronUp />;

class FaQItem extends Component {
  state = {
    isActive: false,
  };

  renderAnswer = () => {
    const { faqData } = this.props;
    const { answer } = faqData; //{answer}
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div className="description m-2">
          <p className="text-muted mb-5">{answer}</p>
        </div>
      );
    }
    return null;
  };

  onToggleAnswer = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderActiveIcon = () => {
    const { isActive } = this.state;
    const icons = isActive ? FaChevronUpIcon : FaChevronDownIcon;

    return (
      // <button
      //   className=" mb-3"
      //   style={{ border: "none" }}
      //   type="button"
      //   onClick={this.onToggleAnswer}
      // >

      // </button>

      <button
        className="btn btn-sm btn-outline-light rounded-circle mb-3"
        onClick={this.onToggleAnswer}
      >
        {icons}
      </button>
    );
  };

  render() {
    const { faqData } = this.props;
    const { question } = faqData;
    return (
      <li>
        <div className="row border-bottom mb-3">
          <div className="col ">
            <h5 className="">{question}</h5>
          </div>
          <div className="col-auto">{this.renderActiveIcon()}</div>
        </div>

        <p className="mb-5">{this.renderAnswer()}</p>
      </li>
    );
  }
}
export default FaQItem;
