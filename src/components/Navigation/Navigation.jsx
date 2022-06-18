import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/mountain">Mountain</NavLink>
        </li>
        <li>
          <NavLink to="/animals">Animals</NavLink>
        </li>
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
        <li>
          <NavLink to="/car">Car</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
