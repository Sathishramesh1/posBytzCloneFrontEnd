import React, { useState, useEffect } from "react";
import './CustomNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
// import HeaderTop from "../headerTop/HeaderTop";
import NavbarData from '../utilites/nav.json';

const CustomNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredInnerItem, setHoveredInnerItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [clickedInnerItem, setClickedInnerItem] = useState(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

 
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMainItemHover = (index) => {
    if (!isMobile) {
      setHoveredItem(index);
    }
  };

  const handleMainItemClick = (index) => {
    if (isMobile) {
      setClickedItem(index === clickedItem ? null : index);
    }
  };

  const handleInnerItemHover = (index) => {
    if (!isMobile) {
      setHoveredInnerItem(index);
    }
  };

  const handleInnerItemClick = (index) => {
    if (isMobile) {
      setClickedInnerItem(index === clickedInnerItem ? null : index);
    }
  };

  const handleMainItemMouseLeave = (index) => {
    if (hoveredItem === index) {
      setHoveredItem(null);
    }
  };

  const handleInnerItemMouseLeave = (index) => {
    if (hoveredInnerItem === index) {
      setHoveredInnerItem(null);
    }
  };

  return (
    <div className="nav-start">
      {/* <HeaderTop /> */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="navbar-brand">
            <img
              src="https://posbytz.com/wp-content/uploads/2021/09/logo_default.svg"
              alt="Logo"
            />
          </div>
          <div
            className={isMobile && menuOpen ? "opened-navbar" : "navbar-menu"}
          >
            <ul className={isMobile && menuOpen ? "opened-menu" : "menu"}>
              {NavbarData.map((NavData, index) => (
                <li
                  key={index}
                  className="nav_links_item"
                  onMouseEnter={() => handleMainItemHover(index)}
                  onMouseLeave={() => handleMainItemMouseLeave(index)}
                  onClick={() => handleMainItemClick(index)}
                >
                  <div className="main_data">{NavData.main_item}</div>

                  {NavData.sub_item && (
                    <ul
                      className={
                        hoveredItem === index || clickedItem === index
                          ? "nav_links2_visit"
                          : "nav_links2"
                      }
                    >
                      {NavData.sub_item.map((navSubItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="nav_links2_item"
                          onMouseEnter={() => handleInnerItemHover(subIndex)}
                          onMouseLeave={() =>
                            handleInnerItemMouseLeave(subIndex)
                          }
                          onClick={() => handleInnerItemClick(subIndex)}
                        >
                          {navSubItem.inner_item}
                          {navSubItem.sub_inner_item && (
                            <FaAngleRight className="right_angle" />
                          )}

                          {navSubItem.sub_inner_item && (
                            <ul
                              className={
                                hoveredInnerItem === subIndex ||
                                clickedInnerItem === subIndex
                                  ? "nav_links3_visit"
                                  : "nav_links3"
                              }
                            >
                              {navSubItem.sub_inner_item.map(
                                (sub_item, subInnerIndex) => (
                                  <li
                                    key={subInnerIndex}
                                    className="nav_links3_item"
                                  >
                                    <div>{sub_item}</div>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="navbar-btn-container">
                <button className="navbar-btn">Get Started</button>
              </li>
            </ul>
          </div>
          <div className="menu-toggle" onClick={handleClick}>
            {menuOpen ? (
              <IoCloseSharp className="close-hamburger" size={30} />
            ) : (
              <GiHamburgerMenu className="hamburger" size={30} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNav;