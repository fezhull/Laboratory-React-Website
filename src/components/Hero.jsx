import React from 'react';
import { IoArrowForwardCircle } from "react-icons/io5";
import heroImg from "../assets/img001.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Hero = () => {
    return (
        <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-full'>
                
                {/* Left Side */}
                <motion.div 
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-1/2'
                >
                    <h1 className='text-2xl font-secondary font-bold mb-4 leading-snug md:w-3/5'>
                        Welcome to RichFoods Laboratory.
                    </h1>
                    <p className='text-lg mb-12 md:pr-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/70'>
                        <a href="#contact" className='flex gap-1 items-center'>
                            <span>Get started</span>
                            <IoArrowForwardCircle />
                        </a>
                    </button>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-1/2 flex justify-center'
                >
                    <img 
                        src={heroImg} 
                        alt="Hero image" 
                        //className='w-2/4 h-auto rounded-3xl object-cover mx-auto'
                         // Adjusted size with rounding
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
