import React from 'react';

const Notes: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
      {/* Left Section: Title */}
      <h2 className="text-lg font-bold text-black">Notes</h2>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">
        {/* See All */}
        <button className="text-blue-600 hover:underline">See All</button>
        <span className="text-gray-400">•</span>
        {/* Add New */}
        <button className="text-gray-400 hover:text-black">Add New</button>
        {/* Floating Add Icon */}
        <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:shadow-lg">
          +
        </button>
      </div>
    </div>
  );
};

export default Notes;
