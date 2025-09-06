import { useState } from "react";

const WhyChooseMeSection = () => {
    const panels = [
        {
            title: "I Am Passionate About Tech",
            description:
                "I love building innovative and efficient solutions that solve real-world problems. Coding isn’t just work for me—it’s something I enjoy learning and improving at every single day.",
        },
        {
            title: "I Am a Fast Learner",
            description:
                "I quickly adapt to new technologies and frameworks. Whether it’s React, Laravel, or Spring Boot, I enjoy exploring and applying tools that make projects smarter and stronger.",
        },
        {
            title: "I Value Efficiency",
            description:
                "I always focus on writing clean, scalable, and maintainable code. My goal is to deliver solutions that not only work but also save time and resources in the long run.",
        },
        {
            title: "I Believe in Collaboration",
            description:
                "Working with others motivates me to grow. I value communication, teamwork, and knowledge sharing to achieve the best possible results together.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                            Why <span className="text-blue-600">Choose Me</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-semibold">
                            Hi, I’m <span className="text-blue-600 font-bold">Umindu</span>, a software engineering
                            enthusiast passionate about creating modern, intelligent, and cost-effective solutions.
                            Since starting my journey in software development, I’ve gained hands-on experience in
                            full-stack development and continue to sharpen my skills.  
                            If you’re looking for someone who is committed, adaptable, and eager to grow, I’d be glad to
                            collaborate on meaningful projects.
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

export default WhyChooseMeSection;
