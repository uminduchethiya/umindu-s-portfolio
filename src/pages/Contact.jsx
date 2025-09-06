// src/pages/Contact.js
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Herocover from "../assets/companycover.jpeg";
import Heroimage from "../assets/coverbgremove2.png";
import SriLanka from "../assets/img/slflag.png";
import Phone from "../assets/img/call.png";
import Address from "../assets/img/address.png";
import Hoveraddress from "../assets/img/hoveraddress.png";
import Hovercall from "../assets/img/hovercall.png";
import Email from "../assets/img/email.png";
import Hoveremail from "../assets/img/hoveremail.png";
import Hours from "../assets/img/hours1.png";
import HoverHours from "../assets/img/hoverhours2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import GoogleMapComponent from "../components/GoogleMapComponent";
import PartnerCarousel from "../components/PartnerCarousel";
import { motion } from "framer-motion"; // Import framer motion
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function Contact() {
  const [isAddressHovered, setIsAddressHovered] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isOpenHovered, setIsOpenHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      once: false, // Whether animation should trigger only once
    });
  }, []);
  return (
    <>
      <motion.div data-aos="fade-up">
        <div className="">
          <HeroSection
            title="Get in Touch"
            subtitle="Let’s Connect"
            paragraph="Have a project idea or just want to chat about software development? Feel free to reach out — I’m always open to collaborations, freelance opportunities, or networking."
            backgroundImage={Herocover}
            image={Heroimage}
          />
        </div>

        <div className="bg-bg-light">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-light z-0"></div>
          <div className="container mx-auto pt-10 font-roboto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
              {/* Left Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in touch with me
                </h2>
                <p className="text-assest-2">
                  I’m a passionate{" "}
                  <span className="font-semibold">Full Stack Developer</span>{" "}
                  based in Galle, Sri Lanka. Whether you’re looking to build an
                  app, collaborate on a project, or just say hi — I’d love to
                  hear from you!
                </p>

                {/* Contact Info */}
                <div className="mb-6 mt-10">
                  <div className="flex flex-col md:flex-row justify-between md:gap-20 mt-6 leading-relaxed">
                    {/* Address */}
                    <div
                      className="flex flex-col items-center md:flex-row md:items-start w-full md:w-1/2 group"
                      onMouseEnter={() => setIsAddressHovered(true)}
                      onMouseLeave={() => setIsAddressHovered(false)}
                    >
                      <img
                        src={isAddressHovered ? Hoveraddress : Address}
                        alt="Address Icon"
                        className="w-12 h-12 mb-2 md:w-8 md:h-8 md:mb-0 md:mr-4 object-contain"
                      />
                      <p className="text-assest-2 text-center md:text-left group-hover:cursor-pointer">
                        <span className="block font-semibold">Based in:</span>
                        <span
                          className={`block lg:whitespace-nowrap ${
                            isAddressHovered ? "text-button-hover" : ""
                          } transition-colors`}
                        >
                          Galle, Sri Lanka
                        </span>
                      </p>
                    </div>

                    {/* Phone */}
                    <div
                      className="flex flex-col items-center md:flex-row md:items-start w-full md:w-1/2 group"
                      onMouseEnter={() => setIsCallHovered(true)}
                      onMouseLeave={() => setIsCallHovered(false)}
                    >
                      <img
                        src={isCallHovered ? Hovercall : Phone}
                        alt="Phone Icon"
                        className="w-12 h-12 mb-2 md:w-7 md:h-8 md:mb-0 md:mr-4 object-contain"
                      />
                      <p className="text-assest-2 text-center md:text-left group-hover:cursor-pointer">
                        <span className="block font-semibold">Phone:</span>
                        <span
                          className={`block ${
                            isCallHovered ? "text-button-hover" : ""
                          } transition-colors`}
                        >
                          +94 77 293 3146
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col md:flex-row justify-between md:gap-32 md:mt-16 mt-4 leading-relaxed">
                    <div
                      className="flex flex-col items-center md:flex-row md:items-start w-full md:w-1/2 group"
                      onMouseEnter={() => setIsEmailHovered(true)}
                      onMouseLeave={() => setIsEmailHovered(false)}
                    >
                      <img
                        src={isEmailHovered ? Hoveremail : Email}
                        alt="Email Icon"
                        className="w-12 h-12 mb-2 md:w-8 md:h-8 md:mb-0 md:mr-4 object-contain"
                      />
                      <p className="text-assest-2 text-center md:text-left group-hover:cursor-pointer">
                        <span className="block font-semibold">Email:</span>
                        <span
                          className={`block ${
                            isEmailHovered ? "text-button-hover" : ""
                          } transition-colors`}
                        >
                          uminduchethiya@gmail.com
                        </span>
                      </p>
                    </div>

                    {/* Open Hours (Optional for portfolio) */}
                    <div
                      className="flex flex-col items-center md:flex-row md:items-start w-full md:w-1/2 group"
                      onMouseEnter={() => setIsOpenHovered(true)}
                      onMouseLeave={() => setIsOpenHovered(false)}
                    >
                      <img
                        src={isOpenHovered ? HoverHours : Hours}
                        alt="Open Hours Icon"
                        className="w-12 h-12 mb-2 md:w-8 md:h-8 md:mb-0 md:mr-4 object-contain"
                      />
                      <p className="text-assest-2 text-center md:text-left group-hover:cursor-pointer">
                        <span className="block font-semibold">Available:</span>
                        <span
                          className={`block ${
                            isOpenHovered ? "text-button-hover" : ""
                          } transition-colors`}
                        >
                          Mon - Fri: 9 AM - 6 PM
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 md:mt-20">
                    Connect with me:
                  </h2>
                  <div className="flex justify-center md:justify-start space-x-4 text-assest-1 mt-6">
                    <a
                      href="https://facebook.com/umindu.chethiya"
                      target="_blank"
                      className="p-2 rounded-full bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a
                      href="https://instagram.com/umindu.chethiya"
                      target="_blank"
                      className="p-2 rounded-full bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/umindu-chethiya"
                      target="_blank"
                      className="p-2 rounded-full bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
                    >
                      <FaLinkedinIn className="text-xl" />
                    </a>
                    <a
                      href="https://twitter.com/umindu_chethiya"
                      target="_blank"
                      className="p-2 rounded-full bg-button hover:bg-button-hover hover:text-assest-1 transition-colors"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
                <h2 className="text-3xl font-bold text-assest-2 mb-4">
                  Send me a Message
                </h2>
                <p className="text-assest-2 mb-8">
                  Interested in working together or have a question? Drop me a
                  line below, and I’ll get back to you as soon as possible.
                </p>

                {/* Contact Form */}
                <form className="leading-relaxed">
                  <div className="mb-4 leading-relaxed">
                    <label
                      htmlFor="name"
                      className="block text-left text-lg font-semibold text-text-dark"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-2 w-full rounded-lg shadow-sm border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-300 focus:outline-none bg-transparent"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="mb-4 leading-relaxed">
                    <label
                      htmlFor="email"
                      className="block text-left text-lg font-semibold text-text-dark"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-2 w-full rounded-lg shadow-sm border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-300 focus:outline-none bg-transparent"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className="mb-4 leading-relaxed">
                    <label
                      htmlFor="message"
                      className="block text-left text-lg font-semibold text-text-dark"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-2 w-full rounded-lg shadow-sm border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-300 focus:outline-none bg-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-button text-white font-semibold rounded-full hover:bg-button-hover text-center w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
