import { motion } from "framer-motion";

export default function BrightHRSection() {
  return (
    <>
    <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6">
      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
      <motion.h1
           className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
           initial={{ opacity: 0, y: 30, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
      We Provide Solutions For You
      </motion.h1>
              
        
       
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


    <container className="marque-wrapper home-wrapper-2 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-orange rounded-lg shadow-lg">
   <div className="flex flex-col items-center text-center mb-10">
         <motion.h1
           className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
           initial={{ opacity: 0, y: 30, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
         >
           Our Clients
         </motion.h1>
         <motion.div
            className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />   
         </div>
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper overflow-hidden border border-white p-4 rounded-lg">
            <motion.div
              className="d-flex items-center"
              animate={{ x: [0, -500] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ display: 'flex', width: 'max-content' }}
            >
              {[...Array(16)].map((_, index) => (
                <div key={index} className="mx-4 w-28 h-50 transform hover:scale-110 transition-transform duration-300">
                  <img src={`/Brand/B${(index % 7) + 1}.png`} alt="brand" className="rounded-lg shadow-md" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </container>
    
      </>
  );
}