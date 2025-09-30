import React, { useRef } from "react";
import "../css/ExploreOurProducts.css"; // Import file CSS untuk styling
import pakcoy from "./images/pakcoy.jpg";
import wortel from "./images/wortel.jpg";
import sawi from "./images/sawi.jpg";

// Data produk yang akan ditampilkan
// Setiap produk punya nama, harga, gambar, rating, dan jumlah ulasan
const products = [
  { name: "Sayur Kangkung", price: 5000, img: sawi, rating: 4, reviews: 23 },
  { name: "Buah Apel", price: 10000, img: wortel, rating: 5, reviews: 12 },
  { name: "Minyak Goreng", price: 20000, img: pakcoy, rating: 3, reviews: 8 },
  { name: "Mie Instan", price: 3000, img: pakcoy, rating: 4, reviews: 40 },
  { name: "Daging Ayam", price: 25000, img: wortel, rating: 5, reviews: 30 },
  { name: "Sayur Sawi", price: 6000, img: sawi, rating: 4, reviews: 15 },
];

function ExploreProducts() {
  // useRef dipakai untuk mengakses elemen carousel (products-grid)
  const carouselRef = useRef(null);

  // Fungsi untuk format harga menjadi rupiah (contoh: Rp 10.000)
  const formatRupiah = (angka) =>
    "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Fungsi untuk menggeser carousel ke kiri atau kanan
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250; // jumlah pixel geser per klik tombol panah
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // agar pergerakan scroll halus
      });
    }
  };

  return (
    <div className="section-container">
      <div className="explore-products">

        {/* Bagian header section dengan judul dan tombol panah */}
        <div className="header-with-arrows">
          <div>
            <h4 className="section-label">Explore</h4>
            <h2 className="section-title">Our Products</h2>
          </div>
          <div className="arrow-buttons">
            {/* Tombol geser ke kiri */}
            <button onClick={() => scroll("left")} className="arrow-btn">
              ←
            </button>
            {/* Tombol geser ke kanan */}
            <button onClick={() => scroll("right")} className="arrow-btn">
              →
            </button>
          </div>
        </div>

        {/* Daftar produk dalam bentuk grid scrollable */}
        <div className="products-grid" ref={carouselRef}>
          {products.map((p, i) => (
            <div key={i} className="product-card">
              {/* Gambar produk + tombol favorit */}
              <div className="product-img-wrapper">
                <span className="favorite-btn">♥</span>
                <img src={p.img} alt={p.name} />
              </div>

              {/* Informasi produk */}
              <div className="product-info">
                <h4>{p.name}</h4>

                {/* Harga produk */}
                <div className="price-section">
                  <span className="price-final">{formatRupiah(p.price)}</span>
                </div>

                {/* Rating produk (bintang) + jumlah ulasan */}
                <div className="rating">
                  {"★".repeat(p.rating) + "☆".repeat(5 - p.rating)} ({p.reviews})
                </div>

                {/* Tombol untuk menambahkan produk ke keranjang */}
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
