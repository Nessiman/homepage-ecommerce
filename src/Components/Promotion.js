import React, { useState, useEffect, useRef } from "react";
import "../css/Promotion.css"; 
import milk from "./images/milk.png"; 

// Komponen utama PromoSection
function PromoSection() {
  // Membuat tanggal target (hanya sekali dibuat, 5 hari dari sekarang)
  const targetDate = useRef(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  // State untuk menyimpan sisa waktu (hari, jam, menit, detik)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // useEffect untuk menjalankan timer hitung mundur
  useEffect(() => {
    // Interval setiap 1 detik (1000ms)
    const timer = setInterval(() => {
      const now = new Date().getTime(); // waktu saat ini
      const distance = targetDate.current - now; // selisih waktu

      if (distance > 0) {
        // Jika waktu masih ada → update state timeLeft
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)), // sisa hari
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24), // sisa jam
          minutes: Math.floor((distance / 1000 / 60) % 60), // sisa menit
          seconds: Math.floor((distance / 1000) % 60), // sisa detik
        });
      } else {
        // Jika waktu habis → hentikan interval dan set ke 0 semua
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Membersihkan interval ketika komponen dilepas (unmount)
    return () => clearInterval(timer);
  }, []); // Dependency array kosong → dijalankan sekali saat mount

  return (
    <div className="promo-section">
      {/* Bagian kiri: teks promo dan countdown */}
      <div className="promo-content">
        <p className="category">Categories</p>
        <h1>
          Enhance Your <br /> Dairy Experience
        </h1>

        {/* Countdown Timer */}
        <div className="countdown">
          <div className="time-box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time-box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>

        {/* Tombol beli */}
        <button className="buy-btn">Buy Now!</button>
      </div>

      {/* Bagian kanan: gambar produk */}
      <div className="promo-image">
        <img src={milk} alt="milk" />
      </div>
    </div>
  );
}

export default PromoSection;
