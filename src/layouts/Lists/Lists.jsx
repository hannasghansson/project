import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Lists = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handletoggle = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-7">
          <ul className="list-unstyled">
            <li>
              <div className="row border-bottom mb-3">
                <div className="col mt-5">
                  <h4 className="">Question</h4>
                </div>
                <div className="col-auto mt-5">
                  <button
                    className="btn btn-sm btn-outline-light rounded-circle mb-3"
                    onClick={handletoggle}
                  >
                    <FaChevronDown />
                  </button>
                </div>
              </div>
              {showAnswer && <p className="text-muted mb-5">Answer</p>}
            </li>
          </ul>
        </div>
        <div className="col-4 offset-1 justify-content-end">
          <img
            src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="bild"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Lists;
