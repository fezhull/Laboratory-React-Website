import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants'; // Make sure you define fadeIn in this file

const Services = () => {
  return (
    <div id="services" className="relative bg-cover bg-center py-12 bg-working-img">
      <div className="absolute inset-0 bg-heroBgS bg-opacity-85"></div>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative container mx-auto px-4 py-20"
      >
           <div className="text-black text-center mb-20"> {/* Changed text-white to text-black */}
          <h2 className="text-4xl font-bold font-secondary mb-3">Services we Offer</h2> {/* Changed text-white to text-black */}
          <p className="text-lg md:w-1/2 w-full mx-auto text-black"> {/* Added text-black to the paragraph */}
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col md:w-5/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xl rounded-full flex items-center justify-center w-14 h-14">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Protein Testing</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xl rounded-full flex items-center justify-center w-14 h-14">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">Reaction Testing</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xl rounded-full flex items-center justify-center w-14 h-14">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">Samples Selling</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xl rounded-full flex items-center justify-center w-14 h-14">
              4
            </div>
            <h3 className="text-lg font-medium mt-8">Machine Selling</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
