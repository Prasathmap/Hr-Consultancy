import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaCloud, FaChartLine, FaLaptopCode, FaPeopleCarry } from "react-icons/fa"; // Import additional icons
import { motion } from "framer-motion";

const servicesData = [
  {
    icon: <RiTeamFill size={40} />,
    text: "Team Engagement",
  },
  {
    icon: <FaCloud size={40} />,
    text: "Business Process Management",
  },
  {
    icon: <FaChartLine size={40} />,
    text: "Performance Manager",
  },
  {
    icon: <FaLaptopCode size={40} />,
    text: "Leadership Development",
  },
  {
    icon: <FaPeopleCarry size={40} />,
    text: "Statutory Compliance",
  },
  {
    icon: <FaChartLine size={40} />,
    text: "Work Management Continuous Improvement",
  },
];

function Services() {
  return (
    <div className="my-14 top-20 px-4 md:px-12">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10">
      <motion.h1
        className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Our Services
      </motion.h1>
      <motion.div
              className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            />
        <p className="text-lg text-gray-600 max-w-2xl">
          At HR, we accelerate business outcomes by rapid digital transformation services.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center p-6 bg-blue-900 text-white rounded-lg shadow-lg transition transform hover:-translate-y-3 duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.text}</h3>
            <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-20 transition duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
