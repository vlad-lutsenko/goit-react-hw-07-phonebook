import React from "react";
import Loader from "react-loader";

const options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.0,
  corners: 1,
  color: "#F0FFFF",
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: "50%",
  left: "50%",
  shadow: false,
  hwaccel: false,
  position: "absolute",
};

const LoaderSection = () => {
  return <Loader loaded={false} options={options} />;
};

export default LoaderSection;
