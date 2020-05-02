import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map((i) => (
        <ImageCard key={i.id} image={i} />
      ))}
    </div>
  );
};

export default ImageList;
