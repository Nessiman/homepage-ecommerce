import React from "react";
import "../css/NewArival.css";
import olive from "./images/oliveoil.jpg"

const arrivals = [
  {
    title: "Minyak Zaitun",
    desc: "Menjaga kesehatan dengan mengkonsumsi minyak rendah lemak",
    img: olive ,
    size: "large",
  },
  {
    title: "Protein Hewani",
    desc: "Sapi berkualitas dari Jepang yang diberi makan buah zaitun",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    size: "medium",
  },
  {
    title: "Gula",
    desc: "Gula murni dari alam",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    size: "small",
  },
  {
    title: "Sayur",
    desc: "Nikmati kesegaran sayur",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    size: "small",
  },
];

function NewArrival() {
  return (
    <div className="section-container">
      <div className="new-arrival">
        <h4 className="section-label">Featured</h4>
        <h2 className="section-title">New Arrival</h2>
        <div className="arrival-grid">
          {arrivals.map((item, i) => (
            <div key={i} className={`arrival-card ${item.size}`}>
              <img src={item.img} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button>Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
