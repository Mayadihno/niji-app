import { Button } from "@chakra-ui/react";
import React from "react";
import "./Ads.css";
const Ads = () => {
  return (
    <React.Fragment>
      <div className="ads">
        <div className="ads__content">
          <div className="ads__flex">
            <div className="ads__text">
              <div className="text">
                <h3>TV channel</h3>
                <p>
                  Olympic Channel TV is giving you access to the greatest
                  movement in sport up close, 24/7 non-stop. From every angle.
                  Through all in, all out coverage, original programming, unseen
                  footage and interviews that get you closer than ever before.
                </p>
                <Button>Watch Highlight</Button>
              </div>
              <img
                src="https://img.olympicchannel.com/images/image/private/t_16-9_960/f_auto/v1538355600/primary/epw3fno2mzhyhn65l7lt"
                alt=""
              />
            </div>
            <div className="image">
              <img
                src="https://tpc.googlesyndication.com/simgad/15344360648185428749"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ads;
