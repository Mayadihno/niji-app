import React from "react";
import "./Macot.css";
import { Button } from "@chakra-ui/react";
const Mascot = () => {
  return (
    <React.Fragment>
      <div className="mascot">
        <div className="mascot__background">
          <div className="mascot__content">
            <div className="mascot__flex">
              <div className="mascot__image">
                <img
                  src="https://www.european-games.org/wp-content/themes/eg2023/assets/images/item/mascots.png"
                  alt=""
                />
              </div>
              <div className="mascot__text">
                <h3>HI!, WE ARE</h3>
                <h2>THE</h2>
                <h2>MASCOTS</h2>
                <p>
                  Meet Sandra Salamander and Krakusek Dragon, the mascots for
                  the European Games 2023
                </p>
                <Button variant="outline" color={"white"}>
                  Meet Macots
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mascot;
