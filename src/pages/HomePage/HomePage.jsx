import { useEffect, useRef, useState } from "react";
import HomeHero from "../../components/HomeHero/HomeHero";
import AboutUs from "../../components/AboutSection/Aboutus.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";

import "./HomePage.css";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
import OurProduct from "../../components/OurProduct/OurProduct.jsx";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const nextSectionRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="homepage">
      {isLoading && <Loading />}
      <HomeHero nextSectionRef={nextSectionRef} />
      <div className="next-section first-section all-cont" ref={nextSectionRef}>
        <OurProduct />
      </div>
      <div className="second-section all-cont">
        <AboutUs />
      </div>
      <ContactUs />
    </div>
  );
};

export default HomePage;
