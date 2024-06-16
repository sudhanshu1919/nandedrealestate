import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import PropertySearch from "./pages/propertySearch/PropertySearch";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import Footer from "./components/footer/Footer";
import PropertyPage from "./pages/propertyPage/PropertyPage";
import PropertyDetails from "./pages/propertyDetails/PropertyDetails";
import SubmitProperty from "./pages/submitProperty/SubmitProperty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/propertysearch" element={<PropertySearch />} />
          <Route path="/propertypage" element={<PropertyPage />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submitproperty" element={<SubmitProperty />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
