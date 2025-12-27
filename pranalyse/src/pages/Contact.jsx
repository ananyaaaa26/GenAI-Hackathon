import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-blue text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-white text-center max-w-xl mx-auto mb-8">
        Have questions, feedback, or want to collaborate? Send us a message!
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto bg-white text-black rounded-lg shadow-lg p-8 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
        />
        <button
          type="submit"
          className="bg-violet hover:bg-lavender text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
