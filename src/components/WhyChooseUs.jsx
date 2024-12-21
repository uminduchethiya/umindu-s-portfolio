import { useState } from "react";
import PartnerCarousel from "./PartnerCarousel.jsx";

const WhyChooseUsSection = () => {
    const panels = [
        {
            title: "We Are Customer-Centric",
            description:
                "At ZyGen Labs, we are deeply committed to being customer-centric, placing the needs, satisfaction, and experience of our clients at the heart of everything we do. We customize our solutions to meet their unique goals, offering personalized support and dedicated service throughout every phase of their journey with us. Our focus on customer success ensures we consistently deliver results that drive their business forward.",
        },
        {
            title: "We Are Pioneers",
            description:
                "At ZyGen Labs, we embrace innovation to develop groundbreaking solutions that empower businesses to reach their full potential. Our team fosters creativity and adaptability, tackling challenges with innovative approaches to drive success.",
        },
        {
            title: "We Are Efficiency Experts",
            description:
                "We streamline business processes to enhance productivity and deliver tangible results. Efficiency is fundamental to our approach, ensuring that our solutions are both impactful and sustainable.",
        },
        {
            title: "We Are Collaboration",
            description:
                "We build strategic partnerships that drive mutual growth and success. Through collaboration, we create shared value and strengthen enduring relationships.",
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
                            Choose ZyGen Labs for your software solution needs and experience the impact of our industry
                            expertise since 2023. With a proven track record of delivering intelligent, cost-effective,
                            and innovative solutions, we help businesses achieve success in the global marketplace.
                            Trust in our commitment and expertise to take your business to the next level.
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
