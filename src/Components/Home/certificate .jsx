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
    <container className="marque-wrapper home-wrapper-2 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-orange rounded-lg shadow-lg">
    <h1 className="text-4xl font-extrabold text-center mb-6 drop-shadow-lg">
        Our Clients
      </h1>
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
                <div key={index} className="mx-4 w-20 h-25 transform hover:scale-110 transition-transform duration-300">
                  <img src={`/Brand/B${(index % 8) + 1}.png`} alt="brand" className="rounded-lg shadow-md" />
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