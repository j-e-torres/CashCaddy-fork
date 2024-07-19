// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import financingImage from "../images/Financing-1.jpg";

const Home = () => {
  return (
    <div className="home-body mb-5" style={{backgroundImage: `url(${financingImage})`, backgroundSize: 'cover', height: '50vh'}}>
      <div className="text-center" style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
        <h1 className="home-title" style={{fontSize: '4em', color: '#fff', textShadow: '-2px 0 purple, 0 2px purple, 2px 0 purple, 0 -2px purple'}}>Welcome to CashCady</h1>
      </div>
    </div>
  );
};

export default Home;
