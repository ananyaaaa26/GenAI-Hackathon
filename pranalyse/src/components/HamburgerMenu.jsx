// HamburgerMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

function HamburgerMenu({ setIsOpen }) {
  return (
    <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col items-center py-6 space-y-4 z-40">
      {["Yoga","Physio","Explore","Diet","Profile","About","Contact"].map((page) => (
        <Link
          key={page}
          to={`/${page.toLowerCase()}`}
          className="text-black text-lg font-semibold hover:text-violet"
          onClick={() => setIsOpen(false)}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}

export default HamburgerMenu;
