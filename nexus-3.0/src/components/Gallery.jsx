import React from 'react';
import galleryData from '../assets/gallery.json'; 
import '../Stylesheets/Gallery.css'; 

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery">
        {galleryData.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt={image.description} className="gallery-image" />
            <div className="gallery-info">
              <p className="description">{image.description}</p>
              <p className="date">{image.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
