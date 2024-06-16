import React from "react";
import { Link } from "react-router-dom";
import style from "./Property.module.css";
// Coustoms icons
import flat from "../../assets/icons/flat_01.png";
import house from "../../assets/icons/house.png";
import R_house from "../../assets/icons/Row_house.png";
import Shop from "../../assets/icons/shop.png";
import land from "../../assets/icons/land.png";
function PropertyBox() {
  return (
    <>
      <div className={`mt-3 ${style.property_Container}`}>
        <div className={`text-center ${style.main_item}`}>
          <Link to="/PropertySearch">
            <div className={`${style.item}`}>
              <img src={flat} alt="Flat" />
            </div>
            <div>
              <p className={`mt-3 ${style.last_text}`}>Flat </p>
            </div>
          </Link>
        </div>

        <div className={`text-center ${style.main_item}`}>
          <Link to="/PropertySearch">
            <div className={`${style.item}`}>
              <img src={house} alt="Flat" />
            </div>
            <div>
              <p className={`mt-3 ${style.last_text}`}>Indepent House </p>
            </div>
          </Link>
        </div>

        <div className={`text-center ${style.main_item}`}>
          <Link to="/PropertySearch">
            <div className={`${style.item}`}>
              <img src={R_house} alt="Flat" />
            </div>
            <div>
              <p className={`mt-3 ${style.last_text}`}>Row House </p>
            </div>
          </Link>
        </div>

        <div className={`text-center ${style.main_item}`}>
          <Link to="/PropertySearch">
            <div className={`${style.item}`}>
              <img src={Shop} alt="Flat" />
            </div>
            <div>
              <p className={`mt-3 ${style.last_text}`}>Shop</p>
            </div>
          </Link>
        </div>

        <div className={`text-center ${style.main_item}`}>
          <Link to="/PropertySearch">
            <div className={`${style.item}`}>
              <img src={land} alt="Flat" />
            </div>
            <div>
              <p className={`mt-3 ${style.last_text}`}>Land</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PropertyBox;
