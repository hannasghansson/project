import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

const signUp = () => {
  return (
    <main>
      <div className="container py-5">
        <div className="row">
          <div className="col-4 mx-auto">
            <AuthForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default signUp;
