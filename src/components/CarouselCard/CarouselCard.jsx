/* eslint-disable react/prop-types */
import "./CarouselCard.css";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CarouselCard = ({ job }) => {
  return (
    <div className="carousel-card">
      <div className="top">
        <h1>{job.jobTitle}</h1>
        <div className="info">
          <div className="sub-info">
            <FaBuilding /> <p>AstraAim</p>
          </div>
          <div className="sub-info">
            <FaLocationDot /> <p>AstraAim</p>
          </div>
        </div>
      </div>
      <div className="responsibilities">
        <h2>Resposibilities</h2>
        <p>A day in a life of AstraAimian</p>
        <ul>
          <li style={{textAlign:"start",}}>{job.responsibilities[0]}</li>
        </ul>
      </div>
      <button className="apply-btn">
        <Link className="btn-link" to={`/careers/${job.jobId}`}>
          View and Apply
        </Link>
      </button>
    </div>
  );
};

export default CarouselCard;
