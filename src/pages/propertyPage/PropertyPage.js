import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PropContext } from "../../context/PropertyContext";
import styles from "./PropertyPage.module.css";
import Map from "../../components/map/Map";
import Footer from "../../components/footer/Footer";
import PropertyList from "../../components/propertyList/PropertyList";
function PropertyPage() {
  const { markers } = useContext(PropContext);

  const location = useLocation();

  const handleMarkerClick = (e, data) => {
    console.log("Marker clicked", e);
    console.log("Data passed:", data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mapSection}>
        <Map markers={markers} handleMarkerClick={handleMarkerClick} />
      </div>
      <div className={styles.propertyListSection}>
        <PropertyList markers={markers} />

        <Footer />
      </div>
    </div>
  );
}

export default PropertyPage;
