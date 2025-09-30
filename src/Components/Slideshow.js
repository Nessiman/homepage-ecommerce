import React, { useEffect, useState } from "react";
import "../css/Slideshow.css"; // Import CSS styling slideshow
import UpTo from "./images/UpTo.png"; // Import gambar slide 1
import diskon from "./images/diskon.jpg"; // Import gambar slide 2
import happyhours from "./images/happyhours.jpg"; // Import gambar slide 3

// Array berisi daftar gambar untuk slideshow
const Slides = [UpTo, diskon, happyhours];

// Array kategori produk untuk sidebar
const Categories = [
  "Beras dan Biji-bijian",
  "Minyak dan Bumbu Dapur",
  "Protein Hewani",
  "Sayur Sayuran",
  "Buah - buahan",
  "Minuman dan Susu",
];

function Slideshow() {
  // State untuk melacak indeks slide yang sedang aktif
  const [current, setCurrent] = useState(0);

  // Fungsi untuk pindah ke slide berikutnya secara manual
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % Slides.length);
  };

  // useEffect digunakan untuk membuat slideshow otomatis
  useEffect(() => {
    // Set interval agar setiap 3 detik pindah ke slide berikutnya
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Slides.length);
    }, 3000);

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {/* Sidebar kategori di sisi kiri */}
      <div className="sidebar">
        <ul>
          {Categories.map((cat, idx) => (
            <li key={idx}>{cat}</li> 
          ))}
        </ul>
      </div>

      {/* Bagian utama slideshow */}
      <div className="slideshow">
        {Slides.map((slide, index) => (
          <img
            key={index}
            src={slide} // Gambar slide
            alt={`slide-${index}`} // Alt text untuk SEO & aksesibilitas
            className={`slide-image ${index === current ? "active" : ""}`} 
            // Tambahkan class "active" hanya untuk slide yang sedang ditampilkan
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
