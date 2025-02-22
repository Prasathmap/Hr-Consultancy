import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaCloud, FaChartLine, FaLaptopCode, FaPeopleCarry } from "react-icons/fa"; // Import additional icons

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
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Our Services</h2>
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
