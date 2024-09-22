import { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { FaLeftLong, FaLocationDot, FaRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./JobCard.css";
import careers from "../../careers"; // Assuming careers is imported correctly

const JobCard = ({ allJobsRef }) => {
  const [currentPage, setCurrentPage] = useState(0); // State to track current page

  const jobsPerPage = 5; // Number of jobs to display per page

  // Calculate start and end indices for jobs on the current page
  const startIndex = currentPage * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  // Slice the careers array to get jobs for the current page
  const jobsToShow = careers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(careers.length / jobsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    if (allJobsRef.current) {
      allJobsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      {jobsToShow.map((job) => (
        <div key={job.jobId} className="job-card">
          <div className="title-section">
            <h1>{job.jobTitle}</h1>
            <div className="job-loc">
              <div className="sub-info">
                <FaBuilding /> <p>AstraAim</p>
              </div>
              <div className="sub-info">
                <FaLocationDot /> <p>Remote</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <span>Skills:</span>
            <p>{job.technicalAndProfessionalRequirements}</p>
          </div>
          <div className="responsibilities">
            <h2>Responsibilities:</h2>
            <p>A day in the life at {job.company}</p>
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          <button className="apply-btn">
            <Link className="btn-link" to={`/careers/${job.jobId}`}>
              View and Apply
            </Link>
          </button>
        </div>
      ))}

      <div className="pagination-buttons">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          style={{ backgroundColor: "#334257", color: "white" }}
        >
          <FaLeftLong className="arrow" />
        </button>
        <span>
          {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= careers.length}
          style={{ backgroundColor: "#334257", color: "white" }}
        >
          <FaRightLong className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
