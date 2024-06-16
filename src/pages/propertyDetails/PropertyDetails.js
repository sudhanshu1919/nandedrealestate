import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./PropertyDetails.module.css";
import Gallery from "../../components/gallery/Gallery";
import Overview from "../../components/overview/Overview";
import Map from "../../components/map/Map";
function PropertyDetails() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>{location.state.markers.data.name}</h5>
        <h6>{location.state.markers.data.address}</h6>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className={`col-md-5 ${styles.gallerySection}`}>
                {" "}
                <Gallery />{" "}
              </div>
              <div className={`col-md-5 ${styles.overviewSection}`}>
                {" "}
                <Overview />{" "}
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h5>Description</h5>
                <p>
                  The house is unfurnished. It has easy access to market,
                  schools, hospitals, banks and ATM's as well. Get a two bedroom
                  apartment for rent in Mundhwa for families now, without any
                  brokerage. This 900 sqft. home is on the 9th floor & comes
                  with ample space for parking of car and bike.
                  <br></br>
                  Amenities like play area for children & gym gives you
                  something to do in your free time. If you need amenities such
                  as security, lift & Wi-Fi access you will be happy to note
                  that this home has this & more.
                </p>
              </div>
            </div>

            <div className={`row ${styles.map}`}>
              <Map markers={[location.state.markers]} />
            </div>
          </div>
          <div className="col-md-2 text-center">
            Advertisment
            <div className={`mx-auto ${styles.adv}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
