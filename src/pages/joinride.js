import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import fbAbout from '../assets/images/fbAbout.png'
import foodDonor from '../assets/images/foodDonor.png'
import fbMap from '../assets/images/fbMap.png'

const JoinRide = props => (
  <Layout>
    <Helmet>
      <title>Einer Lim Portfolio</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Food Buddy</h2>
          </header>
          <p>
            A Food Buddy is food recycling app created for the Local Hack Day
            Hackathon at UBC. The app gives a way for Charities, Insititutions,
            and others to donate food, to try and reduce food waste. A map in
            the app provides users a way to track and located food donors for
            pickup. The app is built on React Native which will allow us to port
            to IOS and Android, however for this hackathon we have decided to
            focus on ios, with android as a future consideration.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={fbAbout} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Our inspiration</h3>
              </header>
              <p>
                We wanted to create an app that would positively impact our
                community. We decided to focus on food because everyday from
                restaurants to supermarkets and even in our own homes, there is
                often a lot of food waste. We wanted to build an app that would
                make it easier to connect individuals and groups together to
                reduce food wastage.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="#" className="image">
            <img src={fbMap} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Functionality</h3>
              </header>
              <p>
                We wanted our users to have the convenience of being able to
                pinpoint the exact location of charities/organizations who are
                willing to take food donations and vice versa. We also wanted to
                provide our users the relevant groups based on the details they
                have inputed and all of this data will be spatially mapped onto
                our map.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={foodDonor} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>What we've learned</h3>
              </header>
              <p>
                This is our second project using React Native and we've managed
                to avoid most of the errors by writing robust and efficient
                code. However, unlike the first project we used mock data as
                there were time constraints. Overall, this hackathon taught us
                in many ways how to operate quickly and efficiently making sure
                that we practice teamwork and collaboration under time pressure.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default JoinRide
