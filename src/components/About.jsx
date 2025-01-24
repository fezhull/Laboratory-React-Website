import React, { useState } from 'react';
import thumnailImg from '../assets/images 2.png';
import { IoPlay } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto px-4"
      >
        <div className="py-12 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Thumbnail and Video */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumnailImg}
                  alt="video thumbnail"
                  className="w-full h-auto md:h-[446px] rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlay className="text-white text-3xl" />
                </button>
              </div>
            ) : null}
          </div>

          {/* Right Side - Text and Button */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-secondary font-bold mb-4 leading-snug">
              Who we are
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              Rich Foods Laboratory Ltd is an independent analytical testing laboratory dedicated to providing a broad range of high-quality laboratory testing services & consultancy support to our clients in the food, feed, water, environment & agricultural industries.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/70">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get started</span>
                <IoArrowForwardCircle />
              </a>
            </button>
          </div>
        </div>

        {/* Video Iframe Modal */}
        {isVideoPlaying && (
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eTI3nUMGCkw?si=56pgzFhud8esjXkH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            >
              &times;
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default About;
