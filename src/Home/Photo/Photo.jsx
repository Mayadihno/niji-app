import { Button } from "@chakra-ui/react";
import React from "react";
import "./Photo.css";

const Photo = () => {
  return (
    <React.Fragment>
      <div className="photo">
        <div className="photo__content">
          <div className="photo__flex">
            <div className="button">
              <Button variant="outline">View all gallery</Button>
            </div>
            <div className="photo__heading">
              <span>photo</span>
              <h3>gallery</h3>
            </div>
          </div>

          <div className="photo__grid">
            <div>
              <img
                src="https://resources.cwg-qbr.pulselive.com/photo-resources/qbr-commonwealth-games/photo/2022/08/07/36b22ef5-905a-4bf0-8a9e-b2cd040af9d2/775827073_1413481484_Athletics___Commonwealth_Game.jpg?width=400&height=400"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://resources.cwg-qbr.pulselive.com/photo-resources/2022/08/08/e3c7cb52-f665-413b-97c4-4e018778dfab/gettyimages-1413483034-594x594.jpg?width=400&height=400"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://resources.cwg-qbr.pulselive.com/photo-resources/qbr-commonwealth-games/photo/2022/08/07/f729f766-bb59-44b3-938b-be720b0f43c4/775827509_1413456211_Boxing___Commonwealth_Games_D.jpg?width=400&height=400"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://resources.cwg-qbr.pulselive.com/photo-resources/qbr-commonwealth-games/photo/2022/08/04/ef57f7a7-2fce-41ba-bf0d-eb3adb893673/775827709_1412958831_Rhythmic_Gymnastics___Commonw.jpg?width=400&height=400"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Photo;
