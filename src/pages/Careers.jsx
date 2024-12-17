// src/pages/Careers.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Herocover from "../assets/companycover.jpeg";
import Heroimage from "../assets/coverbgremove2.png";

export default function Careers() {
  return (
    <div>
      <HeroSection
        title="Join Our Team"
        subtitle="Career Opportunities"
        paragraph="Explore exciting career opportunities with us and be part of a growing, dynamic company."
        backgroundImage={Herocover}
        image={Heroimage}
      />
      {/* Additional content for the Careers page */}
      <div className="p-8">
        <h3 className="text-3xl font-bold">Open Positions</h3>
        <p className="mt-4">
          We are hiring for various positions. Check out our job listings below!
        </p>
      </div>
    </div>
  );
}
