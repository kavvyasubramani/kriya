'use client';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function TeamGrid({ teamMembers = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnterButton = (index) => setHoveredIndex(index);
  const handleMouseLeaveButton = () => setHoveredIndex(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  return (
    <div className="font- bg-gray-200 py-3 pl-10 pr-0 mr-[-0.7rem]">
      <div className="text-black text-left py-1 mb-11">
        <h1 className="text-4xl font-bold tracking-wide bf">
          MEET OUR TEAM{' '}
          <sup className="text-mid relative -top-4">( KRIYA 2025 )</sup>
        </h1>
      </div>

      <div
        className="grid grid-cols-auto-fill gap-y-4 gap-x-[0.5rem] relative"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative overflow-hidden text-center w-44 h-44 p-0 transition-all duration-300 ease-in-out rounded-md ${'bg-gradient-to-br from-purple-300 to-white   shadow-custom mb-3'
              }`}
          >
            <div className="relative w-full h-full"
            
            >
              <motion.div className="absolute bottom-0 left-0 w-2/3 h-2/3 object-cover"
                initial={{ scale: 1 }} // Initial scale
                whileHover={{ width: "100%", height: "100%" }} // Scale up on hover
                //  transition={{ duration: 0.4,  ease: [0.25, 0.1, 0.25, 1] }}
                transition={{
                  type: "spring", // Spring transition
                  stiffness: 200, // Determines the "bounciness" (higher = stiffer)
                  damping: 20, // Controls the "settling" (higher = less oscillation)
                  mass: 1, // Adjusts the "weight" of the element
                }}
                onMouseEnter={() => setHoveredMember(member)} // Set hovered member data
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={member.image}
                  className="w-full h-full mix-blend-normal "
                  alt={member.name}
                />
              </motion.div>

              {/* {hoveredIndex === index && ( */}
              <div
              // initial={{ opacity: 1 }} // Initial state for animation
              >
                <div
                  className={`absolute ${hoveredMember === member ? 'bottom-1/2 left-1/2 transform -translate-x-2/3 translate-y-2/3 bg-white bg-opacity-30 backdrop-blur-lg' : 'bottom-[79%] right-0'} p-1 text-right bg-purple-400 transition-all duration-300 ease-in-out`}
                >
                  <div className={`text-tiny font-bold ${hoveredMember === member ?'text-slate-950': 'text-purple-700' }mb-0`}>
                    {member.role}
                  </div>
                </div>

                <div
                  className={`absolute ${hoveredMember === member ? 'bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white bg-opacity-30 backdrop-blur-sm' : 'bottom-[65%] right-0'} py-1 px-2 text-right bg-white inline-block transition-all duration-300 ease-in-out`}
                >
                  <div className="text-mid text-nowrap font-bold text-black">
                    {member.name}
                  </div>
                </div>

              </div>
              {/* )} */}

              <div className=" absolute bottom-0 right-0 h-0 w-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-black">

              </div>
              <div className=" absolute top-0 left-0 h-0 w-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-black rotate-[270deg]">

              </div>
              {/* <div
                className="absolute top-[3.89rem] right-[2.45rem] w-7 h-7 flex items-center justify-center"
               
              >
                <button className="bg-black text-white border-none px-1.5 py-0.5 cursor-pointer text-sm">
                  {'>'}
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
