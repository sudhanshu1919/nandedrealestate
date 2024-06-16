import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Footer.module.css";
function Footter() {
  let location = useLocation();
  if (location.pathname === "/propertypage") return null;
  return (
    <>
      <div className={`container-fluid ${style.main_container}`}>
        <div className={`${style.Links}`}>
          <div className={`${style.textLink}`}>
            <Link to="/home">Home</Link>
          </div>
          <div className={`mx-2 ${style.textLink}`}>
            <Link to="/home">Home</Link>
          </div>
          <div className={`mx-2 ${style.textLink}`}>
            <Link to="/home">Home</Link>
          </div>
          <div className={`mx-2 ${style.textLink}`}>
            <Link to="/home">Home</Link>
          </div>
        </div>

        <div className={`mt-2 ${style.Text}`}>
          <p>© 2024 Nanded Bazzar | Developed By Sudhanshu Gaikwad</p>
        </div>
      </div>
    </>
  );
}

export default Footter;
