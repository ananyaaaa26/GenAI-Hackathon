import React from "react";

function Profile() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-lavender mb-6 text-center">
        Profile & Progress
      </h1>
      <p className="text-lg text-white text-center max-w-xl mx-auto mb-8">
        Track your progress, view past sessions, and download your wellness reports.
      </p>
      <div className="flex justify-center">
        <img 
          src="/assets/images/profile-icon.svg" 
          alt="Profile" 
          className="w-48 rounded-md"
        />
      </div>
    </section>
  );
}

export default Profile;
