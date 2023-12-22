import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";
function Contact() {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">🚀 Reach Out and Connect!</h3>
          <p className="contact__description">
            I'm thrilled that you're interested in connecting with me. Whether
            you have a job opportunity, a collaboration idea, or just want to
            say hello, feel free to reach out! I'm always open to new
            opportunities and conversations.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
            <div>
              <span className="info__title">Mail me </span>
              <h4 className="info__desc">shivamproven110@gmail.com
              </h4>
            </div>
            </div>


            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
            <div>
              <span className="info__title">Call me</span>
              <h4 className="info__desc">+91 7718059211</h4>
            </div>
            </div>

          </div>

          <div className="contact__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              className="contact__social-links"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="contact__social-links"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              className="contact__social-links"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name "
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email "
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject "
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder=" Your Message" className="form__control textarea"></textarea>
          </div>

          <button className="button"> Send Message
          <span className="button__icon contact__button-icon">
            <FiSend />
          </span>
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;