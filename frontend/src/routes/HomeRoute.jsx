import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from 'mocks/photos';

const HomeRoute = (props) => {

  const favList = [];
  const [isFav, setIsFav] = useState(favList);

  const updateFavorites = (photo) => {
    if (isFav.includes(photo)) {
      setIsFav(isFav.filter((id) => id !== photo));
    } else {
      setIsFav([...isFav, photo]);
    }
  };

  const hasFavorites = () => {
    if (isFav.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="home-route">
      <TopNavigationBar hasFavorites = {hasFavorites}/>
      <PhotoList  updateFavorites={updateFavorites} openModal = {props.openModal} isFav={isFav}/>
    </div>
  );
};

export default HomeRoute;
