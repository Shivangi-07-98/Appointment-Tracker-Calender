import React from "react";
import AppointmentHistoryCard from "./AppointmentHistoryCard";
import {appointments} from './Data'


const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Green tracking line */}
      <div className="absolute left-4 top-0 bottom-0 w-3 bg-green"></div>

      {/* Appointments */}
      <div className="pl-14 space-y-4">
        {appointments.map((appt, index) => (
          <div key={index} className="relative">
            {/* Green or gray dot */}
            <div
              className={`absolute left-0 top-4 w-4 h-4 rounded-full ${
                appt.active ? "bg-green" : "bg-gray-400"
              }`}
            ></div>
            <AppointmentHistoryCard
              date={appt.date}
              time={appt.time}
              treatment={appt.treatment}
              dentist={appt.dentist}
              attachments={appt.attachments}
              notes={appt.notes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
