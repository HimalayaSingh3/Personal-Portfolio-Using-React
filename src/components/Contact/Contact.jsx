import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faInstagram,faTwitter,faLinkedin}from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faPhone,faHeart}from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c995e5b5-8ca8-47e4-aee1-9d4a0abf2cc3");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <p><FontAwesomeIcon icon={faEnvelope} className="us envelop" />himalayasingh337@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} className="us" />8279353090</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/himalayasingh337/"><FontAwesomeIcon icon={faInstagram} className="icon insta" /></a>
                    <a href="https://x.com/Himalaya-Singhh"><FontAwesomeIcon icon={faTwitter} className="icon twit" /></a>
                    <a href="https://www.linkedin.com/in/himalaya-singh-ba44722a4/" ><FontAwesomeIcon icon={faLinkedin} className="icon linked" /></a>
                    <a href="https://github.com/himalayasingh3"><FontAwesomeIcon icon={faGithub} className="icon git" /></a>
                </div>
            </div>
            <div onSubmit={onSubmit} className="contact-right" >
                <form >
                    <input type="text" name="Name" placeholder="Your Name" required></input>
                    <input type="email" name="email" placeholder="Your Email" required></input>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit"class="contact-submit btn btn2">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div className="made">
        <p>Made with <span><FontAwesomeIcon icon={faHeart}  /></span> by Himalaya Singh</p>
    </div>
</div>
  )
}

export default Contact
