import React from 'react';

const HomeServiceCard = ({ title, description, progressValue }) => {
    return (
        <div className="relative group flex justify-center items-center text-xl font-bold gap-5 animate-slowBounce">
            {/* The button and text */}
            <div className="relative group flex items-center gap-2">
                <span className="bg-button hover:bg-button-hover px-2 flex justify-center items-center pb-1 rounded-full text-2xl text-white">+</span>
                <p className="text-text-dark font-semibold whitespace-nowrap">{title}</p>
            </div>

            {/* Message box on hover */}
            <div className="absolute top-[40px] bg-white border border-gray-300 shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 w-72 group-hover:block hidden">
                {/* Triangle Arrow */}
                <div className="absolute top-[-12px] left-[50%] transform -translate-x-[50%] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-b-white"></div>

                <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>

                {/* Progress Bar */}
                <progress
                    className="w-full mt-4 h-1 rounded-full bg-gray-200"
                    value={progressValue}
                    max="100"
                >
                    {progressValue}%
                </progress>
            </div>
            <style jsx>{`
      progress::-webkit-progress-value {
        background-color: #3b82f6; /* Tailwind's blue-500 */
      }
      progress::-moz-progress-bar {
        background-color: #3b82f6; /* Tailwind's blue-500 */
      }
      progress {
        animation: progressAnimation 2s ease-in-out;
      }

      @keyframes progressAnimation {
        0% {
          width: 0%;
        }
        100% {
          width: 95%;
        }
      }
    `}</style>
        </div>
    );
};

export default HomeServiceCard;
