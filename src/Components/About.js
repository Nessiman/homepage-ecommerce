import React from "react";
import "../css/About.css";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

function InfoService() {
  return (
    <div className="section-container">
      <div className="info-service">
        <div className="service-item">
          <FaShippingFast size={40} />
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over 1.000.000 IDR</p>
        </div>
        <div className="service-item">
          <FaHeadset size={40} />
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="service-item">
          <FaUndo size={40} />
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default InfoService;
