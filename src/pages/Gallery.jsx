import React from 'react';
import './Gallery.css';

const images = [
  // Example: alternate horizontal and vertical for the first column
  { src: '/img/event1.jpg', type: 'horizontal' },
  { src: '/img/event3.jpg', type: 'vertical' },
  { src: '/img/event2.jpg', type: 'horizontal' },
  // Fill remaining columns as needed
  { src: '/img/event7.jpg', type: 'horizontal' },
  { src: '/img/event4.jpg', type: 'vertical' },
  { src: '/img/event5.jpg', type: 'vertical' },
  { src: '/img/event8.jpg', type: 'horizontal' },
  { src: '/img/event9.jpg', type: 'horizontal' },
  { src: '/img/event6.jpg', type: 'horizontal' },
];

function Gallery() {
  // Responsive: show all images in a single column on small screens
  return (
    <div className="gallery-section bg-gray-900">
      <h2 id="gallery" className="text-4xl font-extrabold text-center mb-10 text-pink-400 tracking-wide uppercase drop-shadow-lg">Gallery</h2>
      <div className="gallery-custom-grid">
        {/* Desktop/Tablet: 3 columns */}
        <div className="gallery-col">
          <img src={images[0].src} alt="" className="gallery-img horizontal" />
          <img src={images[1].src} alt="" className="gallery-img vertical" />
          <img src={images[2].src} alt="" className="gallery-img horizontal" />
        </div>
        <div className="gallery-col">
          <img src={images[3].src} alt="" className="gallery-img vertical" />
          <img src={images[4].src} alt="" className="gallery-img horizontal" />
          <img src={images[5].src} alt="" className="gallery-img horizontal" />
        </div>
        <div className="gallery-col">
          <img src={images[6].src} alt="" className="gallery-img horizontal" />
          <img src={images[7].src} alt="" className="gallery-img horizontal" />
          <img src={images[8].src} alt="" className="gallery-img vertical" />
        </div>
        {/* Mobile: show all images in a single column */}
        <div className="gallery-col gallery-mobile-only">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt=""
              className={`gallery-img ${img.type}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
