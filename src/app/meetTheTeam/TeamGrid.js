'use client';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';

export default function TeamGrid({ teamMembers = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnterButton = (index) => setHoveredIndex(index);
  const handleMouseLeaveButton = () => setHoveredIndex(null);

  return (
    <div className="font- bg-gray-300 py-3 pl-10 pr-0 mr-[-0.7rem]">
      <div className="text-black text-left py-1">
        <h1 className="text-3xl font-bold tracking-wide">
          MEET OUR TEAM{' '}
          <sup className="text-mid relative -top-4">( KRIYA 2025 )</sup>
        </h1>
      </div>

      <div
        className="grid grid-cols-auto-fill gap-y-4 gap-x-[0.4rem]"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative overflow-hidden text-center w-48 h-48 p-0 transition-all duration-300 ease-in-out ${
              hoveredIndex === index ? 'bg-gradient-to-br from-purple-200 to-white shadow-lg scale-105' : 'bg-gray-300'
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 object-cover">
                <img
                  src={member.image}
                  className="w-full h-full"
                  alt={member.name}
                />
              </div>

              {hoveredIndex === index && (
                <div>
                  <div className="absolute bottom-[79%] right-0 p-1 text-right bg-purple-400">
                    <div className="text-tiny font-bold text-purple-700 mb-0">
                      {member.role}
                    </div>
                  </div>
                  <div className="absolute bottom-[67%] right-0 py-1 px-2 text-right bg-white inline-block">
                    <div className="text-mid font-bold text-black">
                      {member.name}
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute top-[3.89rem] right-[2.45rem] w-7 h-7 flex items-center justify-center"
                onMouseEnter={() => handleMouseEnterButton(index)}
                onMouseLeave={handleMouseLeaveButton}
              >
                <button className="bg-black text-white border-none px-1.5 py-0.5 cursor-pointer text-sm">
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
