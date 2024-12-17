import { useState } from "react";
import PartnerCarousel from "./PartnerCarousel.jsx";

const WhyChooseUsSection = () => {
    const panels = [
        {
            title: "We Are Customer-Centric",
            description:
                "Being customer-centric we prioritize the needs, satisfaction, and experience of our clients above all else. We tailor our solutions to align with their unique goals, providing personalized support and attentive service throughout every stage of their journey with us. Our commitment to being customer-centric ensures that their success remains at the forefront of everything we do.",
        },
        {
            title: "We Are Pioneers",
            description:
                "We embrace innovation to create groundbreaking solutions and help businesses achieve their potential. Our team thrives on creativity and adaptability to solve challenges with ingenuity.",
        },
        {
            title: "We Are Efficiency Experts",
            description:
                "We optimize business processes to improve productivity and deliver measurable results. Efficiency is at the core of our operations, ensuring our solutions are both effective and sustainable.",
        },
        {
            title: "We Are Collaboration",
            description:
                "We foster partnerships that enhance mutual growth and success. Through collaboration, we create shared value and strengthen relationships.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light">
                            Why <span className="text-blue-600">Choose Us</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-semibold">
                            Choose “Sterling software solution” for your software solution
                            needs and experience the difference that over a decade of industry
                            expertise can make. Our track record speaks volumes, with a proven
                            history of delivering intelligent, cost-effective, and innovative
                            outsourcing solutions that propel companies to success worldwide.
                            Trust in our experience and dedication to elevate your business to
                            new heights.
                        </p>
                    </div>

                    {/* Right Side - Accordion Panels */}
                    <div>
                        {panels.map((panel, index) => (
                            <AccordionPanel
                                key={index}
                                title={panel.title}
                                description={panel.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Partners Section */}
                <div className="mt-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-light">
                        Our <span className="text-blue-600">Partners</span>
                    </h2>
                    <PartnerCarousel></PartnerCarousel>
                </div>
            </div>
        </section>
    );
};

// eslint-disable-next-line react/prop-types
const AccordionPanel = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border rounded-lg shadow-sm mb-4">
            <div
                className={`p-4 flex items-center justify-between ${
                    isExpanded ? "bg-black text-white" : "bg-gray-200 text-black"
                } cursor-pointer`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h3 className="font-bold text-lg">{title}</h3>
                <div
                    className={`w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center ${
                        isExpanded ? "bg-blue-600" : ""
                    }`}
                >
          <span
              className={`text-white text-xs transition-transform ${
                  isExpanded ? "rotate-45" : ""
              }`}
          >
            +
          </span>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="p-4 bg-white text-gray-600">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;
