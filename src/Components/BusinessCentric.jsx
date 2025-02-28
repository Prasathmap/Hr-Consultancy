import React from "react";

const data = [
  {
    img: "/Business-Centric-pics/H1.png",
    title: " Recruitment & Hiring",
  },

  {
    img: "/Business-Centric-pics/H2.png",
    title: "Employee Experience & Engagement",
  },

  {
    img: "/Business-Centric-pics/H3.png",
    title: "Training & Development",
  },

  {
    img: "/Business-Centric-pics/H4.png",
    title: "Performance Management",
  },

  {
    img: "/Business-Centric-pics/H5.png",
    title: "HR Technology & Automation",
  },

  {
    img: "/Business-Centric-pics/H6.png",
    title: "Diversity, Equity & Inclusion (DEI)",
  },
  {
    img: "/Business-Centric-pics/H7.webp",
    title: "Employee Well-being & Work-Life Balance",
  },
  {
    img: "/Business-Centric-pics/6974613.png",
    title: "Compliance & Ethical HR Practices",
  },
];    
function BusinessCentric() {
  return (
    <>
    <div className="px-2  py-14">
      <div className="sm:px-12">
        <div className=" font-extrabold text-base sm:text-4xl ">
          <div className="flex gap-2 flex-col items-center">
            <p>Over <span className="text-blue-600  ">15 Years</span>  of Business-Centric</p>
            <p>Tech Expertise</p>
            <p className="text-base sm:text-2xl pt-4 ">
               Straightforward solutions to complex business challenges.
           </p>
          </div>

        </div>

        

        <div className="py-16  flex flex-wrap justify-center items-center gap-16 gap-x-36  ">
          {data.map((d, index) => (
            <div
              key={index}
              className="group shrink-0 h-64 w-48 rounded-md shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)] flex  flex-col font-semibold text-center justify-center items-center "
            >
              <div className=" flex flex-col items-center px-2 gap-2 text-center">
                <img
                  src={d.img}
                  alt=""
                  className="group-hover:-translate-y-2 duration-500 "
                />
                <p>{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row px-2  items-center justify-evenly rounded-md py-16 mx-4  my-2 shadow-[0_10px_60px_5px_rgba(0.3,0.3,0.3,0.3)] ">
        <div className="sm:w-1/2 py-10">
          <p className="text-3xl font-extrabold py-3">HR Policy Transformation</p>
          <p className="text-lg">
          The Human Resources (HR) department plays a vital role in managing an organization’s workforce 
          by ensuring employee satisfaction, compliance with labor laws, and overall business efficiency.
          One of the primary responsibilities of HR is recruitment and talent acquisition, 
          where HR professionals create job descriptions, screen candidates, 
          and conduct interviews to hire the best talent. Once employees are hired, 
          HR oversees onboarding and offboarding to ensure a smooth transition into and out of the company, 
          including orientation programs and exit interviews
          </p>
        </div>
        <div>
          <img src="/Business-Centric-pics/images-3.jpg" alt="" />
        </div>
      </div>
    </div>
    
    </>
  );
}

export default BusinessCentric;
