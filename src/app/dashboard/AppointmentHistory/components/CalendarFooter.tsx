import React from 'react';

const CalendarFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg mt-4">
      <div>
        <p className="text-sm font-bold">Nov 14, 2024</p>
        <p className="text-xs text-gray-500">10:30 - 11:15</p>
      </div>
      <div className="flex-1 flex items-center justify-evenly text-center">
        <div>
          <p className="text-xs text-gray-500">Treatment</p>
          <p className="text-sm font-bold">Root Canal</p>
        </div>
        <div className="border-l border-gray-300 h-full mx-2"></div>
        <div>
          <p className="text-xs text-gray-500">Dentist</p>
          <p className="text-sm font-bold">Dr. Maya Chadha</p>
        </div>
      </div>
      <div className="text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12h12m-6-6v12"
          />
        </svg>
      </div>
    </div>
  );
};

export default CalendarFooter;
