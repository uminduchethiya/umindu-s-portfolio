import PropTypes from 'prop-types';
import { useState } from 'react';

const ServiceCard = ({ title, description, points, imageUrl }) => {
    const [progress, setProgress] = useState(0);

    // Function to start progress when hovering
    const handleMouseEnter = () => {
        setProgress(0);
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 8;
            if (currentProgress >= 80) {
                clearInterval(interval);
                currentProgress = 80;
            }
            setProgress(currentProgress);
        }, );
    };

    // Function to reset progress when leaving hover
    const handleMouseLeave = () => {
        setProgress(20);
    };

    return (
        <div
            className="flex flex-col bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow h-full"

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center mb-4">
                <img
                    src={imageUrl}
                    alt="Service"
                    className="w-12 h-12 mr-4  object-cover"
                />
                <h2 className="text-2xl font-semibold text-black font-montserrat">{title}</h2>
            </div>
            <p className="text-black mb-4 text-l font-montserrat">{description}</p>

            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4">
                <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <ul className="list-none text-gray-700 space-y-2 mt-4 font-montserrat">
                {points.map((point, index) => (
                    <li
                        key={index}
                        className="relative pl-6 before:content-[''] before:w-2 before:h-2 before:bg-blue-600 before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                    >
                        {point}
                    </li>
                ))}
            </ul>

            <a
                href="#"
                className="text-blue-500 mt-4 inline-block hover:underline"
            >
                Read More →
            </a>
        </div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default ServiceCard;
