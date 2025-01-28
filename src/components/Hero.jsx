import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';
import heroImg from '../assets/img1.jpg'; // Correct path to the image

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="home" className="relative bg-gradient-to-b from-green-50 to-green-100">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* <button type="button" className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg className="block w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>

              Menu
            </button> */}
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:max-h-[900px] lg:min-h-[900px]">
          {/* Left side content */}
          <motion.div 
            className="flex flex-col items-center justify-center w-full lg:w-6/12 px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14"
            initial={{ opacity: 0, y: 100 }}  // Start further below
            animate={{ opacity: 1, y: 0 }}    // Animate to the final position
            transition={{ duration: 1 }}       // Smooth 1-second transition
          >
            <div className="flex flex-col justify-between flex-1 h-full">
              <div>
                {/* Apply motion to the heading */}
                <motion.h1 
                  className="text-5xl font-bold text-black sm:text-6xl xl:text-7xl"
                  variants={fadeIn}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Rich Foods<br />Laboratories Ltd
                </motion.h1>
                <p className="mt-6 text-base text-black sm:text-xl">If you are looking for food laboratory analysis, we got you covered. We offer a wide variety of analytical testing services, making us a one stop shop for all of your testing needs.</p>
                <a href="#about" title="" className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400" role="button"> Get started for free </a>
              </div>

              <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
              </div>
            </div>
          </motion.div>

          {/* Right side content (Image) */}
          <div className="relative w-full lg:w-6/12 overflow-hidden">
            <img className="w-full h-full object-cover" src={heroImg} alt="Hero Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
