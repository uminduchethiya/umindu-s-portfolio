// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import HomeServiceCard from '../components/HomeServiceCard';
import OurService from '../components/OurService';
import HomeTab from '../components/HomeTab';
import homeBg from '../assets/img/home-bg.jpg';
import homeGirl from '../assets/img/home-girl.png';
import homeAbout from '../assets/img/home-about.png';

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
  const softwareDevelopment = {
    title: 'Software Development',
    description: 'Creating computer programs and applications to fulfill specific functions or tasks.',
    progressValue: 95,
  };

  const mobileAppDevelopment = {
    title: 'Mobile App Development',
    description: 'Creating mobile apps involves designing and building for smartphones and tablets.',
    progressValue: 95,
  };

  const webDevelopment = {
    title: 'Web Development',
    description: 'Creating websites involves both front-end design and back-end programming.',
    progressValue: 95,
  };

  const uiUxDesign = {
    title: 'UI/UX Design',
    description: 'Focuses on creating user-friendly and aesthetically pleasing digital interfaces.',
    progressValue: 95,
  };


  return (
    <>
      {/* Hero Section Start */}
      <motion.div
        className="relative flex bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBg})` }}
        variants={fadeInUp} // Add motion variants
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Overlay with lower z-index */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-light z-10"></div>

        {/* Content with higher z-index */}
        <div className="container mx-auto p-4 flex lg:flex-row flex-col relative z-20 md:mt-10">
          <div className="lg:w-1/2 w-full flex flex-col gap-8 md:py-32 py-10 justify-center md:text-left text-center md:items-start items-center">
            <motion.h1 className="text-7xl font-bold" variants={fadeInLeft} initial="hidden" animate="visible">
              Pinnacle of Software Brilliance
              {/* <br /> <p
                style={{
                  paddingTop: '10px',
                  color: 'transparent',
                  fontFamily: '"Roboto", Sans-serif',
                  fontSize: '70px',
                  fontWeight: '700',
                  WebkitTextStroke: '2px #0866ff',  // Webkit-specific property
                  strokeWidth: '2px',
                  stroke: '#0866ff',  // Stroke color for non-webkit browsers
                }}
              >
                Software Brilliance
              </p> */}
            </motion.h1>
            <p>
              Empowering businesses with cutting-edge software for seamless integration and sustained
              growth in the dynamic digital landscape. Your success, our commitment.
            </p>
            <button className="bg-button hover:bg-button-hover text-assest-1 py-2 px-4 rounded transition duration-300 w-fit md:self-start self-center">
              LET'S TALK
            </button>
          </div>

          <div
            className="lg:w-1/2 w-full md:block hidden h-[600px] bg-contain bg-no-repeat bg-center my-auto relative top-0"
            style={{ backgroundImage: `url(${homeGirl})` }}
          >
            {/* Background blur overlay */}
            <div className="absolute inset-0 bg-gray-500 opacity-50 blur-3xl -z-10 rounded-full"></div>

            {/* Main content with image in the foreground */}
            <div className="grid grid-cols-2 gap-4 h-full items-center cursor-default relative z-10">
              <HomeServiceCard
                title={softwareDevelopment.title}
                description={softwareDevelopment.description}
                progressValue={softwareDevelopment.progressValue}
              />
              <div></div>
              <div></div>
              <HomeServiceCard
                title={mobileAppDevelopment.title}
                description={mobileAppDevelopment.description}
                progressValue={mobileAppDevelopment.progressValue}
              />
              <HomeServiceCard
                title={webDevelopment.title}
                description={webDevelopment.description}
                progressValue={webDevelopment.progressValue}
              />
              <div></div>
              <div></div>
              <HomeServiceCard
                title={uiUxDesign.title}
                description={uiUxDesign.description}
                progressValue={uiUxDesign.progressValue}
              />
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
          <motion.h1 className="text-5xl font-bold" variants={fadeInLeft} initial="hidden" animate="visible">
            How We Can <samp className="text-text-dark">Help You</samp>
          </motion.h1>
          <div className="mt-5 w-full md:flex justify-between">
            <div className="md:w-3/4 w-full text-lg">
              <p>
                Our services encompass cutting-edge solutions, tailored to meet your unique needs.
                From software development to design, we drive innovation, efficiency, and success
                for your business.
              </p>
            </div>
            <div className="md:w-1/4 w-full flex md:justify-end mt-5 md:mt-0">
              <button className="bg-button hover:bg-button-hover text-assest-1 py-2 px-4 rounded transition duration-300 w-fit md:self-start self-center text-lg whitespace-nowrap">
                view all services
              </button>
            </div>
          </div>
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
            <motion.h1 className="text-5xl font-bold md:text-center" variants={fadeInLeft} initial="hidden" animate="visible">
              Explore Our <samp className="text-text-dark">Core Competencies</samp>
            </motion.h1>
            <motion.p className="text-lg md:w-2/3 md:text-center" variants={fadeInRight} initial="hidden" animate="visible">
              Our services encompass cutting-edge solutions, tailored to meet your unique needs.
              From software development to design, we drive innovation, efficiency, and success for
              your business.
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
                    <h3 className="text-white text-5xl font-bold">1+</h3>
                  </div>
                  <div className="px-4">
                    <p className="text-white text-lg font-semibold">Years</p>
                    <p className="text-white text-lg font-semibold">Experience</p>
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
                      <h3 className="text-white text-5xl font-bold">10+</h3>
                    </div>
                    <div className="px-4">
                      <p className="text-white text-lg font-semibold">Projects</p>
                      <p className="text-white text-lg font-semibold">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:mt-24">
            <div className="md:mb-16 mb-10">
              <motion.h1 className="text-5xl font-bold" variants={fadeInLeft} initial="hidden" animate="visible">
                About <span className="text-text-dark">Us</span>
              </motion.h1>
            </div>
            <div className="space-y-5 text-lg">
              <p>
                We are an IT/BPO Company based in Australia and Sri Lanka. We offer innovative
                software solutions to improve and enhance operations for businesses of all sizes.
              </p>
              <p>
                Our success is driven by our team of experts who are dedicated to delivering top-notch
                solutions, from conceptualization to execution, enabling businesses to thrive.
              </p>
            </div>
            <div className="space-y-4 mb-10">
              {/* Progress Bars */}
              <div>
                <p className="mb-2 text-sm">Community Engagement</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-text-dark h-2 rounded-full"
                    initial="hidden"
                    animate="visible"
                    custom={70} // Pass the percentage value as a custom prop
                    variants={progressBarVariants}
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm">Team Growth</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-text-dark h-2 rounded-full"
                    initial="hidden"
                    animate="visible"
                    custom={50}
                    variants={progressBarVariants}
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm">Continuous Improvement</p>
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
            </div>
            <p className="text-lg mb-10">We are active in the Australian market, providing 365 days of committed
              Software Solutions Service.</p>
            <button
              className="bg-button hover:bg-button-hover text-assest-1 py-2 px-4 rounded transition duration-300 w-fit">
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
      {/* About Section End */}
    </>
  );
};

export default Home;
