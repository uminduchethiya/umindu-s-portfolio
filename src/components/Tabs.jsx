import  { useState } from "react";

export default function Tabs() {
  const tabs = [
    { label: "ALL CASE STUDIES", content: <div></div> },
    { label: "WEB DEVELOPMENT", content: <div></div> },
    { label: "SOFTWARE DEVELOPMENT", content: <div></div> },
    { label: "MOBILE APP DEVELOPMENT", content: <div></div> },
    { label: "UI/UX DESIGN", content: <div></div> },
    { label: "DIGITAL MARKETING", content: <div></div> },
    { label: "CLOUD HOSTING", content: <div></div> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row gap-7  border-gray-300">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className="flex flex-col items-center group w-full md:w-auto "
          >
            {/* Top Border */}
            <div
              className={`w-full h-1 ${
                activeTab === tab.label
                  ? "bg-blue-500"
                  : "bg-transparent group-hover:bg-blue-500"
              }`}
            ></div>
            {/* Label */}
            <button
              className={`px-4 py-2 font-medium text-md w-full  ${
                activeTab === tab.label
                  ? "text-blue-500 bg-gray-200"
                  : "text-gray-500 bg-transparent group-hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
      <div className="p-6">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
}
