import React from "react";
import { Link } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";
import imgBg from "../../assets/img/bg.png";

const AuthForm = () => {
  return (
    <form className="card-body cardbody-color p-lg-5">
      <img
        width="100%"
        src={imgBg}
        alt="Sign in img"
        className="d-block mx-auto mb-5"
      />
      <div>
        <h3 className="m-0">Sign in</h3>
        <p>Description</p>
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="name@exempel.com"
          name="email"
        />
        <p className="invalid-feedback">Email is invalid</p>
      </div>

      <div className="mb-5">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          required
        />
        <p className="invalid-feedback">Password is invalid</p>
        <Link to={"/"} className="mb-4">
          Forgot your password?
        </Link>
      </div>

      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </div>

      <hr className=" mb-5" />

      <div className="text-center mb-5">
        <p>
          Don`t have an account?
          <Link href="/" className="ms-1">
            Sign up!
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
