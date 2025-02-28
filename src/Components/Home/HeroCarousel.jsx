import { useEffect, useState } from "react";

const slides = [
  {
    title: "Bright HR Consultancy",
    description: "A specialized HR consultancy providing comprehensive workforce solutions.",
    img: "/HeroCarousel-pics/H2.png",
    link: "/about-us",
    buttonText: "About us"
  },
  {
    title: "HR Management",
    description: "Development of second-level leaders in the organization to play greater roles.",
    img: "/HeroCarousel-pics/H2.webp",
    link: "/contact-us",
    buttonText: "Contact us"
  },
  {
    title: "Fighting Spill Response",
    description: "Improvement of attitude, skills, knowledge, and sense of belonging among employees.",
    img: "/HeroCarousel-pics/H4.webp",
    link: "/our-service",
    buttonText: "Our Services"
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;
  const timeTrans = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    }, timeTrans);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <header>
      <section style={{ position: "relative", width: "100%", height: "85vh", overflow: "hidden" }}>
        <ul style={{ padding: 0, margin: 0, listStyle: "none", width: "100%", height: "100%" }}>
          {slides.map((slide, index) => (
            <li
              key={index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                transition: "opacity 1s ease-in-out",
                opacity: index === current ? 1 : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "2rem",
                boxSizing: "border-box"
              }}
            >
              <article style={{ maxWidth: "50%", color: "#fff", zIndex: 11, textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
                <h3 style={{ fontSize: "3.5em", fontWeight: 700, marginBottom: "0.5rem" }}>
                  <em style={{ 
                    background: "linear-gradient(145deg,#ff2f09,#c24a4e)", 
                    WebkitTextFillColor: "transparent", 
                    WebkitBackgroundClip: "text" 
                  }}>
                    {slide.title}
                  </em>
                </h3>
                <p style={{ color: "rgba(7, 7, 7, 0.8)", fontWeight: 300, fontSize: "1.2em", marginBottom: "1rem" }}>
                  {slide.description}
                </p>
                <a 
                  href={slide.link} 
                  style={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    backgroundColor: "#ff2f09",
                    color: "#FFF",
                    fontSize: "1.2em",
                    position: "relative",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: "0 4px 15px rgba(255, 47, 9, 0.3)"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#c70000";
                    e.target.style.boxShadow = "0 6px 20px rgba(199, 0, 0, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ff2f09";
                    e.target.style.boxShadow = "0 4px 15px rgba(255, 47, 9, 0.3)";
                  }}
                >
                  {slide.buttonText} 
                  <span style={{ fontSize: "1.2em", transition: "transform 0.3s ease" }}>➜</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
        
        {/* Dots Navigation */}
        <aside style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem", zIndex: 10 }}>
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: index === current ? "#ff2f09" : "#FFF",
                cursor: "pointer",
                transition: "transform .3s, background-color 0.3s",
                transform: index === current ? "scale(1.5)" : "scale(1)"
              }}
            ></span>
          ))}
        </aside>
      </section>
    </header>
  );
};

export default Slider;
