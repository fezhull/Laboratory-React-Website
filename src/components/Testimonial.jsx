import React from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import review1 from '../assets/img2.jpg';
import review2 from '../assets/img3.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'New York, NY',
    review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
    image: review1,
  },
  {
    name: 'John Smith',
    location: 'Los Angeles, CA',
    review: 'I can’t thank this service enough! The support I received helped me navigate some tough times.',
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#f7f8fc] py-12" id="testimonial">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-3">What Our Clients Say</h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto text-gray-600">
            Hear from some of our satisfied clients about how our services have positively impacted their lives and well-being.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white rounded-lg p-8 flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="text-5xl text-primary opacity-50" />
              </div>
              {/* Review Content */}
              <div className="flex flex-col space-y-4">
                <p className="text-lg mb-2 text-gray-700 italic">"{testimonial.review}"</p>
                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt="reviewer"
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary"
                  />
                  <div>
                    <p className="font-semibold text-xl">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
