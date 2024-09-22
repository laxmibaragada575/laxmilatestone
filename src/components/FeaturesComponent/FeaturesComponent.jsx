import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./FeaturesComponent.css";
import feature1 from "../../assets/images/parcel-pack.webp";
import feature2 from "../../assets/images/delivery-man.webp";
const features = [
  {
    id: 1,
    title: "Surprise Delights",
    description:
      "Surprise, surprise! Birthdays, Anniversaries are meant to be celebrated with a burst of joy and delight. Let's make it happen with a RushRabbit delightful array of decorations, mouthwatering cakes, and a blossoming bouquet of flowers. Get ready to wow the birthday star and create unforgettable memories!",
    image: feature1,
  },
  {
    id: 2,
    title: "Seamless Convenience",
    description:
      "Introducing our Premier Last-Minute Delivery Service: The ultimate solution for those unexpected moments when you've left something crucial behind. Our dedicated team of RushRabbit stands ready to swiftly retrieve your forgotten item and deliver it directly to your doorstep, ensuring your day remains seamless and uninterrupted.",
    image: feature2,
  },
  {
    id: 3,
    title: "Celebration Ready",
    description:
      "Partying like a rockstar but too lazy to get the booze? Fear not, my thirsty friends! Introducing RushRabbit Delivery - the drunkest, fastest way to get your alcohol fix straight to your door. Just tap that order button and watch as our team of RushRabbit couriers bring the good stuff right to you.",
    image: feature1,
  },
  {
    id: 4,
    title: "Peace of Mind",
    description:
      "Introducing our hassle-free grocery delivery service, bringing the freshest fruits, vegetables, and essential items right to your door. Say goodbye to time-consuming trips to the supermarket and enjoy the convenience of having your groceries delivered with just a few clicks with RushRabbit.",
    image: feature2,
  },
];

const FeaturesComponent = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="feature-container">
      <div className="left">
        <div className="features">
          {features.map((feature) => (
            <h2
              key={feature.id}
              className={
                feature.id === activeFeature.id ? "active" : "inactive"
              }
              onClick={() => setActiveFeature(feature)}
            >
              {feature.title}
            </h2>
          ))}
        </div>
        <TransitionGroup className="description">
          <CSSTransition key={activeFeature.id} timeout={300} classNames="fade">
            <p>{activeFeature.description}</p>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="right">
        <TransitionGroup>
          <CSSTransition key={activeFeature.id} timeout={300} classNames="fade">
            <img src={activeFeature.image} alt={activeFeature.title} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default FeaturesComponent;
