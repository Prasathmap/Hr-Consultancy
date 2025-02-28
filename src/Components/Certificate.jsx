import { motion } from "framer-motion";

export default function BrightHRSection() {
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
                  Certificate
                </motion.h1>
          
                {/* Animated Gradient Line */}
                <motion.div
                  className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
              </header>
    
    <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6">
      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          We Provide Solutions For You
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          At Bright, we are proud to be an MSME-certified organization, dedicated to excellence in human resources management. Our certification underscores our commitment to delivering exceptional services that empower businesses to build and sustain a talented workforce.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          We believe that the heart of any successful organization lies in its people. With our expertise, we ensure you have the right strategies and support to achieve your HR goals effectively and efficiently.
        </p>
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
      >
        <img src="/Awards/C1.jpg" alt="HR Solutions" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6">
    <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
      >
        <img src="/Awards/C2.jpeg" alt="HR Solutions" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Certificate of Appreciation
        </h1>
       
        <p className="mt-4 text-lg text-gray-600">
          We believe that the heart of any successful organization lies in its people. With our expertise, we ensure you have the right strategies and support to achieve your HR goals effectively and efficiently.
        </p>
      </motion.div>

    </div>
    
      </>
  );
}