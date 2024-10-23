import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import servicesImg1 from "../assets/img1.jpg";
import servicesImg2 from "../assets/img2.jpg";
import servicesImg3 from "../assets/img3.jpg";
import servicesImg4 from "../assets/logo.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
    return (
        <div className='bg-[#f7f8fc]' id='services'>
            <div className='pt-20 px-4 container mx-auto'>
                <motion.div 
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-center space-y-2'
                >
                    <h2 className='text-3xl font-bold text-heroBg'>Services We Offer</h2>
                    <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>

                <div className='py-1 md:w-4/5 mx-auto'>
                    <Tabs>
                        <motion.TabList 
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex flex-wrap justify-between items-center md:gap-4 gap-4 mt-16"
                        >
                            <Tab aria-label="Protein Testing">Protein Testing</Tab>
                            <Tab aria-label="Reactions Testing">Reactions Testing</Tab>
                            <Tab aria-label="Samples Selling">Samples Selling</Tab>
                            <Tab aria-label="Machine Selling">Machine Selling</Tab>
                        </motion.TabList>

                        {/* Tab Panels */}
                        <TabPanel>
                            <motion.div 
                                variants={fadeIn('down', 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className='md:w-1/2 bg-white rounded-lg p-12'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Protein Testing</h3>
                                    <p className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Comprising of:</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Lorem Ipsum is simply d</li>
                                        <li>Lorem Ipsum is simply </li>
                                        <li>Lorem Ipsum is simply </li>
                                        <li>Lorem Ipsum is simply </li>
                                    </ul>
                                </div>
                                <div className='md:w-1/2'>
                                    <img 
                                        src={servicesImg1} 
                                        alt="Image representing Protein Testing services" 
                                        className='w-3/4 h-auto rounded-2xl object-cover mx-auto'
                                    />
                                </div>
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div 
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className='md:w-1/2 bg-white rounded-lg p-12'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Reactions Testing</h3>
                                    <p className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='md:w-1/2'>
                                    <img 
                                        src={servicesImg2} 
                                        alt="Image representing Reactions Testing services" 
                                        className='w-3/4 h-auto rounded-2xl object-cover mx-auto'
                                    />
                                </div>
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div 
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className='md:w-1/2 bg-white rounded-lg p-12'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Samples Selling</h3>
                                    <p className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='md:w-1/2'>
                                    <img 
                                        src={servicesImg3} 
                                        alt="Image representing Samples Selling services" 
                                        className='w-3/4 h-auto rounded-2xl object-cover mx-auto'
                                    />
                                </div>
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div 
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className='md:w-1/2 bg-white rounded-lg p-12'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Machine Selling</h3>
                                    <p className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className='md:w-1/2'>
                                    <img 
                                        src={servicesImg4} 
                                        alt="Image representing Machine Selling services" 
                                        className='w-3/4 h-auto rounded-2xl object-cover mx-auto'
                                    />
                                </div>
                            </motion.div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;
