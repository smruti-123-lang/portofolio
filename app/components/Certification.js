

import React from 'react'
export default function Certification() {
  return (
    <div className="bg-black min-h-screen py-10 px-4">
      <h1 className="text-white text-5xl font-bold uppercase text-center mb-10">
        Certifications
      </h1>

      {/* 2 Column Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center bg-white p-6 mx-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <img
            src="images/ibm.jpg"
            alt="IBM Certificate"
            className="w-120 h-80 object-cover  mb-4"
          />
          <p className="text-black text-base leading-6 text-center px-4">
            IBM Certification in Artificial Intelligence and Cloud Technologies.
            This program helped me understand the fundamentals of AI workflows,
            how cloud systems operate, and how modern companies use intelligent
            solutions to solve real-world challenges.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center items-center bg-white p-6 mx-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <img
            src="images/intern.jpg"
            alt="Internship Certificate"
            className="w-120 h-80 object-cover  mb-4"
          />
          <p className="text-black text-base leading-6 text-center px-4">
            Completed a professional full-stack internship where I worked on UI
            development, API integration, and real project environments. This
            boosted my confidence in JavaScript, React, and building end-to-end
            application flows.
          </p>
        </div>

      </div>
    </div>
  );
}
