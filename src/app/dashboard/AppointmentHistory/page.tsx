'use client'
import React, { useState } from "react";
import PatientDetails from "./components/PatientDetails";
import Timeline from "./components/Timeline";
import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";
import CalendarFooter from "./components/CalendarFooter";
import Notes from "./components/Notes";
import NotesText from "./components/NotesText";
import HeaderTabs from "./components/HeaderTabs";

const Page: React.FC = () => {
  return (
    <>
    <div className="bg-gray-100 p-2">
      {/* top */}
      <div>
        <PatientDetails />
      </div>

      {/* bottom */}
      <div className="m-4">
      <HeaderTabs/>
      </div>

      <div className="flex m-6">

        {/* left */}
        <div className="flex-[0.6] px-6 pr-14 py-8 bg-gray-200 rounded-3xl">
            <h1 className="text-sm font-bold mb-6 text-left">Previous Appointments</h1>
            <Timeline />
        </div>

        {/* right */}
        <div className="flex-[0.4] ml-6 mr-2">
          {/* right top */}
          <div className="px-6 bg-white rounded-3xl">

          {/* calender header */}
          <div>
          <CalendarHeader/>
          </div>
          {/* calender */}
          <div className="shadow-lg">
            <Calendar/>
          </div>
          {/* calender footer */}
          <div>
          <CalendarFooter/>
          </div>

          </div>


          {/* right bottom */}
          <Notes/>
          <NotesText/>

        </div>
      </div>
    </div>
    </>
  )
}

export default Page;
