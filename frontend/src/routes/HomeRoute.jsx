import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from 'mocks/photos';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar hasFavorites = {props.hasFavorites}/>
      <PhotoList  updateFavorites={props.updateFavorites} openModal = {props.openModal} isFav={props.isFav}/>
    </div>
  );
};

export default HomeRoute;
