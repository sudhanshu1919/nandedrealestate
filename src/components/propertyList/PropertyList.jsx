import React, { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import Property from "../property/Property";
import styles from "./PropertyList.module.css";

function PropertyList(props) {
  // To hold the actual data
  const [data, setData] = useState(props.markers);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <>
      <h2>PropertyList</h2>
      {currentRecords.map((item) => {
        return <Property markers={item} />;
      })}

      <Pagination
        className="mt-5"
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default PropertyList;
