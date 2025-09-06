import React from "react";

export default function HeroSection({
  title,
  subtitle,
  paragraph,
  backgroundImage,
  image,
}) {
  return (
    
    <div
      className="flex bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      
      <div className="container  mx-auto flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 font-roboto">
        {/* Text Section */}
        <div className="w-full md:w-7/12 bg-opacity-80 mt-z animate-fadeUp text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold leading-relaxed">
            {title}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-relaxed">
            <span className="text-black">that</span> {subtitle}
          </h2>
          <p className="leading-relaxed font-semibold mt-4">{paragraph}</p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-5/12 justify-center md:justify-end items-center hidden md:flex">
        
        </div>
      </div>
    </div>
  );
}
