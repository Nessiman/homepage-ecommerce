import React from "react";
import "../css/BrowseByCategory.css"; // Import file CSS untuk styling

// Data kategori produk yang akan ditampilkan
const categories = [
  { name: "Sayur-sayuran", emoji: "🥦" },
  { name: "Minuman dan Susu", emoji: "🍶" },
  { name: "Minyak dan Bumbu", emoji: "🧂" },
  { name: "Buah-buahan", emoji: "🍉" },
  { name: "Protein Hewani", emoji: "🍗" },
  { name: "Beras dan Biji-bijian", emoji: "🍚" },
];

// Komponen utama untuk menampilkan grid kategori
function CategoriesGrid() {
  return (
    <div className="section-container">
      <div className="categories-grid">
        
        {/* Judul section */}
        <h4 className="section-label">Categories</h4>
        <h2 className="label">Browse By Category</h2>

        {/* Grid berisi daftar kategori */}
        <div className="grid-container">
          {categories.map((c, i) => (
            // Setiap item kategori ditampilkan dalam box/grid
            <div key={i} className="grid-item">
              <div className="emoji">{c.emoji}</div> {/* Emoji kategori */}
              <p>{c.name}</p> {/* Nama kategori */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesGrid;
