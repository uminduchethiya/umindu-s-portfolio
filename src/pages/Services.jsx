// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard.jsx";
import StatsSection from "../components/StatsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
// src/pages/Services.js
import HeroSection from "../components/HeroSection";
import homeBg from "../assets/img/home-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Framer Motion Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <div>
        <HeroSection
          title="My Skills & Expertise"
          subtitle="Full Stack Developer & Tech Enthusiast"
          paragraph="Passionate about creating innovative solutions and bringing ideas to life through code. Let's build something amazing together."
          backgroundImage={homeBg}
        />
        <div className="p-8">
          <h3 className="text-5xl font-bold font-montserrat text-center">
            What I Do
          </h3>
          <p className="mt-4 text-xl font-montserrat text-center">
            From concept to deployment, I specialize in creating modern,
            scalable solutions that solve real-world problems and deliver
            exceptional user experiences.
          </p>
        </div>
      </div>
      <div className="bg-white-100 py-12">
        <div className="container mx-auto px-4">
          {/* Skill Cards with Animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={cardVariants} data-aos="fade-up">
              <ServiceCard
                title="Full Stack Web Development"
                description="I create dynamic, responsive web applications using modern technologies.
                                 From front-end interfaces to robust back-end systems, I build complete solutions."
                points={[
                  "Laravel",
                  "React ",
                  "Node.js s",
                  "JavaScript & TypeScript",
                  "Tailwind",
                  "HTML5 & CSS3",
                  "RESTful APIs",
                  "Database Design (MySQL, MongoDB)",
                  "Version Control (Git)",
                  "Responsive Web Design",
                ]}
                imageUrl="https://img.icons8.com/?size=100&id=DzQFf09l3D1p&format=png&color=000000"
              />
            </motion.div>
            <motion.div variants={cardVariants} data-aos="fade-up">
              <ServiceCard
                title="Software Development"
                description="I develop custom software solutions with clean, maintainable code.
                                 Experienced in various programming languages and development methodologies."
                points={[
                  "C# & .NET Framework",
                  "Python Programming",
                  "Object-Oriented Programming",
                  "Algorithm Design",
                  "Code Optimization",
                  "Testing & Debugging",
                  "Software Architecture",
                  "Problem Solving",
                ]}
                imageUrl="https://img.icons8.com/?size=100&id=9yWcmPXU9Yqy&format=png&color=000000"
              />
            </motion.div>
            <motion.div variants={cardVariants} data-aos="fade-up">
              <ServiceCard
                title="Mobile App Development"
                description="I build cross-platform mobile applications that provide seamless user experiences
                                 across iOS and Android devices."
                points={[
                  "React Native",
                  "Mobile UI/UX Design",
                  "App Store Deployment",
                  "Push Notifications",
                  "Mobile API Integration",
                  "Performance Optimization",
                  "Cross-Platform Solutions",
                ]}
                imageUrl="https://img.icons8.com/?size=100&id=K802902EP1kb&format=png&color=000000"
              />
            </motion.div>
            <motion.div variants={cardVariants} data-aos="fade-up">
              <ServiceCard
                title="UI/UX Design"
                description="I design intuitive user interfaces and craft engaging user experiences
                                 that make digital products both beautiful and functional."
                points={[
                  "Figma",
                  "Wireframing & Prototyping",
                  "User Research",
                  "Visual Design",
                  "Interaction Design",
                  "Usability Testing",
                  "Design Systems",
                  "Responsive Design Principles",
                ]}
                imageUrl="https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=000000"
              />
            </motion.div>
            <motion.div variants={cardVariants} data-aos="fade-up">
              <ServiceCard
                title="Database Management"
                description="I design and optimize database systems for efficient data storage and retrieval,
                                 ensuring scalability and performance for growing applications."
                points={[
                  "MySQL & PostgreSQL",
                  "MongoDB & NoSQL",
                  "Database Design",
                  "Query Optimization",
                  "Data Modeling",
                  "Backup & Recovery",
                  "Performance Tuning",
                  "Data Security",
                ]}
                imageUrl="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
              />
            </motion.div>
            <motion.div variants={cardVariants} data-aos="fade-up">
              <ServiceCard
                title="DevOps & Deployment"
                description="I handle the complete deployment pipeline, from development to production,
                                 ensuring smooth, scalable, and secure application delivery."
                points={[
                  "Cloud Platforms (AWS, Azure)",
                  "Docker & Containerization",
                  "CI/CD Pipelines",
                  "Server Management",
                  "Monitoring & Logging",
                  "Security Best Practices",
                  "Performance Monitoring",
                  "Automated Testing",
                ]}
                imageUrl="https://img.icons8.com/?size=100&id=o9r8HjgL7f74&format=png&color=000000"
              />
            </motion.div>
          </motion.div>

          {/* Personal Stats Section with Fade-in Animation */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-aos="fade-up"
          >
            <StatsSection
              stats={[
                { value: "2+", label: "Years of Development Experience" },
                { value: "10+", label: "Projects Successfully Completed" },
                { value: "8+", label: "Technologies I'm Proficient In" },
                { value: "100%", label: "Client Satisfaction Rate" },
              ]}
            />
          </motion.div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
