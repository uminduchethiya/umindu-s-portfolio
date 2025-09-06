// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion"; // Import motion
import HomeServiceCard from "../components/HomeServiceCard";
import OurService from "../components/OurService";
import HomeTab from "../components/HomeTab";
import homeBg from "../assets/img/home-bg.jpg";
import homeGirl from "../assets/img/firstimage.png";
import homeAbout from "../assets/img/firstimage.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 4.0 } },
  exit: { opacity: 0, y: -50 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 4.0 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 4.0 } },
};
const progressBarVariants = {
  hidden: { width: 0 },
  visible: (width) => ({
    width: `${width}%`,
    transition: { duration: 2 }, // Duration of the animation
  }),
};

const Home = () => {
  // Skills Data
  const softwareDevelopment = {
    title: "Software Development",
    description:
      "Building tailored software solutions to solve real-world problems.",
    progressValue: 95,
  };

  const mobileAppDevelopment = {
    title: "Mobile App Development",
    description:
      "Developing high-performing mobile apps with smooth user experiences.",
    progressValue: 90,
  };

  const webDevelopment = {
    title: "Web Development",
    description:
      "Designing and coding responsive, scalable, and modern websites.",
    progressValue: 95,
  };

  const uiUxDesign = {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging user experiences with clean design.",
    progressValue: 85,
  };

  return (
    <>
      {/* Hero Section Start */}
      <motion.div
        className="relative flex bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBg})` }}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-light z-10"></div>

        {/* Content */}
        <div className="container mx-auto p-4 flex lg:flex-row flex-col relative z-20 md:mt-10">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full flex flex-col gap-8 md:py-32 py-10 justify-center md:text-left text-center md:items-start items-center">
            <motion.h1
              className="text-6xl md:text-7xl font-bold leading-tight"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              Hi, I&apos;m{" "}
              <span className="text-text-dark">Umindu Chethiya</span>
            </motion.h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Trainee Software Engineer | Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Passionate about crafting scalable web & mobile applications with
              modern technologies like{" "}
              <span className="font-semibold">Laravel</span>,{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">.NET Core</span>, and{" "}
              <span className="font-semibold">Tailwind</span>. I love solving
              problems, building real-world projects, and continuously learning
              to stay ahead in software engineering.
            </p>
            <div className="flex gap-4">
              <a href="/contact">
                <button className="bg-button hover:bg-button-hover text-assest-1 py-3 px-6 rounded-xl transition duration-300 text-lg font-medium shadow-md">
                  LET&apos;S CONNECT
                </button>
              </a>
              <a href="/projects">
                {/* <button className="border border-button text-button hover:bg-button hover:text-white py-3 px-6 rounded-xl transition duration-300 text-lg font-medium shadow-md">
                  VIEW PROJECTS
                </button> */}
              </a>
            </div>
          </div>

          {/* Right Content (Cards Grid) */}
          <div
            className="lg:w-1/2 w-full md:block hidden h-[600px] bg-contain bg-no-repeat bg-center my-auto relative top-0"
            style={{ backgroundImage: `url(${homeGirl})` }}
          >
            {/* Background blur */}
            <div className="absolute inset-0 bg-gray-500 opacity-40 blur-3xl -z-10 rounded-full"></div>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 gap-6 h-full items-center cursor-default relative z-10">
              <HomeServiceCard {...softwareDevelopment} />
              <div></div>
              <div></div>
              <HomeServiceCard {...mobileAppDevelopment} />
              <HomeServiceCard {...webDevelopment} />
              <div></div>
              <div></div>
              <HomeServiceCard {...uiUxDesign} />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Hero Section End */}

      {/* Services Section Start */}
      <motion.div
        className="md:pt-20 pt-0 bg-bg-light"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="container mx-auto p-5">
          {/* Heading */}
          <motion.h1
            className="text-5xl font-bold"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            What I <samp className="text-text-dark">Offer</samp>
          </motion.h1>

          {/* Intro */}
          <div className="mt-5 w-full md:flex justify-between">
            <div className="md:w-3/4 w-full text-lg">
              <p>
                As a <span className="font-semibold">Full Stack Developer</span>
                , I bring together skills in web, mobile, and software
                development to deliver high-quality digital solutions. Whether
                it&apos;s creating robust backends, designing user-friendly
                interfaces, or developing mobile apps, I focus on building
                products that are efficient, scalable, and impactful.
              </p>
            </div>

            {/* Button */}
            <div className="md:w-1/4 w-full flex md:justify-end mt-5 md:mt-0">
              <a href="/projects">
                {/* <button className="bg-button hover:bg-button-hover text-assest-1 py-2 px-4 rounded-xl transition duration-300 w-fit md:self-start self-center text-lg font-medium shadow-md whitespace-nowrap">
                  VIEW MY WORK
                </button> */}
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="py-10">
            <OurService />
          </div>
        </div>
      </motion.div>

      {/* Services Section End */}

      {/* Tab Section Start */}
      <motion.div
        className="bg-bg-light"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="container mx-auto p-5">
          <div className="flex flex-col items-center gap-10 justify-center mb-10">
            <motion.h1
              className="text-5xl font-bold md:text-center"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              Discover My <samp className="text-text-dark">Core Expertise</samp>
            </motion.h1>
            <motion.p
              className="text-lg md:w-2/3 md:text-center"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              My technical expertise spans across modern web technologies,
              mobile development, and enterprise software solutions. I
              specialize in creating scalable, user-centric applications that
              drive business success.
            </motion.p>
          </div>
          <HomeTab />
        </div>
      </motion.div>
      {/* Tab Section End */}

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
      {/* About Section End */}
    </>
  );
};

export default Home;
