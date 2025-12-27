import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-bold text-violet mb-4 text-center">
        Welcome to PRANALYSE
      </h1>
      <p className="text-xl text-black mb-8 text-center max-w-xl">
        AI-Powered Real-Time Movement, Posture & Wellness Intelligence. Analyse your prana. Move smarter. Live better.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/yoga" className="bg-violet hover:bg-lavender text-white px-6 py-3 rounded-md font-semibold transition">
          Yoga Module
        </Link>
        <Link to="/physio" className="bg-blue hover:bg-lavender text-white px-6 py-3 rounded-md font-semibold transition">
          Physio Module
        </Link>
        <Link to="/explore" className="bg-lavender hover:bg-blue text-black px-6 py-3 rounded-md font-semibold transition">
          Explore
        </Link>
        <Link to="/diet" className="bg-black hover:bg-violet text-white px-6 py-3 rounded-md font-semibold transition">
          Diet Recommendations
        </Link>
        <Link to="/profile" className="bg-violet/80 hover:bg-violet text-white px-6 py-3 rounded-md font-semibold transition">
          Profile
        </Link>
      </div>
    </section>
  );
}

export default Home;
