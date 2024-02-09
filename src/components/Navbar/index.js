import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../videos/KRAFT64.com.png";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const scrollProps = {
    activeClass: "border-solid border-b-4 border-green-500",
    smooth: true,
    duration: 500,
    spy: true,
    exact: "true",
    offset: -80,
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} alt="logo" style={{width:"130px"}}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" {...scrollProps}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="whyus" {...scrollProps}>
                Why Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="solutions" {...scrollProps}>
                Solutions
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" {...scrollProps}>
                Our Services
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
