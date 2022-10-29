import React, { useState, useEffect } from 'react';
import { BlurhashCanvas } from 'react-blurhash';

const LazyLoadImageWithBlurhash = ({ url }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log('I have loaded');
    setImageHasLoaded(true);
  };

  return (
    <div className="images-list__container">
      {!imageHasLoaded && (
        <BlurhashCanvas
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width={100}
          height={100}
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
