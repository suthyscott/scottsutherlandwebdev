import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          I am looking for opportunities to learn and develop! Please contact me with questions or openings. 
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
            <button> <a href='https://docs.google.com/document/d/1imXojlGOay3PAnEAMNES1yNGxqNsx0IgcdWc3weIUzs/edit?usp=sharing'href='https://docs.google.com/document/d/1imXojlGOay3PAnEAMNES1yNGxqNsx0IgcdWc3weIUzs/edit?usp=sharing'>Resume</a></button>
            <button> <a href='https://www.linkedin.com/in/scott-sutherland-883329196/'>LinkedIn</a></button>
            <button> <a href='https://github.com/suthyscott'>GitHub</a></button>
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
