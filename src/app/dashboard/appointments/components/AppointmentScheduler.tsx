'use client';

import React, { useState, useEffect, useRef } from 'react';
import { doctors } from './data';
import Appointments from './Appointments'
import CurrentTimeLine from './CurrentTimeline'
import HeaderDoctor from './HeaderDoctors'
import TopRight from './TopRight'
import TopLeft from './TopLeft'

const timeSlots = Array.from({ length: 10 }, (_, i) => i + 9); // 9 AM to 6 PM

const calculateCurrentTimePosition = (currentTime: Date): string => {
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const slotHeight = 5; // 5rem per hour
  return `${(hours - 9) * slotHeight + (minutes / 60) * slotHeight}rem`;
};


const AppointmentScheduler: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div>
          <TopLeft />
        </div>
        <div>
          <TopRight />
        </div>
      </div>
      <div className="flex flex-col rounded-lg shadow-lg">
        <HeaderDoctor />


        {/* Scheduler Grid */}
        <div className="relative flex" style={{ paddingTop: '9.6rem' }}>
          {/* Time Column */}
          <div className="w-24 bg-teal-100 text-gray-700 font-medium">
            {timeSlots.map((time, index) => (
              <div
                key={index}
                className="h-20 flex items-start justify-center pt-1 relative"
              >
                <span className="absolute -top-2 text-center font-semibold">
                  {`${time % 12 || 12}:00 ${time >= 12 ? 'PM' : 'AM'}`}
                </span>
              </div>
            ))}
          </div>

          {/* Appointment Grid */}
          <div className="flex-1 relative">



            {/* Background Columns */}
            <div className="absolute w-full h-full flex">
              {doctors.map((_, index) => (
                <div
                  key={index}
                  // className={`flex-1 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  // className="flex-1 border-r-2 border-gray-300"
                  className="min-w-[calc(85vw/3)] p-4 text-center border-r-2 border-l-2"
                ></div>
              ))}
            </div>



            {/* Background Rows  */}
            {/* <div className="absolute w-full h-full">
            {timeSlots.map((_, index) => (
              <div key={index} className="flex w-full h-20 border-b-2 border-gray-300"></div>
            ))}
          </div> */}

            {/* Background Rows */}
            <div
              className="absolute"
              style={{
                width: `calc(${doctors.length} * min(33.33%, calc(85vw / 3)))`,
                height: "100%",
              }}
            >
              {timeSlots.map((_, index) => (
                <div key={index} className="flex h-20 border-b-2 border-gray-300"></div>
              ))}
            </div>


            <CurrentTimeLine />

            <Appointments />


          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentScheduler;
