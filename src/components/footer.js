import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img
            className="a"
            src="https://media.licdn.com/dms/image/v2/D560BAQHwNpD3MX0HhQ/company-logo_200_200/company-logo_200_200/0/1725818638456/cybernauts_cvr_logo?e=2147483647&v=beta&t=nd7VELKrQsaSE4FCB2Jn69iMQpUmOUzWh3wh9S2xObc"
            alt="Cybernauts Logo"
          />
          <p>Pioneering the Future of Technology.</p>
        </div>
        <div className="sidebar">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="events.js">Events</a></li>
            <li><a href="members.js">Members</a></li>
            <li><a href="blog.js">Blog</a></li>
            <li><a href="contact.js">Contact us</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h4>Get in touch with us</h4>
          <p>Mail us at cybernauts@gmail.com</p>
          <p>📞 +91 22222 33333 | +91 88888 77777</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bi bi-instagram"></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bi bi-twitter"></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin"></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bi bi-whatsapp"></a>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "20px" }}>&copy; 2024 Cybernauts. All Rights Reserved</p>
    </footer>
  )
}
