// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import Physio from "./pages/Physio";
import Explore from "./pages/Explore";
import Diet from "./pages/Diet";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Padding to prevent Navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/physio" element={<Physio />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
