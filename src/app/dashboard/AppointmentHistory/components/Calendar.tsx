import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from 'date-fns';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{format(currentDate, 'MMMM, yyyy')}</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="text-gray-500 hover:text-gray-700"
          >
            &lt;
          </button>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="text-gray-500 hover:text-gray-700"
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
          <div
            key={day.toString()}
            className={`px-4 py-2 text-center rounded-full cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? 'text-gray-300'
                : isSameDay(day, selectedDate)
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-100'
            }`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-2">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div
      className="p-4 bg-white rounded-full my-4"
      style={{
        boxShadow: '0px 6px 5px 0px rgba(0, 0, 255, 0.1)',
        borderRadius: '8px',
      }}
    >
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
