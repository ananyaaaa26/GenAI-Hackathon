import React from "react";

function Yoga() {
  return (
    <section className="min-h-screen bg-lavender text-black px-6 py-12">
      <h1 className="text-4xl font-bold text-violet mb-6 text-center">
        Yoga Module
      </h1>
      <p className="text-lg text-black text-center max-w-xl mx-auto mb-8">
        Real-time posture guidance and alignment correction for yoga enthusiasts.
      </p>
      <div className="flex justify-center">
        <img 
          src="/assets/images/skeleton-demo.gif" 
          alt="Yoga Demo" 
          className="w-full max-w-lg rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}

export default Yoga;
