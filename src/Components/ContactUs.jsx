import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";


const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-full">
     
      </div>

        {/* Hero Section */}
             <header className="relative h-80 flex flex-col items-center justify-center bg-azure overflow-hidden">
                  {/* Animated Text with Gradient Effect */}
                  <motion.h1
                    className="relative text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  >
                    Contacts
                  </motion.h1>
            
                  {/* Animated Gradient Line */}
                  <motion.div
                    className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  />
                </header>
            
      

      <div className="bg-gradient-to-b from-blue-950 to-white px-4 py-10">
        <div className="py-8 text-center text-white text-lg sm:text-xl">
          <p>
            We have professional alliances with leading Universities and
            Colleges around the world.
          </p>
        </div>

        <div className="bg-white sm:p-14 p-8 rounded-3xl flex flex-col sm:flex-row shadow-lg">
          <div className="bg-blue-950 text-white sm:w-2/5 rounded-3xl p-10 flex flex-col gap-6">
            <div>
              <p className="font-bold text-2xl">Get in Touch</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <IoLocationSharp size={40} className="text-purple-700" />
              <p>Room No.301, Friends Mahal 3rd Floor,
                  No.20, Koodal Alagar Perumal Kovil Street,
                  Madurai - 625 001</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <MdCall size={27} className="text-yellow-500" />
              <p>+91 88255 77277</p>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <HiOutlineMailOpen size={28} className="text-orange-500" />
              <p>brighthrmdu@gmail.com</p>
            </div>

            <div className="flex gap-3 py-6 text-orange-600">
              <FaFacebookSquare size={40} />
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={40} />
              </a>
              <FaYoutube size={40} />
              <a
                href="https://www.linkedin.com/showcase/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin size={40} />
              </a>
            </div>
          </div>

          <div className="sm:w-2/3 sm:px-4 pt-4 pb-10">
            <div>
              <p className="font-bold text-2xl">Primary Information</p>
            </div>

            <div className="flex flex-wrap justify-center gap-5 py-3">
              <div className="py-4 border rounded-xl outline-none flex justify-start items-center w-80 focus-within:ring-2 focus-within:ring-blue-500">
                <IoMdPerson className="w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none w-5/6 px-2 py-2 rounded-xl"
                />
              </div>

              <div className="py-4 border rounded-xl outline-none flex justify-start items-center w-80 focus-within:ring-2 focus-within:ring-blue-500">
                <IoMdPerson className="w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none w-5/6 px-2 py-2 rounded-xl"
                />
              </div>
              <div className="py-4 border rounded-xl outline-none flex justify-start items-center w-80 focus-within:ring-2 focus-within:ring-blue-500">
                <HiOutlineMailOpen className="w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="outline-none w-5/6 px-2 py-2 rounded-xl"
                />
              </div>
              <div className="py-4 border rounded-xl outline-none flex justify-start items-center w-80 focus-within:ring-2 focus-within:ring-blue-500">
                <FaPhoneAlt className="w-1/6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="outline-none w-5/6 px-2 py-2 rounded-xl"
                />
              </div>
            </div>

            <div className="border rounded-xl outline-none h-52 w-full">
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="Write description..."
                rows="10"
                className="rounded-xl px-4 outline-none py-2 w-full h-full focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex sm:justify-end py-3 gap-4 justify-center sm:text-lg text-sm">
          <button className="bg-red-600 sm:px-12 hover:bg-red-900 transition-all duration-500 rounded-xl text-white font-bold py-4 sm:w-60 w-1/2">
            Submit Message
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default ContactUs;
