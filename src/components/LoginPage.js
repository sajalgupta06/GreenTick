import React, { useState } from "react";
import "../css/login.css";
import logo2 from "../images/logo2.png";

export default function LoginPage() {
  const [form, setForm] = useState("login_form");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Signup = (e) => {
    e.preventDefault()
    console.table({ userName, email, password, confirmPassword });
    setConfirmPassword("");
    setEmail("");
    setUserName("");
    setPassword("");
  };
  const Signin = (e) => {
      e.preventDefault()
    console.table({ email, password });
    setConfirmPassword("");
    setEmail("");
    setUserName("");
    setPassword("");
  };
  const toggleSignin = () => {
    setConfirmPassword("");
    setEmail("");
    setUserName("");
    setPassword("");
    setForm("login_form");
  };
  const toggleSignup = () => {
    setConfirmPassword("");
    setEmail("");
    setUserName("");
    setPassword("");
    setForm("login_form_active");
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        className="loginContainer"
        style={{ position: "relative", top: "10%" }}
      >
        <div className="sign-in-box">
          <div className="sign-in-container">
            <div className="content_container">
              <img alt="GreenTick" src={logo2} className="logo__PDIm" />
              <form className="login_form">
                {form == "login_form_active" && (
                  <React.Fragment>
                    <span className="username">
                      <input
                        className="username_input"
                        placeholder="Username"
                        type="text"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                    </span>
                    <div
                      data-is-error="false"
                      className="error-message-container__msvN"
                    >
                      <p
                        data-cy="form-field-error"
                        className="error-message__3Q-C"
                      ></p>
                    </div>
                  </React.Fragment>
                )}

                <span className="username">
                  <input
                    className="username_input"
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </span>
                <div
                  data-is-error="false"
                  className="error-message-container__msvN"
                >
                  <p
                    data-cy="form-field-error"
                    className="error-message__3Q-C"
                  ></p>
                </div>

                <span className="login_form">
                  <input
                    className="password_input"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </span>

                <div
                  data-is-error="false"
                  className="error-message-container__msvN"
                >
                  <p
                    data-cy="form-field-error"
                    className="error-message__3Q-C"
                  ></p>
                </div>

                {form == "login_form_active" && (
                  <React.Fragment>
                    <span className={form}>
                      <input
                        className="password_input"
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </span>
                    <div
                      data-is-error="false"
                      className="error-message-container__msvN"
                    >
                      <p
                        data-cy="form-field-error"
                        className="error-message__3Q-C"
                      ></p>
                    </div>
                  </React.Fragment>
                )}
              </form>

              {form == "login_form_active" ? (
                <React.Fragment>
                  {" "}
                  <button
                    className="signup-btn "
                        type="submit"
                    onClick={(e) => {
                      Signup(e);
                    }}
                  >
                    <div className="btn-content-container">
                      <span className="btn-content">Sign up</span>
                    </div>
                  </button>{" "}
                </React.Fragment>
              ) : (
                <button
                  className="signup-btn "
                    type="submit"
                  onClick={(e) => {
                    Signin(e)
                  }}
                >
                  <div className="btn-content-container">
                    <span className="btn-content">Sign In</span>
                  </div>
                </button>
              )}

              {form == "login_form_active" ? (
                <>
                  <div className="Signup_btn">
                    <div className="Signup_btn">
                      Have an account?{" "}
                      <a
                        style={{
                          cursor: "pointer",
                          marginLeft: "0.8em",
                          color: "#1890ff",
                        }}
                        onClick={() => {
                          toggleSignin();
                        }}
                      >
                        Sign In
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="actions_bar">
                    <a href="#">Forgot Password?</a>
                    <span className="sign-up-link">
                      {" "}
                      <a
                        onClick={() => {
                          toggleSignup();
                        }}
                      >
                        Sign Up
                      </a>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
