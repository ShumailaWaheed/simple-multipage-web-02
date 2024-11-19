import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-section">
        <div className="about-title">
          <h1>Traditional & Delicious Ice Cream Since 2022</h1>
        </div>

        <div className="about-content">
          <div className="about-us">
            <h4>Our Story</h4>
            <h5 className="subtitle">Over 70 years of tradition and flavor</h5>
            <p>We have been serving delicious, traditional ice cream since 1950. Our secret recipes, passed down through generations,
              offer a unique blend of taste that takes you back in time. Every scoop is made with the finest ingredients and love, 
              ensuring the most delicious experience every time.</p>
            <a href="#" className="btn-secondary">Learn More</a>
          </div>

          <div className="about-image">
            <Image 
              src="/images/about.jpg" 
              alt="About Us" 
              width={500} 
              height={300} 
              className="custom-image-class"
            />
          </div>

          <div className="our-features">
            <h4>Our Features</h4>
            <p>Our ice cream is made with only the freshest ingredients, using traditional methods. We pride ourselves on quality, 
              taste, and consistency.</p>
            <h5 className="feature-item">
              <FaCheck className="icon" /> Fresh, Locally Sourced Ingredients
            </h5>
            <h5 className="feature-item">
              <FaCheck className="icon" /> Handcrafted with Love
            </h5>
            <h5 className="feature-item">
              <FaCheck className="icon" /> Timeless Flavors
            </h5>
            <a href="#" className="btn-primary">Explore Flavors</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
