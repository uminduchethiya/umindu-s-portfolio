import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const StatsSection = ({ stats }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [countedStats, setCountedStats] = useState(
        stats.map(() => ({ value: 0, isAnimating: false }))
    );
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for triggering animation when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !inView) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [inView]);

    // Counter animation when section comes into view
    useEffect(() => {
        if (!inView) return;

        stats.forEach((stat, index) => {
            // Extract numeric value from string (handles "3+", "25+", "98%" etc.)
            const numericMatch = stat.value.match(/\d+/);
            const targetValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
            
            let currentValue = 0;
            const duration = 2000; // 2 seconds
            const increment = targetValue / (duration / 16); // 60fps
            
            setCountedStats(prev => {
                const newStats = [...prev];
                newStats[index] = { value: 0, isAnimating: true };
                return newStats;
            });

            const interval = setInterval(() => {
                currentValue += increment;
                
                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(interval);
                    
                    setCountedStats(prev => {
                        const newStats = [...prev];
                        newStats[index] = { value: targetValue, isAnimating: false };
                        return newStats;
                    });
                } else {
                    setCountedStats(prev => {
                        const newStats = [...prev];
                        newStats[index] = { value: Math.floor(currentValue), isAnimating: true };
                        return newStats;
                    });
                }
            }, 16);

            // Cleanup function
            return () => clearInterval(interval);
        });
    }, [inView, stats]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const formatStatValue = (stat, countedValue) => {
        if (stat.value.includes('%')) {
            return `${countedValue}%`;
        }
        return `${countedValue}+`;
    };

    return (
        <div ref={sectionRef} className=" ] py-16 mt-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                                hoveredIndex === index ? 'scale-105 bg-white' : ''
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Stat Icon/Decoration */}
                            <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center transform transition-all duration-500 ${
                                hoveredIndex === index ? 'rotate-12 scale-110' : ''
                            }`}>
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-lg">
                                        {index === 0 && '⚡'}
                                        {index === 1 && '🎯'}
                                        {index === 2 && '🚀'}
                                        {index === 3 && '⭐'}
                                    </span>
                                </div>
                            </div>

                            {/* Main Number */}
                            <div className="text-center mb-4">
                                <h3 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-montserrat transition-all duration-300 ${
                                    countedStats[index].isAnimating ? 'animate-pulse' : ''
                                }`}>
                                    {formatStatValue(stat, countedStats[index].value)}
                                </h3>
                            </div>

                            {/* Label */}
                            <p className="text-gray-700 font-semibold text-center font-montserrat leading-relaxed mb-4">
                                {stat.label}
                            </p>

                            {/* Interactive Progress Ring */}
                            <div className="flex justify-center mb-4">
                                <div className="relative w-16 h-16">
                                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            fill="none"
                                            stroke="#e5e7eb"
                                            strokeWidth="4"
                                        />
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeDasharray={`${2 * Math.PI * 28}`}
                                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - (hoveredIndex === index ? 0.8 : 0.2))}`}
                                            className="transition-all duration-1000 ease-out"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#6366f1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Hover Message */}
                            <div className={`text-center transition-all duration-300 ${
                                hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}>
                                <p className="text-sm text-blue-600 font-medium">
                                    {index === 0 && "Growing every day! 📈"}
                                    {index === 1 && "Quality delivered! ✨"}
                                    {index === 2 && "Always learning! 💡"}
                                    {index === 3 && "Exceeding expectations! 🏆"}
                                </p>
                            </div>

                            {/* Floating particles effect on hover */}
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                                    <div className="absolute top-8 right-6 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
                                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
                                </div>
                            )}
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