'use client'
import React, { useState } from "react";
import PatientDetails from "./components/PatientDetails";
import Timeline from "./components/Timeline";

const Page: React.FC = () => {
  return (
    <>
      {/* top */}
      <div>
        <PatientDetails />
      </div>

      {/* bottom */}
      <div className="flex m-6">

        <div className="flex-[0.6] px-6 pr-14 py-8 bg-gray-100 rounded-3xl">
            <h1 className="text-sm font-bold mb-6 text-left">Previous Appointments</h1>
            <Timeline />
        </div>

        <div className="flex-[0.4]"></div>
      </div>
    </>
  )
}

export default Page;
