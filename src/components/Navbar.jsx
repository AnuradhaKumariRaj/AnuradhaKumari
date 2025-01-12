import logo from "../assets/anuradhalogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
  <nav className="mb-20 flex items-center justify-between py-6"> 
  <div className="flex flex-shrink-0 items-center"> 
  <img className="mx-2 w-20" src={logo} alt="logo"/>
   {/* <img className="mx-2 w-20" src={logo} alt="logo" style={{ marginLeft: '-40px', height: '5vmin' }}/> */}
  </div>
  <div className="m-8">
   {/* Hamburger menu for mobile */}
   <div className="flex justify-between items-center md:hidden">
        {/* <h1 className="text-2xl font-bold">My Website</h1> */}
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
  </div>
  {/* Dropdown menu for mobile */}
  {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden text-xl font-thin tracking-tight">
          <a
            href="#home"
            className="nav_items text-white hover:text-yellow-500 hover:underline"
          >
            Home
          </a>
          <a
            href="#AboutMe"
            className="nav_items text-white hover:text-yellow-500 hover:underline"
          >
            About Me
          </a>
          <a
            href="#Technologies"
            className="nav_items text-white hover:text-yellow-500 hover:underline"
          >
            Technologies
          </a>
          <a
            href="#Experience"
            className="nav_items text-white hover:text-yellow-500 hover:underline"
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="nav_items text-white hover:text-yellow-500 hover:underline"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav_items text-white hover:text-yellow-500 hover:underline"
          >
            Contacts
          </a>
        </div>
      )}

      {/* Horizontal menu for larger screens */}
      <div className="hidden md:flex items-center justify-center gap-4 text-xl font-thin tracking-tight">
        <a
          href="#home"
          className="nav_items text-white hover:text-yellow-500 hover:underline"
        >
          Home
        </a>
        <a
          href="#AboutMe"
          className="nav_items text-white hover:text-yellow-500 hover:underline"
        >
          About Me
        </a>
        <a
          href="#Technologies"
          className="nav_items text-white hover:text-yellow-500 hover:underline"
        >
          Technologies
        </a>
        <a
          href="#Experience"
          className="nav_items text-white hover:text-yellow-500 hover:underline"
        >
          Experience
        </a>
        <a
          href="#Projects"
          className="nav_items text-white hover:text-yellow-500 hover:underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="nav_items text-white hover:text-yellow-500 hover:underline"
        >
          Contacts
        </a>
      </div>
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <FaLinkedin />
    <FaGithub />
    <FaTwitter />
    <FaInstagram />
  </div>
  </nav>
);
};

export default Navbar