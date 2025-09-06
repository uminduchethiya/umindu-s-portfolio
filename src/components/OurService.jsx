import { useState, useRef } from "react";
import PropTypes from "prop-types";
import simplenglish from "../assets/img/simpleenglish.png";
import mathsonline from "../assets/img/mathsonline.png";
import venturebridge from "../assets/img/venturebridgee.png";
import sterlingpayroll from "../assets/img/steringbpo.png";
import vallhallperformace from "../assets/img/valhallaperformace.png";
import poppizza from "../assets/img/poppizza.png";
export default function OurService() {
  // Project items array
  const projects = [
    {
      imageUrl: simplenglish,
      title: "SimpleEnglish – Student LMS (INSAASH Pvt. Ltd.)",
      description:
        "A learning management system for students to manage assignments, assessments, and live learning sessions with real-time push notifications and secure payments.",
      link: "https://students.simpleenglish.lk/",
    },
    {
      imageUrl: mathsonline,
      title: "MathsOnline – Student LMS (INSAASH Pvt. Ltd.)",
      description:
        "Comprehensive LMS for assignments, grading, live classes, and video content delivery with automated bank slip approval and SMS payment alerts.",
      link: "https://students.mathsonline.lk/student/login",
    },
    {
      imageUrl: venturebridge,
      title: "VentureBridge – AI-powered Startup Matchmaking",
      description:
        "An AI-powered platform that connects startups with investors for faster, smarter investments. Features include intelligent matchmaking, real-time analytics, and streamlined communication tools.",
      link: "https://github.com/uminduchethiya/venturebridge.git",
    
    },
    
    {
      imageUrl: sterlingpayroll,
      title: "Sterling Payroll Advanced Module",
      description:
        "Extended payroll features including employee performance tracking, tax calculation automation, and advanced reporting.",
      link: "https://payroll.sterlingbpo.com.au/login",
    },
    {
      imageUrl: vallhallperformace,
      title: "Valhalla Performance (Sterling BPO Solutions Pvt. Ltd.)",
      description:
        "Gym management platform to manage workout schedules, progress tracking, and client engagement with real-time progress analytics.",
      link: "https://bifrost.vpbifrost.jplms.com.au/login",
    },
    {
      imageUrl: poppizza,
      title: "PopPizza – Online Pizza Ordering Website",
      description:
        "A general online pizza ordering platform with menu browsing, custom topping selection, online payments, and live order tracking.",
      link: "https://github.com/uminduchethiya/poppizza.git",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mt-8 mb-12 text-center text-gray-800">
        My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ServiceCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ imageUrl, title, description, link }) {
  ServiceCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string, // optional
  };
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);

    // Smooth scroll animation upward
    let currentScroll = 0;
    intervalRef.current = setInterval(() => {
      currentScroll -= 2;
      if (currentScroll <= -20) {
        clearInterval(intervalRef.current);
        currentScroll = -20;
      }
      setScrollY(currentScroll);
    }, 16); // ~60fps
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    clearInterval(intervalRef.current);

    // Smooth scroll animation back to original position
    intervalRef.current = setInterval(() => {
      setScrollY((prev) => {
        if (prev >= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev + 1;
      });
    }, 16);
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200">
        <div
          className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700 ${
            isHovered ? "w-full" : "w-0"
          }`}
        ></div>
      </div>

      {/* Image Container with Scroll Effect */}
      {/* Image Container with Scroll Effect */}
      <div className="w-full h-80  bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
        <div
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY}px)` }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {link && (
          <div className="flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300 group-hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* Status Indicator */}
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isHovered ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className={`w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
