import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import logoImg from "../assets/LOGO.png";


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
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
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
                behavior: 'smooth'
            });
        }
    };

    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            {['home', 'about','services', 'pricing', 'testimonial'].map(section => (
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
                        className={`text-white ${activeSection === section ? 'isActive' : ''}`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.a>
                </li>
            ))}
        </ul>
    );

    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-50'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* Logo */}
                <div>
    <a href="/">
        <img src={logoImg} alt="Logo" style={{ width: '70px', height: 'auto' }} />
    </a>
</div>


                
                {/* Nav Items */}
                <div className='hidden md:flex flex-grow justify-center'>
                    <nav>{navLinks}</nav>
                </div>
                {/* Button */}
                <div className='hidden md:block'>
                    <a 
                    onClick={e => {
                        e.preventDefault();
                        handleScrollTo('contact')
                    }}
                    href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
                        Contact Us
                    </a>
                </div>
                {/* Hamburger Menu */}
                <div className='block md:hidden'>
                    <button 
                        onClick={handletoggle}
                        className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                        <HiOutlineMenuAlt3 className='size-6'/>
                    </button>
                </div>
            </div>
            {/* Mobile Nav Items */}
            {isOpen && (
                <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
                        <li className='py-2'>
                            <a href="#contact"
                               className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                               onClick={(e) => {
                                   e.preventDefault();
                                   handleClosemenu();
                                   handleScrollTo('contact')
                               }}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
