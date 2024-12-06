import React, { useState } from "react";


const TopLeft: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Day");
  return (
    
      <div className="w-full fixed top-0 left-0 z-20 flex items-center px-6 py-4 bg-gray-50 border-b  gap-6">

      
      {/* Month Dropdown */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">November 2024</h1>
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15l4.5-4.5 4.5 4.5" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-6">
        {["Day", "Week", "Month"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-lg font-medium ${
              activeTab === tab ? "text-black" : "text-gray-500"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 -bottom-1 mx-auto h-1 w-6 bg-blue-500 rounded"></span>
            )}
          </button>
        ))}
      </div>
      </div>
  );
}

export default TopLeft;
