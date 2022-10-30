import React, { useState, useEffect } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import classnames from 'classnames';

const LazyLoadImageWithBlurhash = ({ hash, url }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log('I have loaded', url);
    setImageHasLoaded(true);
  };

  return (
    <div className="images-list__container">
      <BlurhashCanvas
        hash={hash}
        style={{
          width: '100%',
          height: '100%',
        }}
        punch={1}
      />
      <img
        onLoad={handleImageLoad}
        className={classnames('images-list__image', {
          'images-list__image--hidden': !imageHasLoaded,
        })}
        src={url}
        loading="lazy"
      />
    </div>
  );
};

export default LazyLoadImageWithBlurhash;
