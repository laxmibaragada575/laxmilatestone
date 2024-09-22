import React, { useState } from "react";
import "./Aboutus.css";
import heroAbt from "../../assets/images/heroAbt.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const content = {
    about: {
      title: "About AstraAim",
      text: `At Astraim, we are a fully distributed team working from four countries worldwide. Our mission is to craft top-notch
             products that assist our customers in utilizing our delivery services efficiently. We always aim to do things a little
             differently at Hashtag I Am. Since our inception, we've focused on building a unique and fulfilling experience for
             both our team and our customers.`,
    },
    mission: {
      title: "Our Mission",
      text: `Our mission is to rethink commerce in ways that contribute to a more fulfilling and enduring world. We are creating a human, authentic, and community-centric global and local marketplace. We are dedicated to empowering creators to produce their best work and present it to the audience they deserve. By regularly offering high-quality products that fulfil customer needs and preferences, we strive to cultivate trust and loyalty, with the goal of becoming the market leader. Our goal is to give people the power to share and contribute to a more open and connected world.`,
    },
    vision: {
      title: "Our Vision",
      text: `Our vision is to implement new ideas and new strategies in software development, by utilising the power of technology for a better tomorrow. so that we can expect a future where our ingenious solutions empower individuals, businesses, and communities to develop well, and where we work for a positive change. Our aim is to set a new standard for eminence, and turn out to be an ascendant player in our market segment. We are renowned for our expertise, reliability, and commitment to excellence.`,
    },
  };

  return (
    <div className="abt-con">
        <img className="abt-img-desktop" src={heroAbt} alt="About Us" />
        <div className="abt-right-con">
          <h3>ABOUT US</h3>
          <h2>Directing Dreams, Crafting Destinies.</h2>
          <img className="abt-img-small" src={heroAbt} alt="About Us"/>
          <p>
            Solving real problems, with real solutions. One product at a time,
            every time.
          </p>
          <div className="abt-tabs-con">
            <div>
              {Object.keys(content).map((key) => (
                <button
                  key={key}
                  id={`${key}-btn`}
                  className={activeTab === key ? "active" : ""}
                  onClick={() => setActiveTab(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
            <div className="display-con">
              <h3>{content[activeTab].title}</h3>
              <div>
                <p>{content[activeTab].text}</p>
                <div className="tooltiptext">
                  <h3>{content[activeTab].title}</h3>
                  <p>{content[activeTab].text}</p>
                </div>
              </div>
            </div>
            <button id="final-btn">
              <Link className="link" to="/aboutus">
                Know More
              </Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
