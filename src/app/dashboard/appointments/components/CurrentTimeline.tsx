
import React, { useState, useEffect, useRef } from 'react';

const useCurrentTime = (): Date => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};



const CurrentTimeLine: React.FC = () => {
  const currentTime = useCurrentTime();
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className="absolute w-full z-50 flex items-center pointer-events-none"
      style={{
        top: 'calc(3.5 * 77px)', // Adjust this based on your row height
      }}
    >
      {/* Red Line */}
      <div className="fixed w-full flex items-center ">
        {/* Time Text */}
        <span
          className="absolute bg-red-500 text-white text-sm px-2.5 py-0.5 rounded-full"
          style={{
            zIndex: 100,
            left: '-3%',
            transform: 'translateX(-50%)',
            top: '-0.7rem', // Adjust the vertical position of the text if necessary
          }}
        >
          {timeString}
        </span>
        {/* Red Line */}
        <div
          className="absolute border-b-2 border-red-500 h-0.7 w-full z-10"
          style={{
            width: '100%', // Make sure the line spans the full container width
            zIndex: 10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CurrentTimeLine;

