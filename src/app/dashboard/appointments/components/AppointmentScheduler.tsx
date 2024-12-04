'use client';

import React from 'react';
import {appointments} from './data'
import {doctors} from './data'

const timeSlots = Array.from({ length: 10 }, (_, i) => i + 9); // 9 AM to 6 PM
// [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]


const parseTime = (time: string) => {
  const [hour, minute] = time.split(':').map((val) => parseInt(val, 10));
  const isPM = time.includes('PM');
  return isPM && hour !== 12 ? hour + 12 : hour;
};

const calculatePosition = (startTime: string, endTime: string, doctorIndex: number) => {
  const startHour = parseTime(startTime);
  const endHour = parseTime(endTime);
  const slotHeight = 5; // (5rem per hour)

  return {
    top: `${(startHour - 9) * slotHeight}rem`,
    height: `${(endHour - startHour) * slotHeight}rem`,
    left: `${doctorIndex * (100 / doctors.length)}%`,
    width: `${100 / doctors.length}%`,
  };
};

const AppointmentScheduler: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen rounded-lg overflow-hidden shadow-lg">
      {/* Header: Doctors */}
      <div className="flex bg-white shadow-md">
        <div className="w-24 bg-green-100"></div> {/* Time column background */}
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className={`flex-1 p-4 text-center border-r ${doctor.bgColor}`}
          >
            <h2 className="text-lg font-extrabold">{doctor.name}</h2>
            <p className="text-sm text-gray-500">{doctor.email}</p>
          </div>
        ))}
      </div>

      {/* Scheduler Grid */}
      <div className="relative flex">
        {/* Time Column */}
        <div className={`w-24 bg-green-100 text-gray-700 font-medium`}>
          {timeSlots.map((time, index) => (
            <div
              key={index}
              className="h-20 flex items-start justify-center pt-1 relative" 
            >
              {/* Display time at the top without horizontal line */}
              <span className="absolute -top-3 text-center font-semibold">
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
                className={`flex-1 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white/100'}`}
              ></div>
            ))}
          </div>

          {/* Time Slots Grid */}
          <div className="absolute w-full h-full">
            {timeSlots.map((_, index) => (
              <div
                key={index}
                className="flex w-full h-20 border-b-2 border-black-300"
              ></div>
            ))}
          </div>

          {/* Render Appointments */}
          {appointments.map((appointment, index) => {
            const position = calculatePosition(
              appointment.startTime,
              appointment.endTime,
              appointment.doctorIndex
            );
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: position.top,
                  left: position.left,
                  height: position.height,
                  width: position.width,
                }}
              >
                {/* Updated Card Design */}
                <div
                  className={`bg-teal-50 rounded-lg shadow-lg border relative h-full`}
                >
                  {/* Status border at the top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg ${
                      appointment.status === 'Finished'
                        ? 'bg-green-500'
                        : appointment.status === 'Ongoing'
                        ? 'bg-orange-500'
                        : 'bg-blue-500'
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="flex justify-between items-center m-2">
                  <div className="flex items-center ">
                    <img
                      src="/image.png" 
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-bold text-gray-800 text-sm truncate">
                        {appointment.patientName}
                      </p>
                      <p className="text-xs text-gray-500">{appointment.type}</p>
                      <p className="mt-4 text-xs text-gray-600">
                    {appointment.startTime} - {appointment.endTime}
                  </p>
                    </div>
                    
                  </div>
                  <div className='flex-col justify-between'>
                  
                  <p
                    className={`mt-1 text-xs font-medium ${
                      appointment.status === 'Finished'
                        ? 'text-green-600'
                        : appointment.status === 'Ongoing'
                        ? 'text-orange-500'
                        : 'text-blue-500'
                    }`}
                  >
                    {appointment.status}
                  </p>
                  <button className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    See Patient Details
                  </button>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
