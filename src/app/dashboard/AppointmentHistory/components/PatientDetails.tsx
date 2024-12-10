import React, { useState } from "react";
import Image from 'next/image';

const PatientDetails: React.FC = () => {
  return (
    <>
      <div>
        <div className="flex bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl m-6 gap-6 p-2">

          <div className="flex items-center p-4 w-80">
            {/* Profile Image */}
            <div className="relative mr-4">
              <img
                src="/dp.png"
                alt="Jiya Kumar"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>

            {/* User Information */}
            <div className="text-gray-800">
              <p className="font-bold text-lg">Jiya Kumar</p>
              <div className="mt-2 text-sm space-y-1">
                <p className="flex items-center">
                  ✉️ <span className="ml-2 text-gray-600">jiya.kumar@example.com</span>
                </p>
                <p className="flex items-center">
                  📞 <span className="ml-2 text-gray-600">+91 9876543210</span>
                </p>
                <p>ID: RSVA00426</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center gap-10">
            {/* Basic Information */}
            <div className="text-sm text-gray-800">
              <p className="mb-2">Basic Information</p>
              <p className="font-extrabold">24 | Female | 8th Sep 2000</p>
              <p className="font-extrabold">56 wt | 5'6"</p>
            </div>

            {/* Previous History / Allergies */}
            <div className=" text-sm text-gray-800">
              <p className="mb-2">Previous History / Allergies</p>
              <p className="font-extrabold">Nickel Allergy</p>
            </div>

            {/* Blood Pressure */}
            <div className="text-sm text-gray-800">
              <p className="mb-2">Blood Pressure</p>
              <p className="font-extrabold">120/80 mm Hg</p>
            </div>

            {/* Medical Problems */}
            <div className="text-sm text-gray-800">
              <p className="mb-2">Medical Problems</p>
              <p className="font-extrabold">Asthma | Thyroid</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-800">
                🗑️
              </button>
              <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-800">
                ✏️
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default PatientDetails;

