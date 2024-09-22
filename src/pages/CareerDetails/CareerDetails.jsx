import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import careers from "../../careers";
import "./CareerDetails.css";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import Loading from "../../components/Loading/Loading";

const CareerDetails = () => {
  const [result, setResult] = useState("");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const { id } = useParams();
  const job = careers.find((job) => job.jobId === id);

  const handleApplyClick = () => {
    setShowApplyModal(true);
  };

  const handleCloseModal = () => {
    setShowApplyModal(false);
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(formData);
    formData.append("access_key", "ecc74cf0-84df-4f6e-8536-284e757c0ec3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent Successfully");
        event.target.reset();
        setTimeout(() => {
          setResult("");
          setShowApplyModal(false);
          setSubmitted(false);
        }, 2000); // Close the modal 2 seconds after the success message
      } else {
        console.log("Error", data);
        setResult(data.message);
        setTimeout(() => setResult(""), 2000);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred while sending the message.");
      setTimeout(() => setResult(""), 2000);
    }
  };

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="container">
      {isLoading && <Loading />}
      <div className="main">
        <Link to="/careers" className="back-button">
          <IoMdArrowBack /> Back | Careers
        </Link>
        <div className="title-container">
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
      </div>
      <div className="sub-main">
        <div className="sub-main-childern">
          <p>Job ID/Reference Code</p>
          <h4>{job.jobId}</h4>
        </div>
        <div className="sub-main-childern">
          <p>Work Experience</p>
          <h4>{job.workExperience}</h4>
        </div>
        <div className="sub-main-childern">
          <p>Job Title</p>
          <h4>{job.jobTitle}</h4>
        </div>
      </div>
      <div className="sub-main-2">
        <div className="roles">
          <div className="responsibilities">
            <h2>Responsibilities:</h2>
            <ul>
              {job.responsibilities.map((resp, index) => (
                <li key={index}> {resp}</li>
              ))}
            </ul>
          </div>
          <div className="add-responsibilities">
            <h2>Additional Responsibilities:</h2>
            <ul>
              {job.additionalResponsibilities.map((resp, index) => (
                <li key={index}> {resp}</li>
              ))}
            </ul>
          </div>
          <div className="educational-requirements">
            <span className="span-heading">Educational Requirements</span>
            <p>{job.educationalRequirements}</p>
          </div>
          <div className="service-line">
            <span className="span-heading">Service Line</span>
            <p>{job.serviceLine}</p>
          </div>
        </div>
        <div className="skills">
          <div className="technical-skills">
            <span className="span-heading">
              Technical and Professional Requirements:
            </span>
            <p>{job.technicalAndProfessionalRequirements}</p>
          </div>
          <div className="preferred-skills">
            <span className="span-heading">Preferred Skills:</span>
            <p>{job.preferredSkills}</p>
          </div>
        </div>
      </div>
      <button className="apply-button" onClick={handleApplyClick}>
        Apply
      </button>

      {showApplyModal && (
        <div className="apply-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {submitted ? (
              <h2>Application Submitted</h2>
            ) : (
              <>
                <h2>Apply for {job.jobTitle}</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={job.jobTitle}
                    hidden
                    name="jobTitle"
                  />
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                  <label htmlFor="mobile">Mobile Number:</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile"
                    required
                  />

                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="4"
                    placeholder="Enter your address"
                    required
                  />

                  <button type="submit">Submit Application</button>
                </form>
                <span>{result}</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerDetails;
