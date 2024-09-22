import "./OurProduct.css";
import image from "../../assets/images/delivery-box1.webp";
import playstoreIcon from "../../assets/images/playstore-icon.webp";
import appstoreIcon from "../../assets/images/appstore-icon.webp";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const OurProduct = () => {
  return (
    <div className="our-product-container">
      <div className="our-product-info">
        <h3 className="our-product-info-title">OUR PRODUCT</h3>
        <h1>RushRabbit</h1>
        <h2>
          Time is precious, Spend it on what matters! Let us handle delivery!
        </h2>
        <p className="our-product-desc">
          Discover Rush Rabbit, your swift and reliable delivery partner for
          groceries, daily essentials, and errands. Seamlessly connecting you to
          local stores, we guarantee speedy and secure deliveries every time.
        </p>
        <Link className="link dive-in" to="/product">
          Dive in <FaAngleRight />
        </Link>
        <img src={image} className="our-product-image-mobile" alt="" />
        <div className="product-buttons-container">
          <button className="download-btn">
            <img className="play-app-icons" src={playstoreIcon} alt="play-store-icon" />
            <div className="btn-info">
              <p>Coming soon..</p>
              <p>Google Playstore</p>
            </div>
          </button>
          <button className="download-btn">
            <img className="play-app-icons" src={appstoreIcon} alt="app-store-icon" />
            <div>
              <p>Coming soon..</p>
              <p>App Store</p>
            </div>
          </button>
        </div>
      </div>
      <img src={image} className="our-product-image-desktop" alt="" />
    </div>
  );
};

export default OurProduct;
