// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer motion
import HeroSection from "../components/HeroSection";
import Herocover from "../assets/companycover.jpeg";
import Heroimage from "../assets/coverbgremove2.png";
import mission from "../assets/img/missions.png";
import WhyChooseUsSection from "../components/WhyChooseUs.jsx";
import StatsSection from "../components/StatsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

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
                    title="About Our Company"
                    subtitle="Our Vision and Mission"
                    paragraph="Our goal is to provide exceptional customer service and deliver innovative solutions to businesses worldwide."
                    backgroundImage={Herocover}
                    image={Heroimage}
                />
            </motion.div>

            {/* Mission Section with animation */}
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
                            <span className="text-text-light">Our </span>
                            <span className="text-text-dark">Mission</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-semibold">
                            ZyGen Labs, established in 2023, is dedicated to driving innovation and delivering cutting-edge IT solutions that accelerate business growth. We focus on providing tailored, efficient, and reliable services to meet the unique needs of companies worldwide. With a commitment to excellence, we leverage our expertise to deliver high-quality, cost-effective solutions,
                            ensuring customer satisfaction and success in today’s fast-evolving digital landscape.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <motion.img
                            src={mission}
                            alt="Our Mission"
                            className="w-40 md:w-50 rounded-lg object-cover"
                            data-aos="fade-left" // Animation for the image
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

            {/* Stats Section with animation */}
            <motion.div
                data-aos="fade-up"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <StatsSection
                    stats={[
                        { value: "1+", label: "Years of Experience in the IT Industry" },
                        { value: "10+", label: "Satisfied Clients We Have Served" },
                        { value: "10+", label: "Recognitions Over Years" },
                        { value: "10+", label: "Projects We Have Done" },
                    ]}
                />
            </motion.div>

            {/* Team Section with Framer Motion */}
            <motion.section
                className="py-12 bg-white text-center"
                data-aos="fade-up"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="text-text-light">Meet </span>
                    <span className="text-text-dark">Our Team</span>
                </h2>

                <p className="text-lg max-w-2xl mx-auto mb-6 font-semibold text-gray-600">
                    Get to know the brilliant minds behind our innovative solutions.
                </p>
                <motion.button
                    className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 text-xl font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Meet the Team
                </motion.button>
            </motion.section>

            {/* Testimonials Section with animation */}
            <motion.div data-aos="fade-up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <TestimonialsSection />
            </motion.div>
        </div>
    );
}
