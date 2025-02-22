import React, { useEffect } from "react";
import HeroCarousel from "./Home/HeroCarousel";
import Services from "./Home/Services";
import WhyHR from "./Home/Hr";
import BusinessCentric from "./BusinessCentric";
import Faq from "./Home/Faq";
import Cer from "./Home/certificate ";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <HeroCarousel />
      <Services />
      <Cer/>
      <WhyHR />
      <BusinessCentric />
      <Faq />
    </>
  );
};

export default Home;
