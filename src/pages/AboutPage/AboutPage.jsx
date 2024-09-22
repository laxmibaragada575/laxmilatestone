import "./AboutPage.css";
import mission from "../../assets/images/Mission.webp";
import vision from "../../assets/images/Vision.webp";
import WhatWeDO from "../../assets/images/Team-work.webp";
import RushRabbit from "../../assets/images/RR.webp";
import AstraAim from "../../assets/images/AstraAimPic.webp";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const AboutPage = () => {
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

  return (
    <div className="about-con">
      {isLoading && <Loading />}
      <div className="con-1">
        <p>ABOUT</p>
        <h1>
          Solving real problems, with real solutions. One product at a time,
          every time.
        </h1>
        <button className="btn">
          <Link to="/contact" className="link">
            Contact
          </Link>
        </button>
      </div>
      <div className="con-2">
        <div className="sub-con">
          <h1>Who We Are</h1>
          <hr />
        </div>
        <div className="sub-con-1">
          <img src={AstraAim} width={450} height={450} className="image" />
          <div className="sub-con-1-text re-adjust">
            <p>
              At Astraim , we are a fully distributed team working from four
              countries worldwide. Our mission is to craft top-notch products
              that assist our customers in utilizing our delivery services
              efficiently. We always aim to do things a little differently at
              Hashtag I Am. Since our inception, we've focused on building a
              unique and fulfilling experience for both our team and our
              customers.
            </p>
            <p className="para">
              We have dedicated teams for HR, marketing, finance, data analysis,
              digital marketing, database management, and architecture. Our
              experienced team members are committed to working together to
              achieve our goals. Each team member brings a wealth of knowledge
              and expertise, ensuring that we deliver the best possible products
              and services.
            </p>
            <p className="para">
              Our team works tirelessly to innovate and improve, consistently
              striving for excellence in everything we do. By embracing the
              flexibility of remote work, we foster a collaborative environment
              where creativity and efficiency thrive, no matter where we are in
              the world..
            </p>
          </div>
        </div>
      </div>
      <div className="con-3">
        <h1>What We Do</h1>
        <hr />
        <div className="sub-con-1">
          <div className="sub-con-1-text">
            <p>
              As part of the AstraAim family, our mission is to provide
              top-notch services that help you make the most of your time and
              resources.We endeavour to connect professionals worldwide to
              enhance their productivity and success.
            </p>
            <p className="para">
              We are committed to profoundly improving our customers’ financial
              lives in a way that they couldn't imagine going back to the old
              way. Our focus is on improving people’s lives through meaningful
              innovation.
            </p>
            <p className="para">
              By continually delivering premium products that satisfy customer
              needs and preferences, we aim to build trust and loyalty, thereby
              becoming the leading choice in the market.
            </p>
          </div>
          <img src={WhatWeDO} width="50%" height={450} className="image" />
        </div>
        <div className="aa-con">
          <img src={RushRabbit} width={400} height={180} />
          <p>
            Welcome to Rush Rabbit, your ultimate delivery solution! Rush Rabbit
            is designed to cater to all your delivery needs. Whether you need
            groceries, daily essentials, or assistance with running errands, our
            app connects you with nearby stores and ensures your orders are
            delivered swiftly and safely by our trusted delivery personnel..
            <Link to="/product">Read More</Link>
          </p>
        </div>
      </div>
      <div className="con-4">
        <div className="card-1">
          <div className="card-1-text">
            <h1>Our Misson</h1>
            <hr />
            <p>
              Our mission is to rethink commerce in ways that contribute to a
              more fulfilling and enduring world. We are creating a human,
              authentic, and community-centric global and local marketplace. We
              are dedicated to empowering creators to produce their best work
              and present it to the audience they deserve. By regularly offering
              high-quality products that fulfil customer needs and preferences,
              we strive to cultivate trust and loyalty, with the goal of
              becoming the market leader. Our goal is to give people the power
              to share and contribute to a more open and connected world.
            </p>
          </div>
          <img src={mission} className="mission" />
        </div>
        <div className="card-1">
          <div className="card-1-text">
            <h1>Our Vision</h1>
            <hr />
            <p>
              Our vision is to implement new ideas and new strategies in
              software development, by utilising the power of technology for a
              better tomorrow. so that we can expect a future where our
              ingenious solutions empower individuals, businesses, and
              communities to develop well, and where we work for a positive
              change. Our aim is to set a new standard for eminence, and turn
              out to be an ascendant player in our market segment. We are
              renowned for our expertise, reliability, and commitment to
              excellence
            </p>
          </div>
          <img src={vision} className="mission" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
