"use client";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";

export default function TeamGrid({ teamMembers = [] }) {
  const CARDS_PER_SLIDE = 15;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [clickedMember, setClickedMember] = useState(null); // Track clicked member for mobile

  const totalSlides = Math.ceil(teamMembers.length / CARDS_PER_SLIDE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
      );
    }, 10000);
    return () => clearInterval(interval);
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
    const end = start + CARDS_PER_SLIDE; // Corrected here
    return teamMembers.slice(start, end);
  };

  const handleMouseEnterButton = (index) => setHoveredIndex(index);
  const handleMouseLeaveButton = () => setHoveredIndex(null);

  // Handle click to toggle hover effect on mobile
  const handleClick = (member) => {
    setClickedMember(clickedMember === member ? null : member); // Toggle clicked state
  };

  return (
    <div className="font- bg-gray-200 py-3 pl-10 pr-0 mr-[-0.7rem]">
      <div className="text-black text-left py-1 mb-8">
        <h1 className="text-2xl lg:text-4xl md:3xl font-bold tracking-wide bf">
          MEET OUR TEAM{" "}
          <sup className="text-mid relative -top-4">( KRIYA 2025 )</sup>
        </h1>
      </div>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrevSlide}
          className="fixed left-2 top-1/2 z-10 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-gray-600 hover:text-purple-500 p-2 rounded-full"
        >
          <RiArrowLeftWideLine
            size={24}
            className="sm:size-[25px] md:size-[35px] lg:size[40px]"
          />
        </button>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-y-4 gap-x-10 m-5 relative">
          {getCurrentSlideMembers().map((member, index) => (
            <div
              key={index}
              className={`relative overflow-hidden text-center w-28 h-35 md:w-48 md:h-52 lg:w-44 lg:h-48 lg:ml-5 p-0 bg-gradient-to-br from-purple-300 to-white shadow-custom mb-3 rounded-2xl ${
                hoveredMember === member || clickedMember === member
                  ? " transition-all duration-300 ease-in-out scale-110"
                  : ""
              }`}
              onClick={() => handleClick(member)} // Set clicked member on click
            >
              <div className="relative w-full h-full">
                <div
                  className="w-full h-full"
                  onMouseEnter={() => setHoveredMember(member)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img
                    src={member.image}
                    className={`w-full h-full mix-blend-normal ${
                      hoveredMember === member || clickedMember === member
                        ? "blur-sm"
                        : ""
                    }`}
                    alt={member.name}
                  />
                </div>

                {/* Show member role and name */}
                <motion.div
                  className="absolute bottom-[85%] right-0 w-0 p-1 text-center bg-purple-400"
                  initial={{ opacity: 0, width: "0%" }}
                  animate={
                    hoveredMember === member || clickedMember === member
                      ? { width: "50%", opacity: 1 }
                      : { width: "0%", opacity: 0 }
                  }
                  transition={{
                    opacity: { duration: 0.1, ease: "easeInOut" },
                    width: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  <div className="font-bold text-nowrap text-slate-950 text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                    {member.role}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[70%] right-0 py-1 px-2 text-center bg-white"
                  initial={{ opacity: 0, width: "0%" }}
                  animate={
                    hoveredMember === member || clickedMember === member
                      ? { width: "75%", opacity: 1 }
                      : { width: "0%", opacity: 0 }
                  }
                  transition={{
                    opacity: { duration: 0.3, ease: "easeInOut" },
                    width: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  <div className="font-bold text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-slate-950 text-nowrap">
                    {member.name}
                  </div>
                </motion.div>
              </div>
              <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-black"></div>
              <div className="absolute top-0 left-0 h-0 w-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-black rotate-[270deg]"></div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNextSlide}
          className="fixed right-2 top-1/2 z-10 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-gray-600 hover:text-purple-500 p-2 rounded-full"
        >
          <RiArrowRightWideLine
            size={24}
            className="sm:size-[25px] md:size-[35px] lg:size[40px]"
          />
        </button>
      </div>
    </div>
  );
}
