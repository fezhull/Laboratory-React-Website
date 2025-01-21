import React, { useState } from 'react';
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import heroImg from '../assets/img001.jpg'; // Correct path to the image

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="home" className="relative bg-gradient-to-b from-green-50 to-green-100">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            

            <button type="button" className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
              <svg className="block w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>

              Menu
            </button>

            

          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:max-h-[900px] lg:min-h-[900px]">
          {/* Left side content */}
          <div className="flex flex-col items-center justify-center w-full lg:w-6/12 px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
            <div className="flex flex-col justify-between flex-1 h-full">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">Take control <br />on your daily expenses</h1>
                <p className="mt-6 text-base text-black sm:text-xl">Our A.I helps you to predict your expenses based on your previous activity and shares how you should manage your money.</p>
                <a href="#about" title="" className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400" role="button"> Get started for free </a>
              </div>

              <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                  <p className="text-base font-semibold text-black">App available on</p>

                  <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                    <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                      <img className="w-auto rounded h-14 sm:h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png" alt="" />
                    </a>

                    <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                      <img className="w-auto rounded h-14 sm:h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
