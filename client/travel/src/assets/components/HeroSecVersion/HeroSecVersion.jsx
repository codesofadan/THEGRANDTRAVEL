import React from "react";
import "./HeroSecVersion.css";
import SearchBar from "../SearchBar/SearchBar";

const HeroSecVersion = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <h1>Where travel meets<br></br> luxury and Safety</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSecVersion;
