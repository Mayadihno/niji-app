/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Firebase/firebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = ({ show, setShow }) => {
  const [change, setChange] = useState("");
  const [gender, setGender] = useState("");

  const handleChanges = (e) => {
    setGender(e.target.value);
  };
  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setChange({ ...change, ...newInput });
  };

  const { password, fullname, email, phoneNumber, confirm } = change;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirm) {
        toast.warning("password and confrim password are not corrrect");
      }
      const users = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: fullname,
        PhoneNumber: phoneNumber,
        Email: email,
      });

      const usersData = users.user;
      const formDataCopy = { ...change, gender: gender };
      delete formDataCopy.password;
      delete formDataCopy.confirm;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", usersData.uid), formDataCopy);
      toast.success("You have successfull create account");
      setShow(true);
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email have already been used");
        console.log(error);
      } else if (error.code === "auth/weak-password") {
        toast.warning("Password should be more than 6 letters");
      } else {
        toast.error("Something went wrong");
        // console.log(error.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="signUp">
        <div className="signUp__background">
          <div className="signUp__content">
            <h2>Create Account as local user</h2>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="name">Username</label>
                <Input
                  type="text"
                  placeholder="Enter Username"
                  id="name"
                  size="md"
                  name="fullname"
                  variant="outline"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  size="md"
                  variant="outline"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="phones">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter Phone Number"
                  id="phone"
                  size="md"
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  variant="outline"
                />
              </div>
              <Select
                placeholder={"Select gender"}
                onChange={handleChanges}
                required
                name="gender"
              >
                <option style={{ color: "black" }} value={"male"}>
                  Male
                </option>
                <option style={{ color: "black" }} value={"female"}>
                  Female
                </option>
              </Select>
              <div className="phones">
                <label htmlFor="country">Country</label>
                <Input
                  type="text"
                  placeholder="Enter country"
                  id="country"
                  size="md"
                  name="country"
                  required
                  onChange={handleChange}
                  variant="outline"
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  required
                  onChange={handleChange}
                  size="md"
                  variant="outline"
                />
              </div>
              <div className="cpassword">
                <label htmlFor="password">Confirm Password</label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  id="cpassword"
                  size="md"
                  name="confirm"
                  required
                  onChange={handleChange}
                  variant="outline"
                />
              </div>
              <div className="privacy">
                <input type="checkbox" style={{ marginRight: "10px" }} /> I
                accept the terms and privacy policy
              </div>
              <Button type="submit" variant={"solid"} colorScheme="blackAlpha">
                Sign Up
              </Button>
              <div className="form-input">
                <p>
                  Already have an account?
                  <Link
                    onClick={() => setShow(!show)}
                    style={{ textDecoration: "underline", marginLeft: "5px" }}
                  >
                    Sign-in
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

export default SignUp;
