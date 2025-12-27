import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} PRANALYSE. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/about" className="hover:text-violet">About</Link>
          <Link to="/contact" className="hover:text-lavender">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
