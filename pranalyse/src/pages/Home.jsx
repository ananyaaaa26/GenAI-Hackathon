import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-black flex flex-col items-center justify-center px-6 py-12">

      {/* 🔮 Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue/20 rounded-full blur-3xl animate-pulse delay-200"></div>

      {/* 🧘 Logo */}
      <img
        src="/assets/images/logo.png"
        alt="Pranalyse Logo"
        className="w-20 h-20 mb-6 animate-fadeIn"
      />

      {/* 🧠 Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-6">
        <span className="bg-gradient-to-r from-violet via-blue to-black bg-clip-text text-transparent">
          PRANALYSE
        </span>
      </h1>

      {/* ✨ Tagline */}
      <p className="text-xl md:text-2xl text-center max-w-2xl mb-10 font-light text-black/80 animate-fadeIn delay-150">
        AI-Powered Real-Time Movement, Posture & Wellness Intelligence.
        <br />
        <span className="font-medium text-violet">
          Analyse your prana. Move smarter. Live better.
        </span>
      </p>

      {/* 🚀 Navigation Buttons */}
      <div className="flex flex-wrap gap-4 justify-center animate-fadeIn delay-300">

        <Link to="/yoga" className="home-btn bg-violet text-white">
          Yoga Module
        </Link>

        <Link to="/physio" className="home-btn bg-blue text-white">
          Physio Module
        </Link>

        <Link to="/explore" className="home-btn bg-lavender text-black">
          Explore
        </Link>

        <Link to="/diet" className="home-btn bg-black text-white">
          Diet
        </Link>

        <Link to="/profile" className="home-btn bg-violet/80 text-white">
          Profile
        </Link>

      </div>

      {/* 👣 Subtle Footer Line */}
      <p className="mt-16 text-sm text-black/50">
        Built with AI • Designed for human movement
      </p>
    </section>
  );
}

export default Home;
