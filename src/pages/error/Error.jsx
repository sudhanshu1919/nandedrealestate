import React from "react";
import { Outlet, Link } from "react-router-dom";
import img from "../../assets/images/error-404-monochrome.png";
function Error() {
  return (
    <div>
      <div id="layoutError">
        <div id="layoutError_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mt-4">
                    <img
                      className="mb-4 img-error"
                      src={img}
                      alt="Error 404"
                      width="350px"
                    />
                    <p className="lead">
                      This requested URL was not found on this server.
                    </p>
                    <Link to="/home">
                      <a href="index.html">
                        <i className="fas fa-arrow-left me-1"></i>
                        Return to Home
                      </a>
                    </Link>

                    <p className="lead mt-4">
                      Frontend Design By Sudhanshu Gaikwad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Error;
