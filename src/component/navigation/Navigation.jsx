import React from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import logo from "../../assets/icons/nandedbazar.png";
function Navigation() {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-sm bg-white navbar-white ${style.main_nav_bar}`}
        >
          <div className="container-fluid">
            <a className={`navbar-brand ${style.Heading}`}>
              <img src={logo} alt="" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className={`navbar-nav ms-auto ${style.nav_items}`}>
                <Link to="/login">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </li>
                </Link>

                <Link to="/login">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </li>
                </Link>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
