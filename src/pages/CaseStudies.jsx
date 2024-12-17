import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Herocover from "../assets/companycover.jpeg";
import Heroimage from "../assets/coverbgremove2.png";
import Tabs from "../components/Tabs";
import AnimatedCards from "../components/CaseStudyCard";
import Phone from "../assets/img/call.png";
import Hovercall from "../assets/img/hovercall.png";
import Email from "../assets/img/email.png";
import Hoveremail from "../assets/img/hoveremail.png";
import CaseStudy from "../assets/img/casestudy.png";
import { motion } from "framer-motion"; // Import framer motion
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function CaseStudies() {
  const [isCallHovered, setIsCallHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      once: false, // Whether animation should trigger only once
    });
  }, []);
  return (
    <motion.div data-aos="fade-up">
      <div>
        <HeroSection
          title="About Our Company"
          subtitle="Our Vision and Mission"
          paragraph="We aim to deliver exceptional customer service and innovative solutions for businesses globally."
          backgroundImage={Herocover}
          image={Heroimage}
        />
        <div className="bg-bg-light">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-light z-0"></div>
          <div className="container mx-auto pt-10 font-roboto px-4 relative z-10">
            <Tabs />
            <AnimatedCards />
            <div className="flex flex-col  md:flex-row items-center md:items-start justify-center gap-8 leading-relaxed ">
              {/* Left Section */}
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Initiating Your{" "}
                  <span className="text-text-dark">Project</span> Conversation
                </h2>
                <p className="text-assest-2 ">
                  At Sterling Software Solution, we’re ready to turn your vision
                  into reality. Let’s embark on a journey of possibilities by
                  delving into the details of your project. Connect with us to
                  explore the innovative solutions and seamless execution that
                  define our commitment to excellence. Join hands with a team
                  that thrives on transforming ideas into impactful digital
                  solutions. Your vision, our expertise – let’s create something
                  extraordinary together.
                </p>

                <div className="mb-6 mt-10">
                  {/* Address and Call Us Section */}
                  <div className="flex flex-row justify-between gap-4 mt-6 leading-relaxed md:flex-row md:gap-20">
                    {/* Email Section */}
                    <div
                      className="flex flex-row items-center w-full md:w-1/2 group"
                      onMouseEnter={() => setIsEmailHovered(true)}
                      onMouseLeave={() => setIsEmailHovered(false)}
                    >
                      <img
                        src={isEmailHovered ? Hoveremail : Email}
                        alt="Email Icon"
                        className="w-10 h-10 mr-4 object-contain" // Smaller size for mobile
                      />
                      <p className="text-assest-2 text-left group-hover:cursor-pointer">
                        <span className="block font-semibold">Email:</span>
                        <span
                          className={`block ${
                            isEmailHovered ? "text-button-hover" : ""
                          } transition-colors`}
                        >
                          info@example.com
                        </span>
                      </p>
                    </div>

                    {/* Call Us Section */}
                    <div
                      className="flex flex-row items-center w-full md:w-1/2 group"
                      onMouseEnter={() => setIsCallHovered(true)}
                      onMouseLeave={() => setIsCallHovered(false)}
                    >
                      <img
                        src={isCallHovered ? Hovercall : Phone}
                        alt="Phone Icon"
                        className="w-10 h-10 mr-4 object-contain" // Smaller size for mobile
                      />
                      <p className="text-assest-2 text-left group-hover:cursor-pointer">
                        <span className="block font-semibold">Call Us:</span>
                        <span
                          className={`block ${
                            isCallHovered ? "text-button-hover" : ""
                          } transition-colors`}
                        >
                          +94 112 258 528
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              {/* Right Section */}
              <div className="w-full md:w-1/4 text-center md:text-left mt-10 md:mt-0">
                <img
                  src={CaseStudy}
                  alt="casestudy"
                  className="w-3/4 h-auto mx-auto md:w-auto" // Adjusted width for mobile
                />
              </div>
            </div>

            <div className="flex flex-col  md:flex-row items-center md:items-start justify-center mt-10 ">
              <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Left Section */}
                <div className="w-full md:w-3/4 text-center md:text-left flex flex-col md:flex-row justify-between items-center bg-button rounded-lg p-6 md:p-8 gap-6 md:gap-12">
                  {/* Text Section */}
                  <div className="flex-1 space-y-4 md:space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold">
                      <span className="text-assest-1">Empower Your </span>
                      <span className="">Business Journey</span>
                      <span className="text-assest-1">
                        {" "}
                        with Sterling Software Solution.
                      </span>
                    </h2>
                    <p className="text-sm md:text-base text-assest-1">
                      Whether you're looking to revamp your online presence or
                      embrace new digital solutions, our web development service
                      flexibly adapts to your evolving needs.
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="w-full md:w-1/4 flex flex-col items-center gap-4 md:gap-6">
                    <button className="bg-assest-1 text-text-dark font-bold py-2 md:py-3 px-4 md:px-6 rounded-full shadow hover:bg-gray-200 w-full md:w-56">
                      REQUEST DEMO
                    </button>
                    <button className="bg-black text-assest-1 font-bold py-2 md:py-3 px-4 md:px-6 rounded-full shadow hover:bg-gray-800 w-full md:w-56">
                      CONTACT US
                    </button>
                  </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/4 text-center md:text-left md:mt-0 ">
                  <div className="p-6 rounded-lg flex-1">
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold mb-4">
                        Subscribe for{" "}
                        <span className="text-text-dark">Newsletter</span>
                      </h2>
                      <div className="flex items-center mb-4">
                        <input
                          type="email"
                          placeholder="Your Email Address"
                          className="flex-1 px-4 py-2 border rounded-full focus:outline-none bg-gray-200  "
                        />
                      </div>
                      <div>
                        <button className="bg-button  w-full text-assest-1 font-bold py-2 px-4 rounded-full shadow hover:bg-button-hover">
                          SUBSCRIBE NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CaseStudies;
