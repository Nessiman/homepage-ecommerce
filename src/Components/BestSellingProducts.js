import React from "react";
import "../css/BestSellingProducts.css";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa"; // icon

import pakcoy from "./images/pakcoy.jpg";
import wortel from "./images/wortel.jpg";
import sawi from "./images/sawi.jpg";

// contoh data produk
const products = [
  {
    name: "Sayur Kangkung",
    price: 5000,
    discount: 0,
    img: sawi,
    rating: 4,
    reviews: 23,
  },
  {
    name: "Buah Apel",
    price: 10000,
    discount: 0,
    img: wortel,
    rating: 5,
    reviews: 45,
  },
  {
    name: "Minyak Goreng",
    price: 20000,
    discount: 0,
    img: pakcoy,
    rating: 3,
    reviews: 12,
  },
  {
    name: "Mie Instan",
    price: 3000,
    discount: 0,
    img: pakcoy,
    rating: 4,
    reviews: 34,
  },
];

function BestSellingProducts() {
  return (
    <div className="section-container">
      <div className="product-carousel">
        <div className="header-with-arrows">
          <div>
            <h4 className="section-label">This Month's</h4>
            <h2 className="section-title">Best Selling Products</h2>
          </div>
          <div className="arrow-buttons">
          <button className="view-all-products">View All</button>
          </div>
        </div>


        <div className="carousel-container">
          {products.map((p, i) => {
            const finalPrice =
              p.discount > 0 ? p.price - (p.price * p.discount) / 100 : p.price;
            return (
              <div key={i} className="product-card">
                <div className="product-image">
                  <img src={p.img} alt={p.name} />
                  <div className="icon-btn favorite-btn">
                    <FaHeart />
                  </div>
                  <div className="icon-btn view-btn">
                    <FaEye />
                  </div>
                </div>

                <h4>{p.name}</h4>
                <div className="price-section">
                  {p.discount > 0 && (
                    <span className="original-price">
                      Rp {p.price.toLocaleString()}
                    </span>
                  )}
                  <span className="final-price">
                    Rp {finalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="rating">
                  {"★".repeat(p.rating)}
                  {"☆".repeat(5 - p.rating)} ({p.reviews})
                </div>
                  <button className="add-to-cart-btn">
                    <FaShoppingCart /> Add to Cart
                  </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BestSellingProducts;
