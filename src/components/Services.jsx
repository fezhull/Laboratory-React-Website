import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants'; // Ensure fadeIn is defined

// Import the images for each service
import foodTestingImg from '../assets/food-testing.jpg';
import feedTestingImg from '../assets/feed-testing.jpg';
import waterTestingImg from '../assets/water-testing.jpg';
import agricultureImg from '../assets/agriculture-testing.jpg';

const Services = () => {
  return (
    <div id="What we do" className="relative bg-cover bg-center py-16 bg-gradient-to-b from-green-200 to-green-500">
      <div className="absolute inset-0 bg-heroBgS bg-opacity-50"></div>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="relative container mx-auto px-4 py-20"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black mb-4">Services We Offer</h2>
          {/* <p className="text-lg md:w-3/5 w-full mx-auto text-black opacity-90">
            We provide top-quality testing services to help ensure the safety and quality of food, water, feed, and more.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Food Testing */}
          <div className="relative bg-white text-center rounded-lg p-6 flex flex-col justify-between shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center h-40 bg-primary rounded-full mb-4">
              <img src={foodTestingImg} alt="Food Testing" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-medium text-black mb-2">Food Testing</h3>
            <p className="text-base text-black opacity-75 mb-4">
              We conduct microbiology, chemistry, vitamins & minerals analysis, and more to ensure food safety and quality.
            </p>
          </div>

          {/* Feed Testing */}
          <div className="relative bg-white text-center rounded-lg p-6 flex flex-col justify-between shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center h-40 bg-primary rounded-full mb-4">
              <img src={feedTestingImg} alt="Feed Testing" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-medium text-black mb-2">Feed Testing</h3>
            <p className="text-base text-black opacity-75 mb-4">
              We provide nutritional analysis for animal feeds, raw materials, and forage to support farmers and manufacturers.
            </p>
          </div>

          {/* Water Testing */}
          <div className="relative bg-white text-center rounded-lg p-6 flex flex-col justify-between shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center h-40 bg-primary rounded-full mb-4">
              <img src={waterTestingImg} alt="Water Testing" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-medium text-black mb-2">Water Testing</h3>
            <p className="text-base text-black opacity-75 mb-4">
              We perform tests on drinking water, borehole water, and wastewater to assess their physicochemical and microbiological properties.
            </p>
          </div>

          {/* Agriculture & Environmental Testing */}
          <div className="relative bg-white text-center rounded-lg p-6 flex flex-col justify-between shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center h-40 bg-primary rounded-full mb-4">
              <img src={agricultureImg} alt="Agriculture & Environmental Testing" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-medium text-black mb-2">Agriculture & Environmental Testing</h3>
            <p className="text-base text-black opacity-75 mb-4">
              We analyze soil, water, and fertilizers to help improve agricultural practices and environmental safety.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
