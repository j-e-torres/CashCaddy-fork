import React from "react";
import "../styles/Home.css";
import financingImage from "../images/Financing-1.jpg";

const Home = () => {
  return (
    <div className="home-body mb-5">
      <div className="text-center">
        <h1 className="home-title">Control Your Budget</h1>
        <img
          className="budget-image img-fluid shadow mb-3"
          src={financingImage}
          alt="budget-pic"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Home;
