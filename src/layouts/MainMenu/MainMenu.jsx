import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// MainMenuData = [
//   {
//     links: {
//       title: "",
//       title:"",
//       title:""

//     },

//     {

//     }
//   }

// ]

const MainMenu = () => {
  return (
    <header className="container py-4">
      <nav className="d-flex justify-content-between align-items-center py-3">
        <Link to="/about" className="navbar-brand">
          <span id="brand">Company name</span>
        </Link>
        <ul className="list-unstyled d-flex gap-4 align-items-baseline mb-0">
          <li>
            <Link to="/" className="nav-link">
              Link 1
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Link 2
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <button className="btn btn-sm btn-outline-light">
            <Link to="/about" className="nav-link">
              Contact Us
            </Link>
          </button>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default MainMenu;
