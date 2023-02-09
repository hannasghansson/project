import React from "react";
import { useState } from "react";

const CardItem = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handletoggle = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="container row">
      <div className="col-4">
        <div className="justify-align-items-stretch w-100 border rounder">
          <li className="mb-4 w-100">
            <div className="text-center py-4 ">
              <img
                style={{
                  width: 50,
                  height: 50,
                }}
                src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt="/"
                className="text-center mb-3"
              />

              <li className="m-2 d-colum align-items-stretch" style={{}}>
                <h6>Myth question</h6>

                {showAnswer && <p className="text-muted">Answer</p>}

                <button
                  onClick={handletoggle}
                  className="text-capitalize btn btn-dark my-2"
                >
                  Show Answer
                </button>
              </li>
            </div>
          </li>
        </div>
      </div>
      <div className="col-4">
        <div className=" align-items-stretch w-100 border rounder">
          <li className="mb-4 w-100">
            <div className="text-center py-4 ">
              <img
                style={{
                  width: 50,
                  height: 50,
                }}
                src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt="/"
                className="text-center mb-3"
              />

              <li className="m-2 d-colum align-items-stretch" style={{}}>
                <h6>Myth question</h6>

                {showAnswer && <p className="text-muted">Answer</p>}

                <button
                  onClick={handletoggle}
                  className="text-capitalize btn btn-dark my-2"
                >
                  Show Answer
                </button>
              </li>
            </div>
          </li>
        </div>
      </div>
      <div className="col-4">
        <div className=" align-items-stretch w-100 border rounder">
          <li className="mb-4 w-100">
            <div className="text-center py-4 ">
              <img
                style={{
                  width: 50,
                  height: 50,
                }}
                src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt="/"
                className="text-center mb-3"
              />

              <li className="m-2 d-colum align-items-stretch" style={{}}>
                <h6>Myth question</h6>

                {showAnswer && <p className="text-muted">Answer</p>}

                <button
                  onClick={handletoggle}
                  className="text-capitalize btn btn-dark my-2"
                >
                  Show Answer
                </button>
              </li>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
