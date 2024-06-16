import React from "react";
import styles from "./Overview.module.css";
function Overview() {
  return (
    <div>
      <ul className={styles.mbldpdtlsbodysummary}>
        <li className={styles.mbldpdtlsbodysummaryitem} data-icon="beds">
          <span className={styles.mbldpdtlsbodysummaryhighlight}>2</span>Beds
        </li>
        <li className={styles.mbldpdtlsbodysummaryitem} data-icon="baths">
          <span className={styles.mbldpdtlsbodysummaryhighlight}>2</span>Baths
        </li>
        <li className={styles.mbldpdtlsbodysummaryitem} data-icon="balconies">
          <span className={styles.mbldpdtlsbodysummaryhighlight}>2</span>
          Balconies
        </li>
        <li className={styles.mbldpdtlsbodysummaryitem} data-icon="unfurnished">
          <span className={styles.mbldpdtlsbodysummaryhighlight}></span>
          Unfurnished
        </li>
      </ul>

      <ul className={styles.mbldpdtlsbodylist}>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>
            Super Built-up Area
          </div>
          <div className="mb-ldpdtlsbodylist--value mb-ldpdtlsbodylist--flex mb-ldpdtlsbodylist--flex-column">
            <div className="mb-ldpdtlsbodylist">
              900
              <span className="mb-ldpdtlsbodylist--units">
                <span>sqft</span>
              </span>
            </div>
            <div className="mb-ldpdtlsbodylist--size">
              <span className="rupees">₹</span>5,000/sqft
            </div>
          </div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Floor</div>
          <div className={styles.mbldpdtlsbodylistvalue}>
            2 (Out of 4 Floors)
          </div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Transaction type</div>
          <div className={styles.mbldpdtlsbodylistvalue}>Resale</div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Status</div>
          <div className={styles.mbldpdtlsbodylistvalue}>Ready to Move</div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Additional Rooms</div>
          <div className={styles.mbldpdtlsbodylistvalue}>1 Servant Room</div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Facing</div>
          <div className={styles.mbldpdtlsbodylistvalue}>North - East</div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Furnished Status</div>
          <div className={styles.mbldpdtlsbodylistvalue}>Unfurnished</div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>Type of Ownership</div>
          <div className={styles.mbldpdtlsbodylistvalue}>Freehold</div>
        </li>
        <li className={styles.mbldpdtlsbodylistitem}>
          <div className={styles.mbldpdtlsbodylistlabel}>
            Age of Construction
          </div>
          <div className="mb-ldpdtlsbody_list--value">New Construction</div>
        </li>
      </ul>
    </div>
  );
}

export default Overview;
