import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  let history = useHistory();
  const handleLog = (e) => {
    e.preventDefault();

    if (userName && password) {
      history.push("/Profile");
    } else {
      setIsEmpty(true);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="login-container container">
          <section>
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card login-card">
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block login-pic">
                        <img
                          src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                          alt="login form"
                          className="img-fluid login-img"
                        />
                      </div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <form className="login-form" onSubmit={handleLog}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i className="fas fa-cubes fa-2x me-3 detail-card"></i>
                              <span className="h1 fw-bold mb-0">Log In</span>
                            </div>

                            <h5 className="fw-normal mb-3 pb-3">
                              Sign into your account
                            </h5>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control form-control-lg"
                                value={userName}
                                onChange={(e) => {
                                  setUserName(e.target.value);
                                }}
                              />
                              <label className="form-label" for="username">
                                Username
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="pswd"
                                className="form-control form-control-lg"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                              <label className="form-label" for="pswd">
                                Password
                              </label>
                            </div>

                            <div className="pt-1 mb-4">
                              {" "}
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="submit"
                              >
                                Login
                              </button>
                              {isEmpty && (
                                <div>
                                  <br />
                                  <h6>Fill all the credentials!</h6>
                                </div>
                              )}
                            </div>

                            <a className="small text-muted" href="#!">
                              Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2 reg-link-para">
                              Don't have an account?{" "}
                              <a className="reg0link" href="#!">
                                Register here
                              </a>
                            </p>
                            <a href="#!" className="small text-muted">
                              Terms of use.
                            </a>
                            <a href="#!" className="small text-muted">
                              Privacy policy
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
