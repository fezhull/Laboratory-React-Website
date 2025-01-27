import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoVideo from '../assets/logo/Logo.mp4'; // Import the video logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handletoggle = () => setIsOpen(!isOpen);
  const handleClosemenu = () => setIsOpen(false);

  const handleScroll = () => {
    const sections = ['home', 'who we are', 'What we do', 'testimonial', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
      {['home', 'who we are', 'What we do', 'testimonial', 'contact'].map((section) => (
        <li key={section}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              handleClosemenu();
              handleScrollTo(section);
            }}
            href={`#${section}`}
            className={`text-black ${activeSection === section ? 'isActive' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className='bg-white text-black py-6 px-4 fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* Video Logo */}
        <div>
          <a href="#home">
            <video
              autoPlay
              loop
              muted
              style={{
                width: '250px', // Smaller width
                height: '120px', // Bigger height
                objectFit: 'cover', // Ensures the video maintains its aspect ratio without distortion
              }}
            >
              <source src={logoVideo} type="video/mp4" />
              Sorry, your browser does not support the video tag.
            </video>
          </a>
        </div>

        <div className='hidden md:flex flex-grow justify-center'>
          <nav>{navLinks}</nav>
        </div>

        <div className='hidden md:block'>
          <a href="tel:+254728175270" className='flex items-center text-black hover:text-primary text-lg font-medium'>
            <FaPhoneAlt className='mr-2 text-xl' /> +254 (728) 175-270
          </a>
        </div>

        <div className='block md:hidden'>
          <button onClick={handletoggle} className={`text-black focus:outline-none ${isOpen ? 'border border-black' : ''}`}>
            <HiOutlineMenuAlt3 className='text-3xl' />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className='absolute top-full left-0 w-full bg-white z-20 md:hidden'>
          <ul className='flex flex-col p-4 space-y-3'>
            {navLinks.props.children}
            <li className='py-2'>
              <a href="tel:+254728175270" className='flex items-center text-black hover:bg-primary text-lg font-medium' onClick={(e) => { e.preventDefault(); handleClosemenu(); }}>
                <FaPhoneAlt className='mr-2 text-xl' /> +254 (728) 175-270
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
