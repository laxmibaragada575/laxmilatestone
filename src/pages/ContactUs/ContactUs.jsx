import "./ContactUs.css";
import contactImage from "../../assets/images/contact.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const ContactUs = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const { pathname } = useLocation();
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd643759-40f9-4e8d-b327-d9aa3791af10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => setResult(""), 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="contact-main-cont">
      {isLoading && <Loading />}
        <div className="contact-content-container">
          <h1>GET IN TOUCH</h1>
          <p className="contact-form-para">Fill a from to hear from us!</p>
          <form className="form-container" onSubmit={onSubmit}>
            <div className="det-con">
              <div className="input-con input-1">
                <label htmlFor="1" className="lab">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="e.g. James Bond"
                  required
                />
              </div>
              <div className="input-con">
                <label htmlFor="2" className="lab">
                  Your phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  className="input"
                  placeholder="e.g. +44 11111-11111"
                  required
                />
              </div>
            </div>
            <div className="det-con">
              <div className="input-con input-1">
                <label htmlFor="3" className="lab">
                  Your E-mail
                </label>
                <input
                  type="text"
                  name="email"
                  className="input"
                  placeholder="e.g. j.bond@aa.co.uk"
                  required
                />
              </div>
              <div className="input-con">
                <label htmlFor="4" className="lab">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="4"
                  className="input"
                  placeholder="Astra Aim"
                  required
                />
              </div>
            </div>
            <div className="det-con">
              <div className="input-con fin-con">
                <label htmlFor="5" className="lab">
                  Type your query
                </label>
                <textarea
                  type="text"
                  rows="3"
                  name="message"
                  className="input"
                  placeholder="..."
                  required
                />
              </div>
            </div>
            <p className="p">
              By sending this form I confirm that I have read and accept the{" "}
              <span>Privacy Policy</span>
            </p>
            <button className="con-button">Reach Us</button>
          </form>
          <span>{result}</span>
          </div>
      <img className="contact-image" src={contactImage} alt="" />
    </div>
  );
};

export default ContactUs;
