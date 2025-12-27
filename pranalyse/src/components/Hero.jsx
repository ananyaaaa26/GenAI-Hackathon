import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-violet mb-4 text-center">
        Analyse Your Prana. Move Smarter.
      </h1>
      <p className="text-xl text-black mb-8 text-center max-w-xl">
        AI-powered real-time movement, posture, and wellness intelligence.
      </p>
      <Link to="/yoga" className="bg-violet hover:bg-lavender text-white px-6 py-3 rounded-md font-semibold transition">
        Get Started
      </Link>
    </section>
  );
}

export default Hero;
