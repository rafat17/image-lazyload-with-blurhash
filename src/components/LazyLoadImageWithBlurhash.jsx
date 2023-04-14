import React, { useState, useEffect } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import classnames from 'classnames';

const LazyLoadImageWithBlurhash = ({ hash, url }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  return (
    <div className="images-list__container">
      {!imageHasLoaded && (
        <BlurhashCanvas
          hash={hash}
          style={{
            width: '100%',
            height: '100%',
          }}
          punch={1}
        />
      )}
      <img
        onLoad={() => {
          setImageHasLoaded(true);
        }}
        className={classnames('images-list__image', {
          'images-list__image--hidden': !imageHasLoaded,
        })}
        src={url}
      />
    </div>
  );
};

export default LazyLoadImageWithBlurhash;
