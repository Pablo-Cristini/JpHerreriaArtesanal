import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="thumbnail"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <button className="close-button" onClick={closeModal}>&times;</button>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;