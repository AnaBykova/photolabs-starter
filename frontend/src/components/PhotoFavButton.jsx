import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [isLiked, setIsLiked] = useState(false);
  const updateFavorites = props.updateFavorites;
  const photoID = props.photoID;

  // Function to toggle the like status
  const handleLike = useCallback(() => {
    console.log(props);
    console.log(`Before toggle: isLiked=${isLiked}`);
    setIsLiked(!isLiked);
    console.log(`After toggle: isLiked=${!isLiked}`);
    updateFavorites(props.photo);
  });

  return (
    <div className="photo-list__fav-icon" onClick={handleLike}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;