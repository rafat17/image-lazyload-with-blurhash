import React, { useState, useEffect } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import classnames from 'classnames';

const blurHashCanvasStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
};

const LazyLoadImageWithBlurhash = ({ hash, url }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const [removeBluhashCanvas, setRemoveBlurhashCanvas] = useState(false);

  useEffect(() => {
    let removeCanvasTimeout;

    if (imageHasLoaded) {
      removeCanvasTimeout = setTimeout(() => {
        setRemoveBlurhashCanvas(true);
      }, 2000);
    }

    () => {
      clearTimeout(removeCanvasTimeout);
    };
  }, [imageHasLoaded]);

  return (
    <div className="images-list__container">
      {!removeBluhashCanvas && (
        <BlurhashCanvas hash={hash} style={blurHashCanvasStyles} punch={1} />
      )}
      <img
        onLoad={() => {
          setImageHasLoaded(true);
        }}
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
