import React from 'react';

import Layout from '../components/Layout';

// import pic1 from '../assets/images/ss-icon.jpg';
import pic2 from '../assets/images/coding-icons/carrots.svg';
import pic3 from '../assets/images/coding-icons/gears.svg';

// import vid1 from '../assets/vids/newsCatch.webm'
import screenShot from '../assets/img/TechPandaScreen.png'

import reactPic from '../assets/images/skills/react.png'
import reduxPic from '../assets/images/skills/redux.svg'
import cssPic from '../assets/images/skills/css3.png'
import expressPic from '../assets/images/skills/express.png'
import htmlPic from '../assets/images/skills/html5.png'
import jsPic from '../assets/images/skills/js.png'
import nodePic from '../assets/images/skills/node.png'
import postgresqlPic from '../assets/images/skills/postgresql.png'


import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          {/* <img id="ss-icon" src={pic1}/> */}
          {/* <span className="icon fa-code" ></span> */}
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
            I like LOTR, motorcycles and Avatar the Last Airbender. Like, a lot. Put me outside in nature or inside on an ultrawide and I'll be equally happy. I love living in Utah, mostly because it keeps me close to my family and the mountains. 
            <br/>
            <br/>
            After working in skilled labor trades, I decided to take a chance and shoot for something more fulfilling. At an immersive web dev bootcamp in Lehi I discovered two things I'm passionate about: coding and teaching. I've been combining those two passions as a teaching assistant and lead instructor for almost two years, with a stint as a full stack web developer at Trove Brands. 
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">         
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">MY PHILOSOPHY</h2>
            <p>
            I have always relished a challenge. Coming up against something difficult in pursuit of a worthy goal is highly motivating to me, and I believe a positive and determined attitude is one of the most valuable skills I bring to the workplace. Though I strive to perfect my technical skills as much as possible, I’m a people person and believe that great work starts and ends with great teams. I come to work every day excited to code and ready to support my teammates. 
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
           {/* <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a> */}
          <div className="content">
            <h2 className="major">Skills</h2>
            <div className='skills-grid'>
              <section className='skills-wrapper'>
                <img className='skills-image' src={jsPic} alt='JavaScript Icon'/>
                <p className='skills-text'>JavaScript</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={reactPic} alt='React Icon'/>
                <p className='skills-text'>React</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={reduxPic} alt='Redux Icon'/>
                <p className='skills-text'>Redux</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={htmlPic} alt='HTML Icon'/>
                <p className='skills-text'>HTML</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={cssPic} alt='CSS Icon'/>
                <p className='skills-text'>CSS</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={expressPic} alt='Express Icon'/>
                <p className='skills-text'>Express</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={postgresqlPic} alt='PostgreSQL Icon'/>
                <p className='skills-text'>PostgreSQL</p>
              </section>
              <section className='skills-wrapper'>
                <img className='skills-image' src={nodePic} alt='Node Icon'/>
                <p className='skills-text'>Node</p>
              </section>
              {/* <section className='skills-wrapper'>
                <img className='skills-image' src={awsPic}/>
                <p className='skills-text'>AWS</p>
              </section> */}
            </div>

  
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>

          <section className="features">
            <article>
              <section className='vid-holder'>
                <iframe src="https://player.vimeo.com/video/378907262" width="100%" height="210" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                {/* <video width='101%'  controls>
                  <source src={vid1} type='video/webm'></source>
                </video> */}
              </section>
              {/* <ReactPlayer url={vid1}/> */}
              <h3 className="major">newsCatch</h3>
              <p>
                A React app for searching and analyzing news articles.
                <br/>
                <br/>
                This app combines Google News API and Amazon Comprehend to help users easily find pertinent information in news articles. NewsCatch sends each article through Amazon Comprehend (a text-analysis API) and presents the resulting data in an easily digestible format.
                <br/>
                <br/>
                Built with JavaScript, React, HTML, CSS, Express, PostgreSQL and  BCrypt.        
                </p>
                {/* <a href="https://newscatchapp.com/#/" className="special">
                Visit
              </a> */}
            </article>

            <article>
              {/* <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a> */}
              <section className='vid-holder'>
                {/* <img width='101%' height='205' src={screenShot} alt='TechPanda ecommerce site'/> */}
                <iframe src="https://player.vimeo.com/video/459145141" width="100%" height="210" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                {/* <iframe src="https://player.vimeo.com/video/459145141" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
                {/* <video  width='101%'  controls>
                  <source src={vid2}></source>
                </video>                 */}
              </section>
              <h3 className="major">TechPanda</h3>
              <p>
              A premium electronics store based off of Google and Apple. 
              <br/>  
              <br/>  
              TechPanda is an ecommerce site based off of the designs of Apple and Google. Built to display high-end electronics, it connects to your google account through Auth0 and makes checkout easy with Stripe.
              <br/>  
              <br/>  
              Built with JavaScript, React, HTML, CSS, Express, PostgreSQL, Auth0, Stripe, and MaterialUI.
              </p>
              {/* <a href="http://165.227.28.127:5000/#/" className="special">
                Visit
              </a> */}
            </article>
            {/* <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article> */}
          </section>
          {/* <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
