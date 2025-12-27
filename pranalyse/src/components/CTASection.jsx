import React from "react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-violet px-6 py-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Ready to move smarter?</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Start your journey with PRANALYSE and get AI-powered feedback instantly.
      </p>
      <Link to="/profile" className="bg-lavender hover:bg-blue text-black px-6 py-3 rounded-md font-semibold transition">
        Go to Profile
      </Link>
    </section>
  );
}

export default CTASection;
