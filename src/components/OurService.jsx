import React, { useState, useRef } from 'react';

export default function OurService() {
    // Service items array
    const services = [
        {
            imageUrl: "https://img.icons8.com/?size=100&id=DzQFf09l3D1p&format=png&color=000000",
            title: 'Web Development',
            description: 'With our web development service, your website becomes more than just an online presence—it becomes a powerful tool for business growth.',
        },
        {
            imageUrl: "https://img.icons8.com/?size=100&id=9yWcmPXU9Yqy&format=png&color=000000",
            title: 'Software Development',
            description: 'Our software development service empowers your vision into reality. We meticulously craft tailored digital solutions, from conceptualization to deployment.',
        },
        {
            imageUrl: "https://img.icons8.com/?size=100&id=K802902EP1kb&format=png&color=000000",
            title: 'Mobile App Development',
            description: 'Our mobile app development service goes beyond just coding; we collaborate closely with you to understand your objectives and user preferences.',
        },
        {
            imageUrl: "https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=000000",
            title: 'UI/UX Design',
            description: 'Our UI/UX design services are dedicated to creating visually stunning and highly intuitive digital experiences.',
        },
        {
            imageUrl: "https://img.icons8.com/?size=100&id=o9r8HjgL7f74&format=png&color=000000",
            title: 'Digital Marketing',
            description: 'Our digital marketing service is your gateway to reaching and engaging your target audience across various online channels.',
        },
        {
            imageUrl: "https://img.icons8.com/?size=100&id=o9r8HjgL7f74&format=png&color=000000",
            title: 'Cloud Hosting',
            description: 'Experience the reliability and scalability of our cloud hosting service, designed to support your business growth without compromising on performance.',
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    imageUrl={service.imageUrl}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
}

function ServiceCard({ imageUrl, title, description }) {
    const [progressValue, setProgressValue] = useState(20); // Local state for each card
    const intervalRef = useRef(null); // Ref to store the interval ID

    // Function to handle hover actions
    const handleMouseAction = (isEntering) => {
        if (isEntering) {
            let currentProgress = 0;
            clearInterval(intervalRef.current); // Clear any existing interval
            intervalRef.current = setInterval(() => {
                currentProgress += 8;
                if (currentProgress >= 80) {
                    clearInterval(intervalRef.current); // Stop at 80
                    currentProgress = 80;
                }
                setProgressValue(currentProgress);
            }, 100); // Adjust the interval timing as needed
        } else {
            clearInterval(intervalRef.current); // Clear any existing interval
            intervalRef.current = setInterval(() => {
                setProgressValue((prev) => {
                    if (prev <= 20) {
                        clearInterval(intervalRef.current); // Stop at 20
                        return 20;
                    }
                    return prev - 4; // Decrease gradually
                });
            }, 50); // Adjust the interval timing as needed
        }
    };

    return (
        <div
            className="group border rounded-lg p-4 animate-fadeUp hover:shadow-lg transition-shadow cursor-default"
            onMouseEnter={() => handleMouseAction(true)} // Start animation on mouse enter
            onMouseLeave={() => handleMouseAction(false)} // Reset progress on mouse leave
        >
            <progress
                className="w-full mt-4 h-[4px] rounded-full bg-gray-200"
                value={progressValue}
                max="100"
            >
                {progressValue}%
            </progress>
            <div className="flex mt-4">
                <div className="w-1/5">
                    <img
                        src={imageUrl}
                        alt="Service"
                        className="w-12 h-12 mr-4 object-cover"
                    />
                    {/* Show this div only when the parent is hovered */}
                    <div className="group-hover:w-5 group-hover:h-5 group-hover:bg-text-dark group-hover:rounded-full group-hover:-mt-5 group-hover:ml-10 w-0 h-0 bg-transparent -mt-0 ml-0 transition-all duration-700"></div>
                </div>
                <div className="w-4/5">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <p className="text-gray-700 mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}
