import React from 'react';

// ✅ Import images from src/assets
import architecturalImg from "../assets/architectural.jpg";
import structuralImg from "../assets/structural.jpg";
import bimMepImg from "../assets/bimMep.jpg";

const servicesData = [
  {
    id: 1,
    title: "Architectural Design",
    text: "Innovative and efficient architectural design tailored to your project’s needs.",
    img: architecturalImg,
  },
  {
    id: 2,
    title: "Structural Engineering",
    text: "Expert structural analysis and design, ensuring building safety and stability.",
    img: structuralImg,
  },
  {
    
    id: 3,
    title: "BIM & MEP Coordination",
    text: "Coordinating BIM and MEP systems for integrated and efficient project execution.",
    img: bimMepImg,
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-body">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" className="btn-secondary">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
