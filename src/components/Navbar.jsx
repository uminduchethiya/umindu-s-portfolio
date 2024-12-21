// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the mobile menu when screen width exceeds 768px (for desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false); // Close mobile menu on desktop size
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-bg-dark text-text-light shadow-md  font-roboto fixed z-50 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="" className="w-32 h-auto" />

        {/* Mobile Menu Toggle */}
        <button
          className="text-2xl md:hidden focus:outline-none text-text-dark"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaBars /> : <FaBars />}
        </button>

        {/* Links for desktop */}
        <div className="hidden md:flex lg:space-x-16 md:space-x-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Services
          </NavLink>
          {/* <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Careers
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Contact Us
          </NavLink>
          <button className="bg-button hover:bg-button-hover text-assest-1 py-2 px-4 rounded transition duration-300">
            Button
          </button>
        </div>


      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${isMobileMenuOpen ? "fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40 translate-x-0 duration-500" : "fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40 -translate-x-full duration-700"} transform transition-transform  ease-in-out`}
        onClick={toggleMobileMenu} // Close the menu when clicking on the overlay
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-bg-dark text-text-light transform transition-transform  ease-in-out ${isMobileMenuOpen ? "translate-x-0 duration-700" : "-translate-x-full duration-500"} z-50`}
      >
        <div className="p-4 flex flex-col gap-4">
          <button
            className="text-2xl focus:outline-none mb-4 flex justify-end"
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </button>
          <NavLink
            to="/"
            onClick={closeMobileMenu}  // Close menu on link click
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMobileMenu}  // Close menu on link click
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMobileMenu}  // Close menu on link click
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Services
          </NavLink>
          {/* <NavLink
            to="/case-studies"
            onClick={closeMobileMenu}  // Close menu on link click
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/careers"
            onClick={closeMobileMenu}  // Close menu on link click
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Careers
          </NavLink> */}
          <NavLink
            to="/contact"
            onClick={closeMobileMenu}  // Close menu on link click
            className={({ isActive }) =>
              isActive
                ? "text-text-dark hover:text-text-dark font-bold transition duration-300"
                : "hover:text-text-dark font-bold transition duration-300"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
