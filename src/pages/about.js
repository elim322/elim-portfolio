import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import profile from '../assets/images/profile.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>Einer Lim Portfolio</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>
          <span className="image main">
            <img src={profile} alt="" />
          </span>
          <p>
            I am a front-end developer specializing in creating responsive and
            robust websites and applications.
          </p>
          <p>
            I graduated The University of British Columbia with a Bachelors
            Degree in Human Geography. I started gaining interest in software
            development in my 3rd year of University and decided to pursue it as
            a career after completing my Bachelors. I then completed a diploma
            in software development and now working on various contracts as well
            as working as a part-time developer with calmversation learning
            foundation.
          </p>
          <p>
            I am currently interested in learning more about UX design,
            photography, technical support for both hardware and software, and
            VR/AR technologies. If you would like to connect with me feel free
            to leave me a message!
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
