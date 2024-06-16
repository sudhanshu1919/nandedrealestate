import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import markers from "../assets/markers.js";
import axios from "axios";

export const PropContext = createContext(null);

const PropertyContext = (props) => {
  const [isLogin, setLogin] = useState(false);
  const [custID, setCustID] = useState(0);
  const [cust_name, setCustName] = useState("");
  const [custDetails, setCustDetails] = useState([{}]);

  useEffect(() => {}, []);

  const contextValue = { markers, setLogin, isLogin, setCustName, setCustID };

  return (
    <PropContext.Provider value={contextValue}>
      {props.children}
    </PropContext.Provider>
  );
};

export default PropertyContext;
