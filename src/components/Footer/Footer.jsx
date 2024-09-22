import "./Footer.css";
import logoImage from "../../assets/images/about-imagee.webp";
import { FaRegCopyright } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import SmoothScrollLink from "../../SmoothScrollLink";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-container">
    <img className="footer-img-mobile" src={logoImage} alt="About Us" />
    <div className="footer-elements-container">
      <div className="footer-cont-one">
        <h1 className="footer-sub-heading">CONNECT WITH US</h1>
        <ul className="footer-apps-list">
          <li className="footer-list-item">
            <SmoothScrollLink to="/">Home</SmoothScrollLink>
          </li>
          <li className="footer-list-item">
            <SmoothScrollLink to="/product">OurProduct</SmoothScrollLink>
          </li>
          <li className="footer-list-item">
            <SmoothScrollLink to="/aboutus">AboutUs</SmoothScrollLink>
          </li>
          <li className="footer-list-item">
            <SmoothScrollLink to="/contact">ContactUs</SmoothScrollLink>
          </li>
          <li className="footer-list-item">
            <SmoothScrollLink to="/careers">Careers</SmoothScrollLink>
          </li>
        </ul>
      </div>
      <img className="footer-img-desktop" src={logoImage} alt="About Us" />
      <div className="footer-cont-one footer-right-allignment">
        <h1 className="footer-sub-heading">FOLLOW US ON</h1>
        <ul className="footer-apps-list">
          <li className="footer-list-item">
            <Link to="#">
              <FaXTwitter />
            </Link>
          </li>
          <li className="footer-list-item">
            <Link to="#">
              <FaSquareInstagram />
            </Link>
          </li>
          <li className="footer-list-item">
            <Link to="#">
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="footer-list-item">
            <Link to="#">
              <FaFacebook />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-last-cont">
      <div className="footer-icon-cont">
        <FaRegCopyright className="footer-copyright-icon" />
        <p className="footer-terms-policies">AstraAim 2024</p>
      </div>
      <p className="footer-terms-policies">TERMS OF USE</p>
      <p className="footer-terms-policies">PRIVACY POLICY</p>
    </div>
  </div>
);

export default Footer;
