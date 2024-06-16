import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
import logo from "../../assets/icons/nandedbazar.png";
import user from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";
import { PropContext } from "../../context/PropertyContext";
function Navigation() {
  const { cust_name, setCustName, setLogin, isLogin, setCustID } =
    useContext(PropContext);
  // console.log(searchBox);
  const navigate = useNavigate();

  const logout = () => {
    setLogin(false);
    setCustID(0);
    setCustName("");
  };

  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-sm bg-white navbar-white ${style.main_nav_bar}`}
        >
          <div className="container">
            <a className={`navbar-brand ${style.Heading}`}>
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
            </a>
            {cust_name}
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
                <Link to="/home">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                </Link>

                <li className="nav-item dropdown">
                  <a
                    style={{ display: "flex", alignItems: "center" }}
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {cust_name}{" "}
                    <img
                      className="nav-link"
                      style={{ marginTop: "-9px" }}
                      src={user}
                      alt="Login"
                      width="40px"
                    />
                  </a>
                  <ul
                    className="dropdown-menu "
                    id="dmenu"
                    style={isLogin ? { left: "0px" } : { left: "-80px" }}
                  >
                    {isLogin ? (
                      <>
                        <Link to="/profile" className="items">
                          Profile
                        </Link>
                        <Link to="/home" className="items" onClick={logout}>
                          Logout
                        </Link>
                      </>
                    ) : (
                      <Link to="/login" className="items">
                        Login
                      </Link>
                    )}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/submitproperty" className="nav-link">
                    Submit Property
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
