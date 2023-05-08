import React, { useState } from "react";
import PhoneAuth from "../Auth/PhoneAuth";
import { SignIn } from "../Auth/SignIn";
import "./Login.css";
import SignUp from "../Auth/SignUp";
const Login = () => {
  const [show, setShow] = useState(true);
  return (
    <React.Fragment>
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
