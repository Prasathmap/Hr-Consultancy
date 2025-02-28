import React from "react";
import { motion } from "framer-motion";
import FaqAccordion from "../FaqAccordion";

const Faq = () => {
  return (
    <div>
      <div className=" h-44  bg-red-400 flex relative ">
        <div className="absolute text-white text-2xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>India's Leading Consultancy In Madurai </p>
          <p>FAQ</p>
        </div>
      </div>

      <div className="gap-4 flex sm:flex-row flex-col  sm:px-10">
        <div className=" py-4  sm:w-1/2">
          <FaqAccordion
            title={"Difference Between Consultancy And Staffing?"}
            anss={
              " Consulting involves working with the client organization - across its hierarchy, across its function; to solve a particular problem or towards a said objective. Often times, the consultants help organisations define these objectives & goals. Staffing involves deploying resources towards already set objectives / goals at the client location. The role of the people who are deployed in an organisation is to deliver the KPIs of the particular role alone."
            }
          />

          <FaqAccordion
            title={"How Do I Find Whether Consultancy Is Fake Or Not?"}
            anss={
              "Its very true there are lot of fake consultancies these days. Be very careful before approaching any consultancy in terms of money mainly. First check the consultancy online through facebook , website or google. Later on just take a note of address of any consultancy and visit that consultancy or if you living far ask your friends to visit that address of consultancy. WSNE Consulting gives you a better opportunity to make your career with us, we are connected with PAN India reputed companies and International MNC. We provide best services to our clients and candidates."
            }
          />

          <FaqAccordion
            title={
              "How Do I Know That Bright  Hr Consulting. Is The Right Consulting Agency For Me?"
            }
            anss={
              "Knowing how to choose a recruitment agency is important for employers and job seekers alike. Companies that prefer to outsource the employment search and screening process must consider the reputation, policies, practices and costs of employment agencies. These same factors are important for job seekers, who must select employment agencies that will understand their unique skills and actively promote their services. A great recruitment agency will help match the most qualified job seeker with the job opening best suited for their skills. By clarifying your needs and learning the key traits of the agency, you can find the right recruitment agency for you."
            }
          />
        </div>

        <div className=" sm:w-1/2 flex flex-col items-start  justify-center gap-8 px-2 py-8">
        <motion.h1
                  className="relative text-2xl sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  Our Location
                </motion.h1>
                <motion.div
                    className=" h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
          <div className="flex justify-center">
          
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2362696299624!2d78.11219407479234!3d9.914269990186838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c581bf342461%3A0xa45cd5d8521412e7!2sFriends%20Mahal!5e0!3m2!1sen!2sin!4v1740716858831!5m2!1sen!2sin"              width="800px"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
