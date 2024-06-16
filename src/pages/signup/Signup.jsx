import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import style from "./Signup.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PropContext } from "../../context/PropertyContext";
function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handelClickSendData(event) {
    event.preventDefault();
    axios
      .post("https://www.ncenanded.com/project/nbazzar/createcust.php", data)
      .then(function (response) {
        console.log("Create Account Seanding Data >>> ", response.data);

        if (response.data.error) {
          notify(response.data.error);
        } else {
          notify(response.data.success);
          setTimeout(function () {
            navigate("/login");
          }, 2000);
        }
      })
      .catch(function (err) {
        setError("server is busy, Please try again...");
      });
  }

  const notify = (mess) => toast(mess);
  return (
    <>
      <div className={`container-fluid ${style.Main_Box}`}>
        <div className="row justify-content-center">
          <div className="col-lg-7 mt-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className={`card-header ${style.Header}`}>
                <h3 className="text-center font-weight-light my-4">
                  Create Account
                </h3>
              </div>
              <div className={`card-body ${style.Body}`}>
                <form onSubmit={handelClickSendData}>
                  <div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <input
                            required
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder="Enter your first name"
                            name="name"
                            onChange={(e) => {
                              setData({ ...data, name: e.target.value });
                            }}
                          />
                          <label for="inputName">Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            required
                            className="form-control"
                            id="inputNumber"
                            type="text"
                            placeholder="Enter your last name"
                            name="monbile_number"
                            onChange={(e) => {
                              setData({
                                ...data,
                                mobilenumber: e.target.value,
                              });
                            }}
                          />
                          <label for="inputNumber">Mobile Number</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <input
                            required
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            onChange={(e) => {
                              setData({ ...data, email: e.target.value });
                            }}
                          />
                          <label for="inputEmail">Email address</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <input
                            required
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => {
                              setData({ ...data, password: e.target.value });
                            }}
                          />
                          <label for="inputPassword">Password</label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-0">
                      <div className="d-grid">
                        <input
                          type="submit"
                          value="Create Account"
                          className={`btn-block ${style.signup_btn}`}
                        ></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={`card-footer text-center py-3 ${style.Footer}`}>
                <div className={`small ${style.Small_Text}`}>
                  <Link to="/login">
                    <a href="login.html">Have an account? Go to login</a>
                  </Link>
                  <span>{error}</span>
                  <ToastContainer className={style.toastPos} autoClose={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
