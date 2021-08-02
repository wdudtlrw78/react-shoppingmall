import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { SERVER_URL } from '../../../Config';

function ProductImage({ detail }) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (detail.images && detail.images.length > 0) {
      let images = [];

      detail.images.map((item) => {
        images.push({
          original: `${SERVER_URL}/${item}`,
          thumbnail: `${SERVER_URL}/${item}`,
        });
      });
      setImages(images);
    }
  }, [detail]);

  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImage;
