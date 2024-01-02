import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import ProfilePic from "../profile.jpg";

const Menu = () => {
  const [isVisible, setVisible] = useState(true);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="menu_div">
        {isVisible ? (
          <img src={ProfilePic} alt="profile" className="menu_pic"/>
        ) : (
          <div className="menu_links menu_div">
            <Link to="/" className="text-2xl">
              <AnchorLink href="#top">Top</AnchorLink>
            </Link>
            <Link to="/proyects" className="text-2xl">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </Link>
            <Link to="/proyects" className="text-2xl">
              <AnchorLink href="#technologies">Technologies</AnchorLink>
            </Link>
            <Link to="/cv" className="text-2xl">
              <AnchorLink href="#cv">CV</AnchorLink>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
