import React from 'react'
import './Contact.css'
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookicon from "../../assets/facebook-icon.png"
import twittericon from "../../assets/twitter.png"
import youtubeicon from "../../assets/youtube.png"
import instagramicon from "../../assets/instagram.png"

const Contact = () => {
  return (
    <div>
      <section id="contactpage">
        <div id="clients">
          <h1 className="contactpagetitle">My Clients</h1>
        <p className="clientdesc">
          I have had an oppurtunity
        </p>
        <div className="clientimgs">
          <img src={walmart} alt="client" className="clientimg" />
          <img src={adobe} alt="client" className="clientimg" />
          <img src={microsoft} alt="client" className="clientimg" />
          <img src={facebook} alt="client" className="clientimg" />
        </div>
        </div>
        <div className="contact">
          <h1 className="contactpagetitle">Contact me</h1>
          <span className="contactdesc">Please fill out the form below to discuss about work oppurtunity</span>
          <form action="" className="contactform">
            <input type="text" className="name"placeholder='Your Name'/>
            <input type="email" className="email"placeholder='Your Email' />
            <textarea className="msg"name="message"rows="5"placeholder="Your message"></textarea>
            <button type="submit" value="send"className="submitbtn">Send</button>
            <div className="links">
              <img src={facebookicon} alt="facebook" className="link" />
              <img src={twittericon} alt="twitter" className="link" />
              <img src={youtubeicon} alt="youtube" className="link" />
              <img src={instagramicon} alt="instagram" className="link" />
            </div>
          </form>

        </div>

      </section>
      
    </div>
  )
}

export default Contact
