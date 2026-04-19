import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Discover the best food & drinks in <span>Your City</span></h2>
        <p>
          Explore top-rated restaurants, exclusive menus, and enjoy fast delivery directly to your door.
        </p>
        <div className="header-search">
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
            <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
