import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeHero.css";
import image1 from "../../assets/images/Building-1.webp";
import image2 from "../../assets/images/Classic-Building2.webp";
import image3 from "../../assets/images/Space-sparkles.webp";
import { useRef } from "react";
import LazyBackgroundImage from "../../LazyBackgroundImage";

const HomeHero = ({ nextSectionRef }) => {
  const sliderRef = useRef(null);
  const images = [image3, image1, image2];

  const handleExploreClick = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div className="home-hero-slick-dots">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="home-hero">
      <div className="home-hero-carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="home-hero-carousel-slide">
              <LazyBackgroundImage
                className="home-hero-carousel-background"
                image={image}
              >
                {/* children or other content */}
              </LazyBackgroundImage>
            </div>
          ))}
        </Slider>
        <div className="home-hero-carousel-caption">
          <h1>AstraAim</h1>
          <h2>Leading the Way</h2>
          <button className="btn" onClick={handleExploreClick}>
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
