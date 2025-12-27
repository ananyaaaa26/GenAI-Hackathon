import React from "react";

function Physio() {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-12">
      <h1 className="text-4xl font-bold text-blue mb-6 text-center">
        Physiotherapy Module
      </h1>
      <p className="text-lg text-black text-center max-w-xl mx-auto mb-8">
        Safe rehabilitation exercises with instant posture correction and recovery tracking.
      </p>
      <div className="flex justify-center">
        <img 
          src="/assets/images/skeleton-demo.gif" 
          alt="Physio Demo" 
          className="w-full max-w-lg rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}

export default Physio;
