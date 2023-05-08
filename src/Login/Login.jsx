import React, { useState } from "react";
import PhoneAuth from "../Auth/PhoneAuth";
import { SignIn } from "../Auth/SignIn";
import "./Login.css";
import SignUp from "../Auth/SignUp";
const Login = () => {
  const [show, setShow] = useState(true);
  return (
    <React.Fragment>
      <div className="backgroundImage"></div>
      <div className="back__text">
        <div className="date">May 12th-May 25th 2023</div>
        <h3>
          Tokyo <br /> Olympic 2023
        </h3>
      </div>
      <div className="login">
        <div className="login__content">
          <div className="login__flex">
            <div className="phone_login">
              <PhoneAuth />
            </div>
            <div className="email__login">
              {show ? (
                <SignIn show={show} setShow={setShow} />
              ) : (
                <SignUp show={show} setShow={setShow} />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
