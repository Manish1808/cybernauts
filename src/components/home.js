import React from "react";
import "./home.css"; 

const App = () => {
  return (
    <>
      {/* Top Header */}
      <header className="top-header">
        <div className="contact-info">
          <span>📞 +91 77777 88888 | +91 88888 99999</span>
          <span
            style={{
              position: "absolute",
              left: "780px",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }}
          >
            CVR College of Engineering
          </span>
        </div>
        <div className="admin-link">
          <a href="#">Admin?</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>CYBERNAUTS</h1>
        <p>Hackers Club</p>
        <h5>01 Dec 2024</h5>
        <h4>
          <i>"Innovating the future of Technology"</i>
        </h4>
        <button>View Event Highlights</button>
      </section>

      {/* Navigation */}
      <nav className="nav-bar">
        <a href="/">Home</a>
        <a href="#">|</a>
        <a href="events.js">Events</a>
        <a href="#">|</a>
        <a href="Members.js">Members</a>
        <a href="#">|</a>
        <a href="Blog.js">Blog</a>
        <a href="#">|</a>
        <a href="contact.js">Contact</a>
      </nav>

      {/* About Section */}
      <section className="about">
        <h2>About Cybernauts</h2>
        <h3>Empowering Tomorrow's Innovators</h3>
        <div className="about-content">
          <div className="text-content">
            <h4>Who we are</h4>
            <p>
              "A community of passionate CSE students
              <br />
              pushing the boundaries of technology."
              <br />
            </p>
            <h4>Our Mission</h4>
            <p>
              "To foster a collaborative environment <br />
              where students can grow through hands-on <br />
              learning, events, and innovation."
            </p>
            <button>View our Members</button>
          </div>
          <div className="image-content">
            <img
              src="https://fliplet.com/wp-content/w3-webp/uploads/2024/01/What-is-a-hackathon.pngw3.webp"
              alt="Hackathon Event"
            />
          </div>
        </div>
      </section>

      {/* Recent Event Section */}
      <section className="recent-event">
        <h2>What we Do?</h2>
        <h3 style={{marginBottom:'-10px'}}>Our recent event</h3>
        <div className="event-content">
          <img
            src="https://news.microsoft.com/wp-content/uploads/prod/sites/45/2019/07/Teamshacking@Microsoft2019hackathon_-960x630.jpg"
            alt="Recent Hackathon Event"
          />
          <h4 style={{marginBottom:'50px'}}>
            <strong>Hacker's Club (Name of recent event)</strong>
          </h4>
          <p>
            Some description of what the event was about and what outcomes it
            produced along
            <br />
            with how it went and the people who invited (guests if any) and
            something else...
          </p>
          <button>Join Us</button>
        </div>
      </section>
    </>
  );
};

export default App;
