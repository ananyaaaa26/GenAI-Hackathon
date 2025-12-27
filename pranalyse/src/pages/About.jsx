import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-lavender text-black px-6 py-12">
      <h1 className="text-4xl font-bold text-violet mb-6 text-center">
        About PRANALYSE
      </h1>
      <p className="text-lg text-black text-center max-w-2xl mx-auto mb-8">
        PRANALYSE is an AI-powered platform designed to analyze human movement, posture, and wellness in real-time. Our goal is to provide personalized guidance for yoga, physiotherapy, fitness, and diet—all in one intelligent system.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
          <h2 className="text-xl font-semibold text-violet mb-2">Mission</h2>
          <p>To make wellness intelligent, accessible, and safe for everyone.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
          <h2 className="text-xl font-semibold text-blue mb-2">Vision</h2>
          <p>To become the core intelligence layer for movement, habits, and lifestyle worldwide.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
          <h2 className="text-xl font-semibold text-lavender mb-2">Impact</h2>
          <p>Reduce injuries, improve posture, and empower users to live healthier, smarter lives.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
