import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import Physio from "./pages/Physio";
import Explore from "./pages/Explore";
import Diet from "./pages/Diet";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App font-sans bg-white text-gray-900 min-h-screen">
        {/* Navbar with Hamburger menu */}
        <Navbar />

        {/* Page content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/physio" element={<Physio />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
