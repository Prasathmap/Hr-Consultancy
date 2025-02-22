import React, { useEffect } from "react";
import { CiFacebook, CiCirclePlus } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-60 flex flex-col items-center justify-center bg-azure overflow-hidden">
      {/* Animated Text with Gradient Effect */}
      <motion.h1
        className="relative text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        About us
      </motion.h1>

      {/* Animated Gradient Line */}
      <motion.div
        className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </header>


      {/* Content Section */}
      <div className="py-12 px-6 sm:px-24">
        <div className="space-y-6 text-gray-800">
          <h2 className="text-4xl font-semibold border-b-4 border-orange-500 pb-3">Who We Are</h2>
          <p className="text-lg sm:text-xl">
            We are a team of innovators and problem solvers on a mission to revolutionize how digital products are built
            by leveraging innovation acceleration, data insights, emerging technology (AI), user-experience design, and global digital talent.
          </p>
          <p className="text-lg font-semibold italic text-orange-600">Build Consultancy Right, First Time.</p>
          <p className="text-gray-600 text-base sm:text-lg">
            Bright Management Services was raised in the year 2010. empowering ambitious early-stage startups,
            growth businesses, and enterprises to design and develop innovative digital products with talented Agile product teams.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center py-12">
          {[
            { label: "Established", value: "2010" },
            { label: "Clients", value: "26+" },
            { label: "Man Days", value: "2,015+" },
            { label: "Man Hours", value: "14,112+" },
            { label: "Man", value: "14,112+" },
            
           
          ].map((item, index) => (
            <div
              key={index}
              className="border-2 border-orange-500 p-6 rounded-lg hover:bg-orange-500 hover:text-white transition-transform transform hover:scale-105"
            >
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm font-light">{item.label}</p>
            </div>
          ))}

        </div>{/* Partners Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-semibold">Our Awards</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
          Bright Management Services collaborates with leading companies to leverage our expertise in offshore development and digital production outsourcing.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["A1.jpg","A2.jpg","A3.jpg","A4.jpg","A5.jpg","A6.jpg",].map((img, index) => (
              <div key={index} className="p-3 border border-gray-300 hover:bg-orange-300 transition duration-300">
                <img src={`/Awards/${img}`} alt="Partner Logo" className="h-20 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-semibold">Our Trusted Partners</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
          Bright Management Services collaborates with leading companies to leverage our expertise in offshore development and digital production outsourcing.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["amazon-web-services-logo.jpg.webp", "Apple-1.png.webp", "Automation-Anywhere.png.webp", "Bing-Partner.png.webp", "Blue-Prism-Delivery-Partner.png.webp", "Google-Partner.png.webp"].map((img, index) => (
              <div key={index} className="p-3 border border-gray-300 hover:bg-orange-300 transition duration-300">
                <img src={`/About-pics/${img}`} alt="Partner Logo" className="h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-semibold">We are your team to count on.</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
            Headquartered in Madurai our global team members span 14+ countries, with our back-office in Madurai supporting worldwide operations.
          </p>
          <div className="flex justify-center space-x-6 mt-6 text-orange-600">
            <CiFacebook size={40} />
            <FaXTwitter size={40} />
            <CiCirclePlus size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
