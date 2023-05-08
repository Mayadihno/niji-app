import React from "react";
import "./Fixtures.css";
import Football from "../sport/Football/Football";
import Alphine from "../sport/Alpine/Alphine";
import Biathlon from "../sport/Biathlon/Biathlon";
import Basketball from "../sport/Basketball/Basketball";
import { Boxing } from "../sport/Boxing/Boxing";
import Cycling from "../sport/Cycling/Cycling";
import Diving from "../sport/Diving/Diving";
import Equestarian from "../sport/Equestarian/Equestarian";
import Fencing from "../sport/Fencing/Fencing";
import Flatwater from "../sport/Flatwater/Flatwater";
import Skateboard from "../sport/Skateboard/Skateboard";
import Skating from "../sport/Skating/Skating";
import Swimming from "../sport/Swimming/Swimming";
import Takwando from "../sport/Taekawando/Takwando";
import Vollyball from "../sport/Vollyball/Vollyball";

const Fixtures = () => {
  return (
    <React.Fragment>
      <div className="backgroundImage"></div>
      <div className="back__text">
        <div className="date">May 12th-May 25th 2023</div>
        <h3>
          Tokyo <br /> Olympic 2023
        </h3>
      </div>
      <div className="fixtures">
        <div className="fixtures__content">
          <div className="fiextures__heading">
            <h2>Today Match Fixtures</h2>
          </div>
          <div className="">
            <div className="accordionBody fixtures__grid">
              <Football />
              <Alphine />
              <Biathlon />
              <Basketball />
              <Boxing />
              <Cycling />
              <Diving />
              <Equestarian />
              <Fencing />
              <Flatwater />
              <Skateboard />
              <Skating />
              <Swimming />
              <Takwando />
              <Vollyball />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fixtures;
