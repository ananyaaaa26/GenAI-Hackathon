import React from "react";

function Explore() {
  return (
    <section className="min-h-screen bg-blue text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        Explore Mode
      </h1>
      <p className="text-lg text-white text-center max-w-xl mx-auto mb-8">
        Quick exercises, gamified challenges, and streaks to keep you consistent daily.
      </p>
      <div className="flex justify-center">
        <img 
          src="/assets/videos/demo.mp4" 
          alt="Explore Demo" 
          className="w-full max-w-lg rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}

export default Explore;
