import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';  // Import the phone icon
import { motion } from 'framer-motion';
import logoImg from '../assets/LOGO.png'; // Make sure the logo path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClosemenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ['home','about', 'services', 'testimonial'];
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
      {['home', 'about',  'services', 'testimonial'].map((section) => (
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
        {/* Logo */}
        <div>
          {/* <a href="/">
            <img src={logoImg} alt="Logo" style={{ width: '70px', height: 'auto' }} />
          </a> */}
        </div>

        {/* Nav Items */}
        <div className='hidden md:flex flex-grow justify-center'>
          <nav>{navLinks}</nav>
        </div>

        {/* Phone Number with Icon */}
        <div className='hidden md:block'>
          <a
            href="tel:+1234567890"  // Replace with your phone number
            className='flex items-center text-black hover:text-primary text-lg font-medium'
          >
            <FaPhoneAlt className='mr-2 text-xl' /> {/* Phone icon */}
            +1 (234) 567-890  {/* Replace with your phone number */}
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className='block md:hidden'>
          <button
            onClick={handletoggle}
            className={`text-black focus:outline-none ${isOpen ? 'border border-black' : ''}`}
          >
            <HiOutlineMenuAlt3 className='size-6' />
          </button>
        </div>
      </div>

      {/* Mobile Nav Items */}
      {isOpen && (
        <nav className='absolute top-full left-0 w-full bg-white z-20 md:hidden'>
          <ul className='flex flex-col p-4 space-y-3'>
            {navLinks.props.children}
            <li className='py-2'>
              <a
                href="tel:+1234567890" // Replace with your phone number
                className='flex items-center text-black hover:text-primary text-lg font-medium'
                onClick={(e) => {
                  e.preventDefault();
                  handleClosemenu();
                }}
              >
                <FaPhoneAlt className='mr-2 text-xl' /> {/* Phone icon */}
                +1 (234) 567-890  {/* Replace with your phone number */}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
