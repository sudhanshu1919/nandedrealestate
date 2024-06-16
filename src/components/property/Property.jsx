import React from "react";
import styles from "./Property.module.css";
import PropertySlider from "../slider/PropertySlider";
import { useNavigate } from "react-router-dom";

function Property(props) {
  const navigate = useNavigate();

  const details = (item) => {
    navigate(`/propertydetails`, { state: { markers: props.markers } });
  };

  return (
    <div className={styles.main}>
      <div className={styles.sliderSection}>
        <PropertySlider />
      </div>
      <div
        className={styles.infoSection}
        onClick={() => {
          details(props.markers);
        }}
      >
        <h4 className={styles.title}>{props.markers.data.name}</h4>
        <h4 className={styles.address}>{props.markers.data.address}</h4>
        <div className={styles.two}>
          <div>
            <span className={styles.rate}>Rate</span>
            <span className={styles.rateValue}>{props.markers.data.rate}</span>
          </div>
          <div>
            <span className={styles.area}>Area</span>
            <span className={styles.areaValue}>{props.markers.data.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
