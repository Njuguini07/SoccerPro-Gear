import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaClock,
} from "react-icons/fa";


const ContactUs = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Let’s Link Up</h1>
        <p>Have a question or want to buy gear? Reach us anytime.</p>
      </header>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt /> <span>+254 746 269 409</span>
          </div>
          <div className="info-item">
            <FaEnvelope /> <span>info@soccerprogear.co.ke</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt /> <span>Westlands, Nairobi, Kenya</span>
          </div>

          <div className="store-hours">
            <h3>
              <FaClock /> Store Hours
            </h3>
            <ul>
              <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="socials">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="map-box">
          <iframe
            title="SoccerPro Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.275492019377!2d36.8022089!3d-1.2647039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172300000001%3A0x254ecb7e01c8b219!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
