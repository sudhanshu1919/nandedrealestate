import React from "react";
import style from "./Home.module.css";
import PropertyBox from "../../components/propertyBox/PropertyBox";
function Home() {
  return (
    <>
      <div className={`container-fluid ${style.mtop}`}>
        <div className="row">
          <div className="col-md-2 text-center">
            Advertisment
            <div className={`mx-auto ${style.adv160x600}`}></div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-12 text-center">
                Advertisment
                <div className={`mx-auto ${style.adv970x90}`}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={`container ${style.Main_container}`}>
                  <div className={`${style.headding_text}`}>
                    <p>Search our more then 1000 property</p>
                  </div>
                  <div className={`mt-2`}>
                    <PropertyBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-center">
            Advertisment
            <div className={`mx-auto ${style.adv160x600}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
