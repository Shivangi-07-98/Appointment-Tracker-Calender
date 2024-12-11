import React from 'react';

const CalendarHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h1 className="text-lg font-bold">Appointments</h1>
        <a
          href="#"
          className="text-blue-600 hover:underline text-sm"
        >
          View upcoming appointment
        </a>
      </div>
      <button
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
      >
        Book New
      </button>
    </div>
  );
};

export default CalendarHeader;
