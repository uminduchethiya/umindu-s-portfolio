// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from "../components/ServiceCard.jsx";
import StatsSection from "../components/StatsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
// src/pages/Services.js
import HeroSection from "../components/HeroSection";
import Herocover from "../assets/companycover.jpeg";
import Heroimage from "../assets/coverbgremove2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
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
                    title="Our Services"
                    subtitle="Exclusive Solutions for Your Business"
                    paragraph="We offer a wide range of IT services to support businesses in Sri Lanka and globally."
                    backgroundImage={Herocover}
                    image={Heroimage}
                />
                <div className="p-8">
                    <h3 className="text-5xl font-bold font-montserrat text-center">What We Offer</h3>
                    <p className="mt-4 text-xl font-montserrat text-center">
                        From IT solutions to business optimization, our services are designed to enhance your
                        operations and drive success.
                    </p>
                </div>
            </div>
            <div className="bg-white-100 py-12">
                <div className="container mx-auto px-4">
                    {/* Service Cards with Animation */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={cardVariants} data-aos="fade-up">
                            <ServiceCard
                                title="Web Development"
                                description="Enhance your online presence with our expert web development services.
                                 We specialize in building dynamic, responsive websites that deliver long-term digital impact."
                                points={[
                                    "Front-End Development",
                                    "Back-End Development",
                                    "Web Frameworks",
                                    "Responsive Design",
                                    "Web Security",
                                    "Database Management",
                                    "Web Performance Optimization",
                                    "API Integrations",
                                ]}
                                imageUrl="https://img.icons8.com/?size=100&id=DzQFf09l3D1p&format=png&color=000000"
                            />
                        </motion.div>
                        <motion.div variants={cardVariants} data-aos="fade-up">
                            <ServiceCard
                                title="Software Development"
                                description="Transform your business with our comprehensive software development services. We design, develop, and optimize solutions for smooth digital transformation and sustained success."
                                points={[
                                    "Coding and Implementation",
                                    "Collaboration and Communication",
                                    "Agile Development",
                                    "Documentation",
                                    "Deployment",
                                    "Maintenance and Update",
                                    "User Experience (UX) Design",
                                    "Quality Assurance",
                                ]}
                                imageUrl="https://img.icons8.com/?size=100&id=9yWcmPXU9Yqy&format=png&color=000000"
                            />
                        </motion.div>
                        <motion.div variants={cardVariants} data-aos="fade-up">
                            <ServiceCard
                                title="Mobile Application Development"
                                description="Enhance your brand with our mobile app development services. We create intuitive, feature-rich apps that deliver exceptional user experiences and drive business success."
                                points={[
                                    "Define Clear Objectives",
                                    "Identify Target Audience",
                                    "Intuitive User Interface",
                                    "Scalability",
                                    "Integration with Apis",
                                    "App Monetization Strategy",
                                    "Cross Platform Consideration",
                                    "App Store Optimization",
                                ]}
                                imageUrl="https://img.icons8.com/?size=100&id=K802902EP1kb&format=png&color=000000"
                            />
                        </motion.div>
                        <motion.div variants={cardVariants} data-aos="fade-up">
                            <ServiceCard
                                title="UI/UX Design"
                                description="Enhance user experiences with our UI/UX design services. We create visually captivating interfaces that ensure seamless interactions and maximize user engagement."
                                points={[
                                    "Responsive Design",
                                    "Consistent Branding",
                                    "Interactive Elements",
                                    "Clear Call-to-Action (CTA)",
                                    "Aesthetics and Visual Appeal",
                                    "Error Prevention and Handling",
                                    "User Flow Optimization",
                                    "Innovative Design Patterns",
                                ]}
                                imageUrl="https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=000000"
                            />
                        </motion.div>
                        <motion.div variants={cardVariants} data-aos="fade-up">
                            <ServiceCard
                                title="Digital Marketing"
                                description="At ZyGen Labs, we specialize in digital marketing to enhance your online presence. Achieve your marketing objectives with our innovative and results-driven solutions."
                                points={[
                                    "SEO strategy",
                                    "Content creation",
                                    "Social media management",
                                    "PPC advertising",
                                    "Email marketing",
                                    "Performance analysis",
                                    "Reporting",
                                    "Adaptation to trends",
                                ]}
                                imageUrl="https://img.icons8.com/?size=100&id=o9r8HjgL7f74&format=png&color=000000"
                            />
                        </motion.div>
                        <motion.div variants={cardVariants} data-aos="fade-up">
                            <ServiceCard
                                title="Cloud Hosting"
                                description="At ZyGen Labs, our cloud hosting services guarantee fast, secure, and reliable access to your business applications. We offer scalable solutions tailored to meet your specific needs."
                                points={[
                                    "Infrastructure setup",
                                    "Data migration",
                                    "Resource management",
                                    "Security implementation",
                                    "Backup and recovery",
                                    "Scalability",
                                    "Integration",
                                    "Monitoring and support",
                                ]}
                                imageUrl="https://img.icons8.com/?size=100&id=o9r8HjgL7f74&format=png&color=000000"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Stats Section with Fade-in Animation */}
                    <motion.div
                        variants={fadeInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        data-aos="fade-up"
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
                </div>

                {/* Contact Section */}
                <ContactSection />
            </div>
        </div>
    );
}
