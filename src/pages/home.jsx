import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

//components
// import Header from "../layouts/Header/Header";
// <Header />;

// import Hero from "../layouts/Hero/Hero"; <Hero />
// import Card from "../layouts/Card/Card";  <Card />
// import Computer from "../components/Computer";  <Computer />

import MainMenu from "../layouts/MainMenu/MainMenu";
import { Link } from "react-router-dom";
//import Lists from "../layouts/Lists/Lists";
//import Faq from "../components/FaQ/Faq";

const home = () => {
  return (
    <div>
      <MainMenu />

      <div className="container py-5">
        <div className="mb-5">
          <h1 className="mb-2 text-uppercase">Home Page</h1>
          <hr />
        </div>
      </div>

      <Breadcrumb />
      <Link to="/about">ABOUT</Link>

      {/* 
      <Lists />

      <Faq /> */}
    </div>
  );
};

export default home;
