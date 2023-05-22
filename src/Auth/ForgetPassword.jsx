/* eslint-disable react/no-unescaped-entities */
import { Button, Input } from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebaseConfig";
import "./Forget.css";
const ForgetPassword = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const newInput = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...newInput });
  };
  const { email } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset Password Link has been sent to Your Email");
      navigate("/login", { replace: true });
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("User Not Found");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="forget">
        <div className="backgroundImage"></div>
        <div className="back__text">
          <div className="date">May 12th-May 25th 2023</div>
          <h3>
            Yokyo <br /> Olympic 2023
          </h3>
        </div>
        <div className="forget__pass">
          <div className="forget__content">
            <div className="forget__form">
              <h1>Forget Password</h1>
              <h3>Enter your registed Email Here</h3>
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  required
                  variant="outline"
                  placeholder="Enter Registerd Email"
                  name="email"
                  onChange={handleChange}
                />
                <Button type="submit" color={"black"}>
                  Submit
                </Button>
              </form>
              <div className="alternative">
                <p>
                  Don't have an account?
                  <Link to={"/login"}>sign-up</Link>
                </p>
                <p>
                  Already have an account? <Link to={"/login"}>Sign-in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgetPassword;
