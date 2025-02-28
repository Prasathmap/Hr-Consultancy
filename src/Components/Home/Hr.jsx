import React from "react";
import { MdHomeWork } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { motion } from "framer-motion";
import Event from "../../Data/Eventsdata";



function Why() {
  return (
    <>
    <div className="my-14 top-20 px-4 md:px-12 ">
        <div className="flex flex-col items-center text-center mb-10">
            <motion.h1
                  className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  Why Bright HR Servies
                </motion.h1>
                <motion.div
                    className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
                <p className="text-center text-xl font-light">
                  A specialized HR consultancy providing comprehensive workforce solutions, 
                  from strategic talent management and recruitment to HR compliance and employee engagement,
                  enabling businesses to optimize their human capital and achieve organizational success.
                </p>
              </div>

      <div className="flex flex-wrap relative flex-row justify-center items-center">
        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <FaUserFriends  size={45}/>
          </div>

          <div>
            Seasoned Digital Transformation & Best Technology Professionals
          </div>
        </div>

        <div className="relative transition-all hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <MdHomeWork size={45} />
          </div>

          <div>Extensive Experience in Remote IT Services</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          
          ><FaHandHoldingHeart size={45} />
          
          </div>

          <div>Build Trust and value long-term Relationships</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <BiSolidLike  size={45}/>
          </div>

          <div>
            High-Quality of Service and Track record of successful Outcomes
          </div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <FaFolderOpen size={45} />
          </div>

          <div>Strong Project Management</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <HiLightBulb  size={45}/>
          </div>

          <div>Continuous Innovation</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <BsStars size={45}/>
          </div>

          <div>Focus on Excellence in everything we do</div>
        </div>

        <div className="relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex justify-center  px-8 flex-col mt-5 mx-10 h-60 w-60 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)]">
          <div
            className="flex
          justify-start "
          >
            <FaUsers size={45}/>
          </div>

          <div>Our Culture sets us apart.</div>
        </div>
      </div>
    </div>
    <container className="marque-wrapper home-wrapper-2 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-orange rounded-lg shadow-lg">
    <div className="flex flex-col items-center text-center mb-10">
            <motion.h1
                  className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  Events
                </motion.h1>
                <motion.div
                    className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
                
              </div>

      <div className="overflow-hidden border border-white p-4 rounded-lg">
        <motion.div
          className="flex space-x-4"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ display: 'flex', width: 'max-content' }}
        >
           {Event.map((event) =>
              event.image.map((imgSrc, index) => (
                <div
                  key={`${event.id}-${index}`}
                  className="flex justify-center items-center p-2 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-60 h-80"
                >
                  <img
                    src={imgSrc}
                    alt={event.title}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              ))
            )}
        </motion.div>
      </div>
    </container>
    </>
  );
}

export default Why;
