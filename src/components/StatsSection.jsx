import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const StatsSection = ({ stats }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [countedStats, setCountedStats] = useState(
        stats.map(() => ({ value: 0 })) // Initialize with 0 for each stat
    );

    useEffect(() => {
        stats.forEach((stat, index) => {
            const targetValue = parseInt(stat.value, 10); // Assuming stat.value is a number in string format
            let currentValue = 0;
            const increment = targetValue / 100; // Change this value for the speed of increment

            const interval = setInterval(() => {
                if (currentValue < targetValue) {
                    currentValue += increment;
                    setCountedStats((prevStats) => {
                        const newStats = [...prevStats];
                        newStats[index] = { value: Math.floor(currentValue) };
                        return newStats;
                    });
                } else {
                    clearInterval(interval);
                }
            }, 10); // Adjust this interval for smoother animation
        });
    }, [stats]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="bg-blue-50 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 group relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h3 className="text-4xl font-bold text-gray-800 mb-2 font-montserrat">
                                {countedStats[index].value} <span className="text-blue-600">+</span>
                            </h3>
                            <p className="text-gray-600 mb-4 font-montserrat font-semibold">
                                {stat.label}
                            </p>

                            {/* Progress bar */}
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4">
                                <div
                                    className={`bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out ${
                                        hoveredIndex === index ? 'w-[80%]' : 'w-[20%]'
                                    }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

StatsSection.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StatsSection;
