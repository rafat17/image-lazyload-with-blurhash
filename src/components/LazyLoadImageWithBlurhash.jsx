import React, { useState, useEffect } from 'react';
import { BlurhashCanvas } from 'react-blurhash';

const LazyLoadImageWithBlurhash = ({ hash, url }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageHasLoaded(true);
  };

  return (
    <div className="images-list__container">
      {!imageHasLoaded && (
        <BlurhashCanvas
          hash={hash}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          punch={1}
        />
      )}
      <img onLoad={handleImageLoad} className="images-list__image" src={url} />
    </div>
  );
};

export default LazyLoadImageWithBlurhash;
