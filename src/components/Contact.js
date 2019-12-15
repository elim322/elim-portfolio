import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <h2>Interested in working together?</h2>
        <form
          name="contact"
          method="post"
          action="#"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
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
            <a href="mailto:einer.lim322@gmail.com">einer.lim322@gmail.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone (Canada)</h3>
            <a href="tel:+16043498007">
              <span>(604) 349-8007</span>
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone (Philippines)</h3>
            <a href="tel:+639178959828">
              <span>(+63) 917-895-9828</span>
            </a>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
