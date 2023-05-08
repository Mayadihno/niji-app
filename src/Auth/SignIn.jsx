/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { toast } from "react-toastify";
export const SignIn = ({ show, setShow }) => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...newInput });
  };
  const { email, password } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/fixtures", { replace: true });
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/wrong-password" || "auth/user-not-found") {
        toast.error("Incorrect Email or Password");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="signin">
        <div className="signIn__background">
          <div className="sign__content">
            <div className="logo">
              <div className="footer__logo">
                <div className="navbar__left">
                  <Link to={"/"}>
                    <div className="navbar__logo">
                      <div className="logo">
                        <img src="https://i.redd.it/wn55qp351d0a1.png" alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="signIn__text">
              <h2 style={{ textAlign: "center" }}>Welcome</h2>
              <p>Sign in with Email and Password</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  size="md"
                  variant="flushed"
                  required
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="password" style={{ paddingTop: "10px" }}>
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  variant="flushed"
                  id="password"
                  size="md"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <Box sx={{ mt: "20px" }}>
                <Button
                  variant={"solid"}
                  type="submit"
                  colorScheme="blackAlpha"
                >
                  Sign in
                </Button>
              </Box>
              <div className="form-input">
                <p>
                  Don't have an account?
                  <Link
                    onClick={() => setShow(!show)}
                    style={{ textDecoration: "underline", marginLeft: "5px" }}
                  >
                    Sign-Up
                  </Link>
                </p>
                <Link to={"/forget-password"}>
                  <p style={{ textDecoration: "underline" }}>Forget Password</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
