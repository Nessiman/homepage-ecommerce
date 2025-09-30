
import React, { useRef } from "react";
import "../css/TodayHotSales.css";
import pakcoy from "./images/pakcoy.jpg";
import wortel from "./images/wortel.jpg";
import sawi from "./images/sawi.jpg";

const products = [
  { name: "Sayur Kangkung", price: 5000, discount: 10, img: sawi, rating: 4, reviews: 23 },
  { name: "Buah Apel", price: 10000, discount: 20, img: wortel, rating: 5, reviews: 12 },
  { name: "Minyak Goreng", price: 20000, discount: 15, img: pakcoy, rating: 3, reviews: 8 },
  { name: "Mie Instan", price: 3000, discount: 0, img: pakcoy, rating: 4, reviews: 40 },
  { name: "Daging Ayam", price: 25000, discount: 5, img: wortel, rating: 5, reviews: 30 },
  { name: "Sayur Kangkung", price: 5000, discount: 10, img: sawi, rating: 4, reviews: 23 },
  { name: "Buah Apel", price: 10000, discount: 20, img: wortel, rating: 5, reviews: 12 },
  { name: "Minyak Goreng", price: 20000, discount: 15, img: pakcoy, rating: 3, reviews: 8 },
  { name: "Mie Instan", price: 3000, discount: 0, img: pakcoy, rating: 4, reviews: 40 },
  { name: "Daging Ayam", price: 25000, discount: 5, img: wortel, rating: 5, reviews: 30 },
];

function ProductsCarousel() {
  const carouselRef = useRef(null);

  const formatRupiah = (angka) =>
    "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="section-container">
      <div className="product-carousel">
        {/* Header dengan panah navigasi */}
        <div className="header-with-arrows">
          <div>
            <h4 className="section-label">Today's</h4>
            <h2 className="section-title">Hot Sales</h2>
          </div>
          <div className="arrow-buttons">
            <button onClick={() => scroll("left")} className="arrow-btn">←</button>
            <button onClick={() => scroll("right")} className="arrow-btn">→</button>
          </div>
        </div>

        {/* Container produk */}
        <div className="carousel-container" ref={carouselRef}>
          {products.map((p, i) => {
            const finalPrice = p.price - (p.price * p.discount) / 100;
            return (
              <div key={i} className="product-card">
                <div className="product-img-wrapper">
                  {p.discount > 0 && <span className="discount-flag">-{p.discount}%</span>}
                  <span className="favorite-btn">♥</span>
                  <img src={p.img} alt={p.name} />
                </div>

                <div className="product-info">
                  <h4>{p.name}</h4>
                  <div className="price-section">
                    {p.discount > 0 && <span className="price-original">{formatRupiah(p.price)}</span>}
                    <span className="price-final">{formatRupiah(finalPrice)}</span>
                  </div>
                  <div className="rating">
                    {"★".repeat(p.rating) + "☆".repeat(5 - p.rating)} ({p.reviews})
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="view-all-products">View All Products</button>
      </div>
    </div>
  );
}

export default ProductsCarousel;
