
import React from "react";
import { Paperclip } from 'lucide-react';
import { File } from 'lucide-react';

interface CardProps {
  date: string;
  time: string;
  treatment: string;
  dentist: string;
  attachments: number; 
  notes: number; 
}

const AppointmentHistoryCard: React.FC<CardProps> = ({ date, time, treatment, dentist, attachments, notes }) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white rounded-3xl shadow-md">
      {/* Left Section */}
      <div className="flex flex-col">
        <p className="text-base font-semibold text-black">{date}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-start">
        <p className="text-sm text-gray-400">Treatment</p>
        <p className="text-base font-semibold text-black">{treatment}</p>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-sm text-gray-400">Dentist</p>
        <p className="text-base font-semibold text-black">{dentist}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Attachment Icon */}
        <div className="flex items-center text-gray-500 space-x-1">
          <Paperclip/>
          <p className="text-sm">{attachments}</p>
        </div>

        {/* Notes Icon */}
        <div className="flex items-center text-gray-500 space-x-1">
        <File/>
          <p className="text-sm">{notes}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistoryCard;
