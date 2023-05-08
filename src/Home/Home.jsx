import React from "react";
import Swipper from "./Swipper/Swipper";
import Ads from "./Ads/Ads";
import Photo from "./Photo/Photo";
import Mascot from "./Mascot/Mascot";
import Medal from "./Medal/Medal";
import Enquire from "./Enquire/Enquire";

const Home = () => {
  return (
    <React.Fragment>
      <Swipper />
      <Ads />
      <Photo />
      <Mascot />
      <Medal />
      <Enquire />
    </React.Fragment>
  );
};

export default Home;
