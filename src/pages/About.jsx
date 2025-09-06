// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer motion
import HeroSection from "../components/HeroSection";
import Herocover from "../assets/companycover.jpeg";
import Heroimage from "../assets/coverbgremove2.png";
import mission from "../assets/img/missions.png";
import WhyChooseUsSection from "../components/WhyChooseUs.jsx";
import homeAbout from "../assets/img/firstimage.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 4.0 } },
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (width) => ({
    width: `${width}%`,
    transition: { duration: 2 }, // Duration of the animation
  }),
};

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      once: false, // Whether animation should trigger only once
    });
  }, []);

  return (
    <div>
      {/* Hero Section with Framer Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }} // Fade in animation for Hero Section
      >
        <HeroSection
          title="About Me"
          subtitle="My Journey in Software Engineering"
          paragraph=" My goal is to keep learning, growing, and contributing to meaningful projects that create real impact."
          backgroundImage={Herocover}
          image={Heroimage}
        />
      </motion.div>

      {/* Mission Section */}
      <motion.section
        className="py-12 bg-white container mx-auto px-4"
        data-aos="fade-up"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:flex items-start gap-6">
          <div className="flex-1">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">
              <span className="text-text-light">My </span>
              <span className="text-text-dark">Mission</span>
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              My mission is to sharpen my skills in software engineering while
              delivering reliable, creative, and scalable solutions for the
              digital world. I strive to stay curious, embrace challenges, and
              apply my knowledge to build impactful applications that bring
              value to businesses and communities alike.
            </p>
          </div>
          <div className="flex-shrink-0">
            <motion.img
              src={mission}
              alt="My Mission"
              className="w-40 md:w-50 rounded-lg object-cover"
              data-aos="fade-left"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section with Framer Motion */}
      <motion.div data-aos="fade-up">
        <WhyChooseUsSection />
      </motion.div>

      {/* About Section Start */}
      <div className="bg-bg-light">
        <div className="container mx-auto p-5 md:flex">
          {/* Left Section */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative md:p-20 w-full h-full">
              {/* Decorative background blur */}
              <div className="w-96 h-96 bg-text-dark rounded-full blur-3xl absolute inset-0 mx-auto my-auto"></div>
              {/* Main Content */}
              <div className="relative z-10">
                <div className="bg-text-dark py-4 px-4 flex w-fit rounded-lg animate-slowBounce">
                  <div className="border-r-4 border-white px-4">
                    <h3 className="text-white text-5xl font-bold">1.5+</h3>
                  </div>
                  <div className="px-4">
                    <p className="text-white text-lg font-semibold">Years</p>
                    <p className="text-white text-lg font-semibold">
                      Experience
                    </p>
                  </div>
                </div>
                <img
                  src={homeAbout}
                  alt="Home About"
                  className="block w-full h-auto mx-auto mt-10"
                />
                <div className="flex justify-end mt-10 animate-slowBounce">
                  <div className="bg-text-dark py-4 px-4 flex w-fit rounded-lg">
                    <div className="border-r-4 border-white px-4">
                      <h3 className="text-white text-5xl font-bold">15+</h3>
                    </div>
                    <div className="px-4">
                      <p className="text-white text-lg font-semibold">
                        Projects
                      </p>
                      <p className="text-white text-lg font-semibold">
                        Completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:mt-24">
            <div className="md:mb-16 mb-10">
              <motion.h1
                className="text-5xl font-bold"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                About <span className="text-text-dark">Me</span>
              </motion.h1>
            </div>
            <div className="space-y-5 text-lg">
              <p>
                I am Umindu Chethiya, a dedicated Software Engineering graduate
                from Galle, Sri Lanka, with over 1.5 years of hands-on
                experience in web and mobile application development. I
                specialize in full-stack development with expertise in Laravel,
                React, .NET Core, and React Native.
              </p>
              <p>
                Currently working as a Trainee Software Engineer at Sterling BPO
                Solutions and freelancing with INSAASH Pvt. Ltd., I have
                successfully delivered scalable applications including payroll
                systems, gym management platforms, logistics tracking apps, and
                learning management systems.
              </p>
            </div>
            <div className="space-y-4 mb-10 mt-3">
              {/* Progress Bars */}
              <div>
                <p className="mb-2 text-sm">Full-Stack Development</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-text-dark h-2 rounded-full"
                    initial="hidden"
                    animate="visible"
                    custom={95} // Pass the percentage value as a custom prop
                    variants={progressBarVariants}
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm">Mobile App Development</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-text-dark h-2 rounded-full"
                    initial="hidden"
                    animate="visible"
                    custom={90}
                    variants={progressBarVariants}
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm">Database Management</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-text-dark h-2 rounded-full"
                    initial="hidden"
                    animate="visible"
                    custom={85}
                    variants={progressBarVariants}
                  />
                </div>
              </div>
            </div>
            <p className="text-lg mb-10">
              With a BEng in Software Engineering from London Metropolitan
              University and multiple diplomas, I bring strong technical skills,
              agile methodology experience, and a passion for creating
              innovative solutions that drive business growth.
            </p>
            <a href="/contact">
              <button className="bg-button hover:bg-button-hover text-assest-1 py-2 px-4 rounded transition duration-300 w-fit">
                LET&apos;S TALK
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
