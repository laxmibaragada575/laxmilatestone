import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      if (window.scrollY === 0) {
        setNavbarBackground("transparent");
      } else if (window.scrollY > lastScrollY) {
        setNavbarBackground("transparent");
      } else {
        setNavbarBackground("#476072");
      }

      setLastScrollY(window.scrollY);
    }
  };

  const handleScroll = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("scroll", handleScroll); // Add scroll event listener for closing menu
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("scroll", handleScroll); // Clean up scroll event listener
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [lastScrollY, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".navbar")) {
      setMobileMenuOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`navbar ${showNavbar ? "active" : "hidden"}`}
      style={{ backgroundColor: navbarBackground }}
    >
      <nav>
        <NavLink className="logo" to="/">
          AstraAim
        </NavLink>
        <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <NavLink
            className="link nav-link"
            to="/product"
            onClick={handleNavLinkClick}
          >
            OurProduct
          </NavLink>
          <NavLink
            className="link nav-link"
            to="/aboutus"
            onClick={handleNavLinkClick}
          >
            About Us
          </NavLink>
          <NavLink
            className="link nav-link"
            to="/careers"
            onClick={handleNavLinkClick}
          >
            Careers
          </NavLink>
          <NavLink
            className="link nav-link"
            to="contact"
            onClick={handleNavLinkClick}
          >
            Contact Us
          </NavLink>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
