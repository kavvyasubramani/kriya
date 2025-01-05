'use client';
import 'tailwindcss/tailwind.css';
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Icons for arrows
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
export default function TeamGrid({ teamMembers = [] }) {
  const CARDS_PER_SLIDE=15;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null); // State to track hovered member

  const totalSlides = Math.ceil(teamMembers.length / CARDS_PER_SLIDE);

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : totalSlides - 1
    );
  };

  const getCurrentSlideMembers = () => {
    const start = currentSlide * CARDS_PER_SLIDE;
    const end = start + CARDS_PER_SLIDE;
    return teamMembers.slice(start, end);
  };


  const handleMouseEnterButton = (index) => setHoveredIndex(index);
  const handleMouseLeaveButton = () => setHoveredIndex(null);
 
  return (
    <div className="font- bg-gray-200 py-3 pl-10 pr-0 mr-[-0.7rem]">
      <div className="text-black text-left py-1 mb-8">
        <h1 className="text-4xl font-bold tracking-wide bf">
          MEET OUR TEAM{' '}
          <sup className="text-mid relative -top-4">( KRIYA 2025 )</sup>
        </h1>
      </div>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
  onClick={handlePrevSlide}
  className="absolute left-[-0.5rem] z-10 bg-transparent hover:bg-grey-200 text-white hover:text-purple-500 p-2 rounded-full"
  style={{ top: '50%', transform: 'translateY(-50%)' }} // Updated left spacing
>
<RiArrowLeftWideLine size={64} />
</button>
<div
  className="grid grid-cols-auto-fill gap-y-4 gap-x-[0.5rem] relative"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
    marginLeft: "4.5rem", // Cards start 0.5rem after the left arrow
    marginRight: "4.5rem", // Cards end 0.5rem before the right arrow
    width: "calc(100% - 1rem)", // Adjust total width for spacing
  }}
>
        {getCurrentSlideMembers().map((member, index) => (
          <div
            key={index}
            className={`relative overflow-hidden text-center w-48 h-52 p-0   bg-gradient-to-br from-purple-300 to-white   shadow-custom mb-3 rounded-2xl ${hoveredMember===member?' transition-all duration-300 ease-in-out':''}'
              `}
          >
            <div className="relative w-full h-full"
            
            >
              <motion.div className="absolute bottom-0 left-0 aspect-[8/9] w-2/3 object-cover"
                initial={{ scale: 1 }} // Initial scale
                whileHover={{ width: "100%", height: "100%", }} // Scale up on hover
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
                  className={`w-full h-full mix-blend-normal ${hoveredMember===member?'blur-sm':''}`}
                  alt={member.name}
                />
              </motion.div>

              {/* {hoveredIndex === index && ( */}
              <div
              // initial={{ opacity: 1 }} // Initial state for animation
              >
                <div
                  className={`absolute ${hoveredMember === member ? 'bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-lg w-auto' : 'bottom-[85%] right-0'} p-1 text-center bg-purple-400 transition-all duration-300 ease-in-out`}
                >
                  <div className={`text-[10px] font-bold text-nowrap${hoveredMember === member ?'text-slate-950  text-[12px] text-nowrap': 'text-purple-700' }`}>
                    {member.role}
                  </div>
                </div>

                <div
                  className={`absolute ${hoveredMember === member ? 'bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white bg-opacity-30 backdrop-blur-sm' : 'bottom-[72%] right-2'} py-1 px-2 text-right bg-white inline-block transition-all duration-300 ease-in-out`}
                >
                  <div className={`text-[11px] text-nowrap font-bold text-purple-700 ${hoveredMember === member ?' text-[13px] text-slate-950 text-nowrap': ''} `}>
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
      <button
  onClick={handleNextSlide}
  className="absolute right-[4rem] z-10 bg-transparent hover:bg-gray-200 text-white hover:text-purple-500 p-0" // Reduced padding for thinner button
  style={{ top: '50%', transform: 'translateY(-50%)' }}
>
  <RiArrowRightWideLine size={64} />
</button>

      </div>

    </div>

  );
}
