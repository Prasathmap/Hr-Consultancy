import React from "react";
import { motion } from "framer-motion";
import Event from "../Data/Eventsdata";

const EventPage = () => {
  return (
    <>
      {/* Hero Section */}
            <header className="relative h-40 flex flex-col items-center justify-center bg-azure overflow-hidden">
            {/* Animated Text with Gradient Effect */}
            <motion.h1
              className="relative text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Event
            </motion.h1>
      
            {/* Animated Gradient Line */}
            <motion.div
              className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />
          </header>
      

      {/* Events Display with Date on One Side and Content on the Other */}
      <div className="p-6 grid grid-cols-1 gap-6">
        {Event.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg bg-white backdrop-blur-md bg-opacity-70 border border-gray-200 flex items-center p-4"
          >
            <div className="w-1/4 text-center pr-4 border-r border-gray-300">
              <p className="text-gray-900 font-bold text-lg">{event.date}</p>
             
            </div>
            <div className="w-3/4 flex flex-col pl-4">
              {event.image && event.image.length > 0 && (
                <div className="flex space-x-4 overflow-x-auto">
                  {event.image.map((imgSrc, imgIndex) => (
                    <img key={imgIndex} src={imgSrc} alt={event.title} className="w-52 h-39 object-cover rounded-lg" />
                  ))}
                </div>
              )}
              <div className="mt-2">
                <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default EventPage;
