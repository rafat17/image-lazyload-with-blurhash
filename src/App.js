import React from 'react';
import './style.css';
import LazyLoadImageWithBlurhash from './components/LazyLoadImageWithBlurhash';
import ImagesList from './imagesList';

const App = () => {
  return (
    <div className="images-list">
      {ImagesList.map((image) => (
        <LazyLoadImageWithBlurhash
          key={image.id}
          hash={image.imageHash}
          url={image.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
