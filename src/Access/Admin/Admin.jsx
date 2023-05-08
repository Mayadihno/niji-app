import React, { useState } from "react";
import FixturesUpload from "../Fixtures/FixturesUpload";
import UploadImage from "../gallery/UploadImage";
import UploadVideo from "../video/UploadVideo";
import "./Admin.css";
import { Button } from "@chakra-ui/react";
import Users from "./Users";
const Admin = () => {
  const [fixtures, setFixtures] = useState(false);
  const [images, setImages] = useState(false);
  const [video, setVideo] = useState(false);

  const handleFixtures = () => {
    setImages(false);
    setVideo(false);
    setFixtures(!fixtures);
  };
  const handleImages = () => {
    setImages(!images);
    setVideo(false);
    setFixtures(false);
  };
  const handleVideo = () => {
    setImages(false);
    setVideo(!video);
    setFixtures(false);
  };
  return (
    <React.Fragment>
      <div className="admin">
        <div className="backgroundImage"></div>
        <div className="back__text">
          <div className="date">May 12th-May 25th 2023</div>
          <h3>
            Tokyo <br /> Olympic 2023
          </h3>
        </div>
        <div className="admin__content">
          <div className="button">
            <Button variant="outline" onClick={handleFixtures}>
              Upload Fixtures
            </Button>
            <Button variant="outline" onClick={handleImages}>
              Upload Photo
            </Button>
            <Button variant="outline" onClick={handleVideo}>
              Upload Highlights
            </Button>
          </div>
          <div className="admin__flex">
            <div className="numberOfUsers"></div>
            {fixtures && (
              <div className="addFixtures">
                <FixturesUpload />
              </div>
            )}
            {images && (
              <div className="addImage">
                <UploadImage />
              </div>
            )}
            {video && (
              <div className="addVideos">
                <UploadVideo />
              </div>
            )}
          </div>
          <div className="users">
            <Users />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
