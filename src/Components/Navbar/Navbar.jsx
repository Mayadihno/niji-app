import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Manubar from "./Manubar";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__flex">
            <div className="navbar__left">
              <Link to={"/"}>
                <div className="navbar__logo">
                  <div className="logo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5L7hEPWF_yK4X426kMC7t_18Jpa0CbCkMA&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="navbar__middle">
              <div className="navbar__menu">
                <Manubar />
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar__menu__container"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RiCloseLine
              size={30}
              color="black"
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              size={30}
              color="black"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar__container__menu scale-up-center">
              <div className="navbar__links">
                <Manubar />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
