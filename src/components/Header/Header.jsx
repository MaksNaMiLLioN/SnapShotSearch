import React from "react";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./header.css";

const Header = ({ handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Search handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
