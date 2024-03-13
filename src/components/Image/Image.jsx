import React from "react";
import "./Image.css";

export const Image = ({ src, alt }) => {
  return <img className="img" src={src} alt={alt} />;
};
