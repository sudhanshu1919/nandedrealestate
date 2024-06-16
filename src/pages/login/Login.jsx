import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PropContext } from "../../context/PropertyContext";

function Login() {
  const navigate = useNavigate();

  const { setCustName, setLogin } = useContext(PropContext);

  const [logininfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function sendData(event) {
    event.preventDefault();
    console.log(logininfo);
    axios
      .post("https://www.ncenanded.com/project/nbazzar/login.php", logininfo)
      .then(function (response) {
        console.log("login  Data >>> ", response.data);
        if (response.data.error) {
          notify(response.data.error);
        } else {
          setLogin(true);
          setCustName(response.data.cust_name);
          notify(response.data.success);

          setTimeout(function () {
            navigate("/home");
          }, 1000);
        }
      })
      .catch(function (err) {
        notify("Server is busy, Please try after some time...");
      });
  }

  const notify = (mess) => toast(mess);

  return (
    <>
      <main>
        <div className={`container-fluid ${style.Main_Box}`}>
          <div className="row justify-content-center ">
            <div className="col-lg-5 mt-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className={`card-header ${style.card_header}`}>
                  <h3
                    className="text-center font-weight-light my-4"
                    style={{ textTransform: "uppercase !important" }}
                  >
                    Login
                  </h3>
                </div>
                <div className={`card-body ${style.Cart_Body}`}>
                  <form onSubmit={sendData}>
                    <div>
                      <div className={`form-floating mb-3 ${style.MainForm}`}>
                        <input
                          required
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder=""
                          onChange={(e) => {
                            setLoginInfo({
                              ...logininfo,
                              email: e.target.value,
                            });
                          }}
                        />
                        <label for="inputEmail">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          required
                          className="form-control"
                          id="password"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setLoginInfo({
                              ...logininfo,
                              password: e.target.value,
                            });
                          }}
                        />
                        <label for="inputPassword">Password</label>
                      </div>

                      <div
                        className={`d-flex align-items-center justify-content-center mt-4 mb-0 `}
                      >
                        <input
                          type="submit"
                          className={`${style.Login_btn}`}
                          value="Login"
                        ></input>
                      </div>
                    </div>
                  </form>
                  <ToastContainer className={style.tostpos} autoClose={1000} />
                </div>
                <div
                  className={`card-footer text-center py-3 ${style.loginFooter}`}
                >
                  <div className={`small ${style.Small_Text}`}>
                    <Link to="/signup">
                      <a href="register.html">Need an account? Sign up!</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
