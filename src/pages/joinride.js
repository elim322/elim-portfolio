import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import Passenger from '../assets/images/JoinRidePassenger.png'
import Profile from '../assets/images/JoinRideProfile.png'
import Role from '../assets/images/JoinRideRole.png'

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
            <h2>JoinRide</h2>
          </header>
          <p>
            JoinRide is a ride sharing app created by me and 3 of my colleagues
            at RED Academy. It matches a driver and passenger who are going to
            the same location together. We used Meteor + MongoDB built with
            React to create the app.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={Profile} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Our Inspiration</h3>
              </header>
              <p>
                Our inspiration stemmed from creating a possible solution to
                getting around in the Philippines. By matching drivers and
                passengers who are going in the same direction we can try to
                minimize traffic and make it convenient for drivers to earn a
                bit of money on the side during their morning or evening
                commute.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="#" className="image">
            <img src={Passenger} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Functionality</h3>
              </header>
              <p>
                Users: both driver and passenger alike will be able to choose a
                location and once a location has been chosen a passenger list
                drops down for the driver which will show a list of people
                heading to the same direction. The driver picks a passenger and
                the passenger confirms the selection viola!
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={Role} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>What we've learned</h3>
              </header>
              <p>
                We decided to go beyond our comfort zone by creating a matching
                app which none of us have done before. Our matching process is
                based on creating states and using conditionals to check the
                state of the driver and passenger from setting a location to
                matching and to trip completion. It was a long process to get
                the matching algorithm right, but it was well worth it.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default JoinRide
