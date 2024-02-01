import React from 'react';
import ImageItem from './ImageItem';

function ImageContainer({ images }) {
  return (
    <>
      {images.map((image, index) => (
        <ImageItem key={index} image={image} />
      ))}
    </>
  );
}

export default ImageContainer;
