import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } 
from "react-icons/fa";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100; // Stop at 100%
        }
        return prev + 10;
      });
    }, 200); // Simulate progress increment every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-assest-1 border-t font-roboto">
      <div className="container mx-auto px-4 py-6">
        {/* Progress Bar */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="w-full mt-4 md:w-1/4 md:mt-6">
            <div className="bg-assest-1 h-2 w-full relative">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-footer to-button transition-all rounded-full duration-200"
              ></div>
            </div>
          </div>

          <div className="w-full mt-2 md:w-3/4 md:mt-6 ">
            <div className="bg-gray-200 h-2 w-full rounded-full relative"></div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10" />
            <div className="text-center md:text-left">
              {/* <p className="font-semibold text-teal-700">Sterling</p>
                  <p className="text-sm text-gray-600">Software Solution</p> */}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center md:flex-row justify-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 text-sm text-assest-2 font-bold">
            <Link to="/" className="hover:text-text-dark">
              HOME
            </Link>
            <Link to="/about" className="hover:text-text-dark">
              ABOUT US
            </Link>
            <Link to="/services" className="hover:text-text-dark">
              SERVICES
            </Link>
            <Link to="/contact" className="hover:text-text-dark">
              CONTACT US
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 text-assest-1 mt-4 md:mt-0">
            <a
              href="#"
              className="p-2 rounded-full bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full  bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full  bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full  bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-300 h-10 bg-button flex items-center justify-center">
        <p className="text-[10px] sm:text-xs md:text-sm  font-bold text-assest-1 text-center">
          &copy; 2024 Copyrights by ZyGen Labs. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
