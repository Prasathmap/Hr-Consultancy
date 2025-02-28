import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";


const Ourservices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    
    <header className="relative h-40 flex flex-col items-center justify-center bg-azure overflow-hidden">
    {/* Animated Text with Gradient Effect */}
      <motion.h1
        className="relative text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Our Services
      </motion.h1>

      {/* Animated Gradient Line */}
      <motion.div
        className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-#2c83ec-500 to-#94d8ff-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </header>

      <section className="px-6 text-center py-16">
        <h2 className="text-4xl font-bold text-yellow-600">Who We Are Right Fit For?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            { title: "Startups", desc: "Startups need agile and cost-effective HR solutions that support growth, streamline hiring, and manage a small but dynamic team efficiently.." },
            { title: "Mid and Large Enterprises", desc: "We provide full product development services for scaling your idea." },
            { title: "Organizations Going Digital", desc: "As businesses transform digitally, HR must adapt to remote work, AI-driven recruitment, and advanced engagement strategies" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Development Process</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              title: "Team Engagement",
              desc: "Understanding scope, scale, timeline, and objectives to ensure a successful project execution.",
              img: "/Ourservices/P1.jpg",
              benefits: ["Glad Morning", "Daiwom Meeting", "Review Meeting", "Team Building Activities"],
            },
            {
              title: "Business Process Management",
              desc: "Defining the project's scope, deliverables, milestones, risks, and team responsibilities.",
              img: "/Ourservices/P2.jpg",
              benefits: ["Engagement Model", "AS-IS and TO-BE Process Flow", "Standard Operating Procedure (SOP)", "Customer Engagement"],
            },
            {
              title: "Performance Manager",
              desc: "Defining the project's scope, deliverables, milestones, risks, and team responsibilities.",
              img: "/Ourservices/P3.jpg",
              benefits: ["Strategic Growth Management", "Skills / competencies", "Recruitment", "Team Building Activities"],
            },
            {
              title: "Leadership Development",
              desc: "Defining the project's scope, deliverables, milestones, risks, and team responsibilities.",
              img: "/Ourservices/P4.jpg",
              benefits: ["Executive Development Program", "Second Level Leadership Development Program", "Middle Management Development Program", "Operation Management Program"],
            },
            {
              title: "Statutory Compliance",
              desc: "Defining the project's scope, deliverables, milestones, risks, and team responsibilities.",
              img: "/Ourservices/P5.jpg",
              benefits: ["ESI Act", "PF Act", "Gratuity Act", "Factory Act","Shop and Establishment Act"],
            },
            {
              title: "Work Management Continuous Improvement",
              desc: "Defining the project's scope, deliverables, milestones, risks, and team responsibilities.",
              img: "/Ourservices/P6.jpg",
              benefits: ["SS", "Kaizan", "Quality Circle", "Auditing"],
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="md:w-1/2 object-cover" src={step.img} alt={step.title} />
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.desc}</p>
                <h4 className="font-semibold text-indigo-600">What you get:</h4>
                <ul className="text-gray-500 list-disc pl-5">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <MdArrowOutward /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-500 text-white text-center py-12">
        <h2 className="text-4xl font-bold">Start Your Product Journey With Us</h2>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-xl">Consult Experts</button>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Services We Cover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Employee Lifecycle Management🔄 ",
              desc: "From hiring to retirement, HR solutions streamline the entire employee journey..",
            },
            {
              title: "Compliance & Risk Management ⚖️",
              desc: "Ensure legal compliance and mitigate risks with automated HR tools..",
            },
            {
              title: "Workforce Analytics & AI Insights 📊",
              desc: "Leverage data-driven decisions to enhance workforce productivity.",
            },
          ].map((service, index) => (
            <div key={index} className="p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

  
    </div>
  );
};

export default Ourservices;