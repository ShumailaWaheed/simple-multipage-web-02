"use client";

import React from "react";
import Image from "next/image";

const Promotion: React.FC = () => {
  return (
    <div className="promotion-container">
      <div className="promotion-row">
        <div className="promotion-image">
          <Image
            src="/images/promotion.jpg"
            alt="Chocolate Ice Cream"
            width={500} 
            height={300} 
            className="promotion-img"
          />
        </div>
        <div className="promotion-content">
          <div className="price-badge">
            <h3>$3.99</h3>
          </div>
          <h3 className="promotion-title">Chocolate Ice Cream</h3>
          <p className="promotion-description">
            Creamy and rich chocolate ice cream made with premium cocoa and
            fresh ingredients. Indulge in a delightful dessert experience.
          </p>
          <a href="#" className="promotion-button">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
