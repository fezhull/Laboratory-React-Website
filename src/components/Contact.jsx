import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, country, message };
    if (!data.name || !data.email || !data.phone || !data.country || !data.message) {
      alert("Please fill all fields.");
      return;
    }
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };

  return (
    <div className="bg-lightBlue-100 flex items-center justify-center py-28 px-8" id="contact">
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
          {/* Left Side */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-secondary mb-4 text-black">Make an Appointment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-white p-3">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-white p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Email Support</h3>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-white p-3">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Phone Assistance</h3>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-white p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Global Reach</h3>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8 p-8 bg-white shadow-xl rounded-md"
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              />
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      {showModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Thank you, {name}, for submitting your query.</p>
            <button
              onClick={closeModel}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
