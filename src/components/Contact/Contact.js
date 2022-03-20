import React, { useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_imui0zj', 'template_15lwd8r', formRef.current, 'KdrStGDDdzGXe-eg6')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrap">
        <div className="c-left">
          <h1 className="c-tittle">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> +91 7039326306
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />{" "}
              nirmalvikas306@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Narayan nagar,
              Ghatkopar west, Mumbai 400086, Maharashtra , India.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">Get in touch.</p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
            <br />
            <br />
            {done && (<p className="alert">Thank you, For Contacting me.</p>)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
