import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RiArrowRightSLine } from "react-icons/ri";
import '../App.css';

function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 1000);
  };

  return (
    <header className='header_area'>
      <div className='header_top'>
        <div className='container_'>
          <div className='row'>
            <div className="col-lg-6 header_top_column left_content">
              <ul>
                <li>Email:<a href="mailto:support@posbytz.com">support@posbytz.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='header_bottom'>
        <Navbar expand="lg" className="bg-white h-100 w-100 shadow-lg mb-3">
          <Container fluid="md sm">
            <Navbar.Brand href="#home" className='navbar_brand'>
              <div className='logo'>
                <img src="https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg" className='mw-100' alt='posBytz' />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item dropdown" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                  <a className="nav-link dropdown-toggle" href="#home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b style={{ color: "#000000A6" }} className='no-bg nav_responsive'>Explore</b>
                  </a>
                  {showDropdown && (
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#!">Restaurant <RiArrowRightSLine /></a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#!">Restaurant POS Software</a></li>
                          <li><a className="dropdown-item" href="#!">Cloud kitchen Software</a></li>
                          <li><a className="dropdown-item" href="#!">Cafe Billing Software</a></li>
                          <li><a className="dropdown-item" href="#!">Food truck POS</a></li>
                          <li><a className="dropdown-item" href="#!">Bar and Restaurant Software</a></li>
                        </ul>
                      </li>
                      {/* Repeat for other categories (Retail, POS, etc.) */}
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link"><b className='no-bg'>Pricing</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link"><b className='no-bg'>Blog</b></a>
                </li>
                {/* Other nav items */}
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Navigation;
