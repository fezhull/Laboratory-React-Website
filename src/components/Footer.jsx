import React from 'react'
import footerLogo from "../assets/footer.jpg"
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { motion } from "framer-motion"
import { fadeIn } from "../utilis/animationVariants"
import logoImg from "../assets/LOGO.png";

const Footer = () => {
  return (
    <div className='py-8 bg-gray-100 px-6'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
            <motion.div 
             variants={fadeIn('down', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.7}}
            className='space-y-4'>
                     <div>
    <a href="/">
        <img src={logoImg} alt="Logo" style={{ width: '70px', height: 'auto' }} />
    </a>
</div>

                <p className='text-sm text-gray-700'>
                    Lorem Ipsum is s
                </p>

                <div className='flex space-x-3'>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-8 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaFacebookF className='text-sm'/>
                    </a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-8 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaTwitter className='text-sm'/>
                    </a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-8 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaInstagram className='text-sm'/>
                    </a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-8 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaLinkedin className='text-sm'/>
                    </a>
                </div>
            </motion.div>

            <motion.div
             variants={fadeIn('down', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.7}}
            className='space-y-4'>
                <h3 className='text-lg font-semibold mb-3'>Quick links</h3>
                <ul className='space-y-2'>
                    <li>
                        <a href="#home" className='hover:underline text-gray-700 text-sm'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='hover:underline text-gray-700 text-sm'>About Us</a>
                    </li>
                    <li>
                        <a href="#services" className='hover:underline text-gray-700 text-sm'>Services</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:underline text-gray-700 text-sm'>Contact Us</a>
                    </li>
                </ul>
            </motion.div>

            <motion.div
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.7}}
            className='space-y-4'>
                <h3 className='text-lg font-semibold mb-3'>Support</h3>
                <ul className='space-y-2'>
                    <li>
                        <a href="#" className='hover:underline text-gray-700 text-sm'>FAQs</a>
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700 text-sm'>Terms of Services</a>
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700 text-sm'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:underline text-gray-700 text-sm'>Support Center</a>
                    </li>
                </ul>
            </motion.div>

            <motion.div
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.7}}
            className='space-y-4'>
                <h3 className='text-lg font-semibold mb-3'>Contact Info</h3>
                <ul className='space-y-2'>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkedAlt className='text-primary'/>
                        <p className='text-gray-700 text-sm'>123 Street, City, Country</p>
                    </li> 
                    <li className='flex items-center gap-2'>
                        <FaPhoneAlt className='text-primary'/>
                        <p className='text-gray-700 text-sm'>+123 456 7890</p>
                    </li> 
                    <li className='flex items-center gap-2'>
                        <FaEnvelope className='text-primary'/>
                        <p className='text-gray-700 text-sm'>info@richfoodsltd.com</p>
                    </li>  
                </ul>
            </motion.div>

        </div>
    </div>
  )
}

export default Footer
