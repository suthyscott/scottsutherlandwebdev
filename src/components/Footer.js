import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Looking for a mild-mannered engineer/instructor with average Super Smash Bros skills and a great attitude? Hit me up!
        </p>
        {/* <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form> */}
        <ul className="contact">

          <li className="fa-home">{config.address}</li>
          <li className='fa-envelope-o'>{config.email}</li>
          <div className='contact-buttons'>
            <button> <a href='https://docs.google.com/document/d/1ArDLs7RUCkyKzwQk68jVvPRMCWY6ng6bO2a-PTcO0ZU/edit?usp=sharing' target="_blank">Resume</a></button>
            <button> <a href='https://www.linkedin.com/in/scott-sutherland-883329196/' target="_blank">LinkedIn</a></button>
            <button> <a href='https://github.com/suthyscott' target="_blank">GitHub</a></button>
          </div>
          

          {/* <li className="fa-phone">{config.phone}</li> */}

          {/* {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })} */}
        </ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
