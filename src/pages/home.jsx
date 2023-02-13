//components
// import Header from "../layouts/Header/Header";<Header />;
// import Computer from "../components/Computer";  <Computer />

// import Hero from "../layouts/Hero/Hero"; <Hero />
// import Card from "../layouts/Card/Card";  <Card />
//import Lists from "../layouts/Lists/Lists"; <Lists />
//import Faq from "../components/FaQ/Faq"; <Faq />

import React from "react";
import { Link } from "react-router-dom";

import Cta from "../components/Cta/Cta";

const home = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="mb-5">
          <h1 className="mb-2 text-uppercase">Home Page</h1>
        </div>
      </div>

      <Cta
        heading="Call to action"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. "
      />

      <div className="bg-white py-5 text-center">
        <Link to={"/signUp"} className="btn btn-dark w-75">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default home;
