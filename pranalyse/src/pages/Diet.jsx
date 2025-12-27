import React from "react";

function Diet() {
  return (
    <section className="min-h-screen bg-violet text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-lavender mb-6 text-center">
        Diet Recommendations
      </h1>
      <p className="text-lg text-white text-center max-w-xl mx-auto mb-8">
        Personalized nutrition plans aligned with your workouts and habits for optimal results.
      </p>
      <div className="flex justify-center">
        <img 
          src="/assets/images/diet-icon.svg" 
          alt="Diet Demo" 
          className="w-48 rounded-md"
        />
      </div>
    </section>
  );
}

export default Diet;
