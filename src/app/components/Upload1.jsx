import React, { useState } from 'react';
import ImageContainer from './ImageContainer';

function Upload1() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    if (event?.target?.files?.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImages((prevImages) => [...prevImages, e.target.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="upload-container absolute z-2 flex">
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          id="imageInput"
        />
        <label htmlFor="imageInput">
          {/* Your Add Image component here */}
        </label>
        <ImageContainer images={images} />
      </div>
    </>
  );
}

export default Upload1;
