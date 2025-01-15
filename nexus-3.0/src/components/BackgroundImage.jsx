import React from "react";
import "../Stylesheets/BackgroundImage.css";
import image from "../../public/git.jpg";

const BackgroundImage = () => {
  return (
    <section className="bgimage">
      <img src={image} alt="Background" className="imageBackground" />
      <div className="contentOverlay">
        <div className="textCard">
          <h1 className="modernText">
            Global{"\n"}Institute{"\n"}of{"\n"}Technology
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImage;
