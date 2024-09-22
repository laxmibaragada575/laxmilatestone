/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import CarouselCard from "../CarouselCard/CarouselCard";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} second-carousel-next`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#334257",
        borderRadius: "50%",
        right: "-30px", //by me
        fontSize: "2rem",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} second-carousel-prev`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#334257",
        borderRadius: "50%",
        left: "-30px", //by me
        zIndex: 2,
        fontSize: "2rem",
      }}
      onClick={onClick}
    />
  );
};

const Carousel = ({ careers }) => {
  const hotJobs = careers.filter((job) => job.hotJob);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="second-carousel-container">
      <Slider {...settings}>
        {hotJobs.map((job) => (
          <div key={job.jobId} className="second-carousel-slide">
            <CarouselCard job={job} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
