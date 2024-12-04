'use client';

import React from 'react';

interface AppointmentCardProps {
  appointment: {
    patientName: string;
    type: string;
    startTime: string;
    endTime: string;
    status: 'Finished' | 'Ongoing' | 'Registered';
  };
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Finished':
        return 'text-green-600';
      case 'Ongoing':
        return 'text-orange-500';
      case 'Registered':
        return 'text-blue-500';
      default:
        return '';
    }
  };

  return (
    <div
      className="flex flex-col bg-gray-100 shadow-lg rounded-lg overflow-hidden p-4 h-full"
      style={{
        borderLeft: `4px solid ${
          appointment.status === 'Finished'
            ? '#4CAF50'
            : appointment.status === 'Ongoing'
            ? '#FFA500'
            : '#2196F3'
        }`,
      }}
    >
      {/* Patient Info */}
      <div className="flex items-center">
        <img
          src="/profile-placeholder.png" 
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
        />
        <div className="flex-1">
          <p className="text-lg font-medium text-gray-800 truncate">
            {appointment.patientName}
          </p>
          <p className="text-sm text-gray-500 truncate">{appointment.type}</p>
        </div>
      </div>

      {/* Time */}
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          {appointment.startTime} - {appointment.endTime}
        </p>
      </div>

      {/* Status */}
      <p className={`mt-1 text-sm font-medium ${getStatusClass(appointment.status)}`}>
        {appointment.status}
      </p>

      {/* Action Button */}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        See Patient Details
      </button>
    </div>
  );
};

export default AppointmentCard;
