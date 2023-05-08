import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__content">
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
          <div className="footer__text">
            <p>
              TM © 2023 – International Olympic Committee – All Rights Reserved.
            </p>
          </div>
          <h2>Game Partner</h2>
          <div className="games__partner">
            <img
              src="https://www.european-games.org/wp-content/uploads/2023/02/la-liga.png"
              alt=""
            />
            <img
              src="https://www.european-games.org/wp-content/uploads/2022/12/Sin-titulo-1.png"
              alt=""
            />
            <img
              src="https://www.european-games.org/wp-content/uploads/2023/04/Screenshot-2023-04-25-at-12.43.36.png"
              alt=""
            />
            <img
              src="https://img.olympicchannel.com/images/image/private/t_original/f_auto/v1538355600/primary/ugi0sruwde385diyeqw0"
              alt=""
            />
            <img
              src="https://img.olympicchannel.com/images/image/private/t_original/f_auto/v1538355600/primary/cjmpm10kdl0k4ah6iuup"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
