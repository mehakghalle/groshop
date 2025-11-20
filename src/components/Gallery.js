import React from "react";
import "../App.css";

const galleryImages = [
  {
    src: require("./Image/gallery.jpg"),
    alt: "Fresh Apples"
  },
  {
    src: require("./Image/gallery1.jpg"),
    alt: "Organic Broccoli"
  },
  {
    src: require("./Image/gallery2.jpg"),
    alt: "Dairy Milk"
  },
  {
    src: require("./Image/gallery3.jpg"),
    alt: "Sweet Pears"
  },
  {
    src: require("./Image/gallery4.jpg"),
    alt: "Fresh Bread"
  },
  {
    src: require("./Image/gallery5.jpg"),
    alt: "Juicy Mangoes"
  },
  {
    src: require("./Image/gallery6.jpg"),
    alt: "Delicious Cherries"
  }
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>Our Fresh Gallery</h2>
      <p className="gallery-subtext">
        Explore the freshness and quality of our products.
      </p>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery-overlay">
              <p>{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
