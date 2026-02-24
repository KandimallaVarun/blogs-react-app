import React from "react";
import "./banner.css" ;

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-text">
        <h1 className="text-center">Welcome to Our Blog Website</h1>
      </div>
      <img
        src="../../media/banner-home.jpg"
        alt="Banner"
        className="w-100"
        width={"100%"}
        height={"550px"}
        object-fit={"cover"}
      />
      </div>
    </>
  );
}
