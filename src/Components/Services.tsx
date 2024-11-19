"use client";

import React from "react";
import Image from "next/image";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Quality Maintain",
      description:
        "Ensuring exceptional standards, we focus on delivering reliable and consistent quality.",
      imageSrc: "/images/service-1.jpg",
    },
    {
      id: 2,
      title: "Individual Approach",
      description:
        "We prioritize personalized solutions tailored to meet the unique needs and expectations.",
      imageSrc: "/images/service-2.jpg",
    },
    {
      id: 3,
      title: "Celebration Ice Cream",
      description:
        "We strive to provide innovative solutions, ensuring attention to detail and a commitment.",
      imageSrc: "/images/service-3.jpg",
    },
  ];

  return (
    <div id="services" className="services-container">
      <h1 className="services-title">
        Best Services We Provide For Our Clients
      </h1>
      <div className="services-content">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-image">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={500} 
                height={300} 
                className="service-img"
              />
            </div>
            <div className="service-details">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
              <a href="#" className="service-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
