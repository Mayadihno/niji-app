/* eslint-disable react/prop-types */
import React from "react";

const SwipperImage = ({ item: { image, textBig, textSmall, id } }) => {
  return (
    <React.Fragment>
      <div className="items" key={id}>
        <img src={image} alt="" />
        <div className="text">
          <h2>{textBig}</h2>
          <div className="spanButton">
            <h5>{textSmall}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SwipperImage;
