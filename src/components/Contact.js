import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <h2>Interested in working together?</h2>
        <form name="contact" method="post" action="#" data-netlify="true">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="#">einer.lim322@gmail.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>(604) 349-8007</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              6533 Buswell St.
              <br />
              Richmond, BC V6Y 2G9
              <br />
              Canada
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
