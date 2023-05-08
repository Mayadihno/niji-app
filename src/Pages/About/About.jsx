import React from "react";
import "./About.css";
const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="backgroundImage"></div>
        <div className="back__text">
          <div className="date">May 12th-May 25th 2023</div>
          <h3>
            Tokyo <br /> Olympic 2023
          </h3>
        </div>
        <div className="about__content">
          <div className="about__head">
            <h2>OLYMPIC GAMES</h2>
          </div>
          <div className="anout__texts">
            <p>
              The Olympic Games are the world's only truly global, multi-sport,
              celebratory athletics competition. With more than 200 countries
              participating in over 400 events across the Summer and Winter
              Games, the Olympics are where the world comes to compete, feel
              inspired, and be together.
            </p>
            <h2>Our Legacy</h2>
            <p>
              Tokyo 2023 has always been about more than sport and tickets,
              unafraid to do things differently, and striving for new benchmarks
              in creativity, inclusivity, and sustainability and to leave an
              indelible mark on the region. Our legacy programme spans 11
              different areas and is helping Tokyo and the West Midlands to
              maximise the benefits of hosting the Games.
            </p>
            <p>
              Together with our legacy partners we have used the Games to bring
              people together, improve health and wellbeing, act as a catalyst
              for change, help the region to grow and succeed, and put us on the
              global stage. Tokyo 2023’s legacy will live on in the skills,
              confidence and optimism of the local people who have been
              positively impacted by the Games in their daily lives. It will
              travel on to future events, as well in the new image of Tokyo and
              the region that has been forged by the Games.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
