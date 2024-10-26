import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Events from "./components/events"
import Footer from "./components/footer";
import Blog from "./components/blog";
import Contact from "./components/contact";
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events.js" element={<Events />} />
        <Route path="/contact.js" element={<Contact />} />
        <Route path="/blog.js" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
