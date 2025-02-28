import React, { useEffect } from "react";
import { CiFacebook, CiCirclePlus } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stats = [
    { value: 2010, label: "Establishment" },
    { value: 26, label: "Clients" },
    { value: 2015, label: "Man Days" },
    { value: 14112, label: "Man Hours" },
  ];
  
  const Counter = ({ value }) => {
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start({ count: value });
    }, [controls, value]);
  
    return (
      <motion.span
        animate={controls}
        initial={{ count: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ color: "rgba(182, 13, 1, 0.64)", fontSize: "2.5rem", fontWeight: "bold" }}
        >
        {Math.round(value)}
      </motion.span>
    );
  };
  

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-40 flex flex-col items-center justify-center bg-azure overflow-hidden">
      {/* Animated Text with Gradient Effect */}
      <motion.h1
        className="relative text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
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
            <motion.h1
                  className="relative text-4xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  Who We are...
                </motion.h1>
                <motion.div
                    className=" h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />          <p className="text-lg sm:text-xl">
            We are a team of innovators and problem solvers on a mission to revolutionize how digital products are built
            by leveraging innovation acceleration, data insights, emerging technology (AI), user-experience design, and global digital talent.
          </p>
          <p className="text-lg font-semibold italic text-orange-600">Build Consultancy Right, First Time.</p>
          <p className="text-gray-600 text-base sm:text-lg">
            Bright Management Services was raised in the year 2010. empowering ambitious early-stage startups,
            growth businesses, and enterprises to design and develop innovative digital products with talented Agile product teams.
          </p>
        </div>
        <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        background: "azure", // Azure Background
        textAlign: "center",
        color: "#db4a1f", // Updated text color
        padding: "60px 20px",
      }}
    >
      <motion.h1
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        Growth By Numbers
      </motion.h1>
      <motion.p
        style={{ fontSize: "1.2rem", marginBottom: "40px", color: "#db4a1f)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We have grown from strength to strength over the past 15 years
      </motion.p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            style={{
              flex: "1",
              minWidth: "180px",
              padding: "20px",
              borderRight: index !== stats.length - 1 ? "1px solid #db4a1f" : "none",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h1>
              <Counter value={stat.value} />
            </h1>
            <p style={{ marginTop: "10px", fontSize: "1rem", color: "#db4a1f" }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>

       {/* Partners Section */}
        <div className="text-center py-12">
          <div className="flex flex-col items-center text-center mb-10">
               <motion.h1
                 className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
                 initial={{ opacity: 0, y: 30, scale: 0.8 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
               >
                 Our Awards
               </motion.h1>
               <motion.div
                       className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
                       initial={{ scaleX: 0 }}
                       animate={{ scaleX: 1 }}
                       transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                     />
                 <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
          Bright Management Services collaborates with leading companies to leverage our expertise in offshore development and digital production outsourcing.
          </p>
               </div>
         
         
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["A1.jpg","A2.jpg","A3.jpg","A4.jpg","A5.jpg","A6.jpg",].map((img, index) => (
              <div key={index} className="p-3 border border-gray-300 hover:bg-orange-300 transition duration-300">
                <img src={`/Awards/${img}`} alt="Partner Logo" className="h-30 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center py-12">
        <div className="flex flex-col items-center text-center mb-10">
         <motion.h1
           className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
           initial={{ opacity: 0, y: 30, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
         >
        Our Trusted Partners
         </motion.h1>
         <motion.div
            className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />   
         </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
          Bright Management Services collaborates with leading companies to leverage our expertise in offshore development and digital production outsourcing.
          </p>
          <container className="marque-wrapper home-wrapper-2 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-orange rounded-lg shadow-lg">

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
                  <img src={`/Brand/B${(index % 7) + 1}.png`} alt="brand" className="rounded-lg shadow-md" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </container>
        </div>

        {/* Contact & Social Section */}
        <div className="text-center py-12">
        <div className="flex flex-col items-center text-center mb-10">
         <motion.h1
           className="relative text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
           initial={{ opacity: 0, y: 30, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
         >
           We are your team to count on.
         </motion.h1>
         <motion.div
            className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />   
         </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
            Headquartered in Madurai our global team members span 5+ countries, with our back-office in Madurai supporting worldwide operations.
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
