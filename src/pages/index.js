import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import foodbuddy from '../assets/images/foodbuddy.png'
import pic06 from '../assets/images/pic06.jpg'
import joinride from '../assets/images/joinride.png'
import clt from '../assets/images/clt.png'
import instanews from '../assets/images/instanews.png'
import pong from '../assets/images/pong.png'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${joinride})` }}>
              <header className="major">
                <h3>JoinRide</h3>
                <p>A Carpool App made with MeteorJS</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${clt})` }}>
              <header className="major">
                <h3>Community Land Trust</h3>
                <p>A custom WordPress website</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article
              style={{
                backgroundImage: `url(${foodbuddy})`,
                backgroundSize: 'contain',
              }}
            >
              <header className="major">
                <h3>FoodBuddy</h3>
                <p>A React Native iOS Application</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article
              style={{
                backgroundImage: `url(${instanews})`,
                backgroundSize: 'contain',
              }}
            >
              <header className="major">
                <h3>InstaNews</h3>
                <p>A website that pulls data from NYTimes</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pong})` }}>
              <header className="major">
                <h3>Pong</h3>
                <p>Classic Pong Game written in JavaScript</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>CrossFire</h3>
                <p>Coming Soon</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <ul className="actions">
                <li>
                  <Link to="/about" className="button next">
                    Learn more about me!
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
