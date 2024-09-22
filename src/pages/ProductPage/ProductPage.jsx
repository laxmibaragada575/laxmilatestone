import React, { useEffect, useRef, useState } from "react";
import "./ProductPage.css";
import FeaturesComponent from "../../components/FeaturesComponent/FeaturesComponent";
import FAQ from "../../components/FAQ/FAQ";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function ProductPage() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const featuresRef = useRef(null);

  const handleScroll = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="product-page">
      {isLoading && <Loading />}
      <div className="producthero">
        <div className="product-hero-info">
          <h1>RushRabbit</h1>
          <p className="info">
            Welcome to Rush Rabbit, your ultimate delivery solution! Rush Rabbit
            is designed to cater to all your delivery needs. Whether you need
            groceries, daily essentials, or assistance with running errands, our
            app connects you with nearby stores and ensures your orders are
            delivered swiftly and safely by our trusted delivery personnel.
          </p>
          <p className="note">
            Click the below button to know about features and FAQs
          </p>
          <button className="btn" onClick={handleScroll}>
            Explore More
          </button>
        </div>
      </div>
      <div className="features" ref={featuresRef}>
        <FeaturesComponent />
      </div>
      <FAQ />
    </div>
  );
}

export default ProductPage;
