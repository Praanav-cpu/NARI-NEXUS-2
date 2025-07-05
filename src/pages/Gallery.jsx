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
  // Responsive: show all images in a single column on small screens .
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger the animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);
 
  return (
    <div className="gallery-section bg-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
      <h2
        id="gallery"
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        } text-center tracking-wide drop-shadow-lg`}
        style={{
          fontFamily: '"Playfair Display", serif',
          letterSpacing: '0.1em'
        }}
      >
        Gallery
      </h2>
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
