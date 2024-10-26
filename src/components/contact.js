import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="#">|</a></li>
          <li><a href="events.js">Events</a></li>
          <li><a href="#">|</a></li>
          <li><a href="Members.js">Members</a></li>
          <li><a href="#">|</a></li>
          <li><a href="blog.js">Blog</a></li>
          <li><a href="#">|</a></li>
          <li><a href="contact.js">Contact</a></li>
        </ul>
      </nav>

      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Reach out for any questions, feedback, and collaborations</p>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email" required />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4" placeholder="Your Feedback..." required></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
