import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from "hooks/useApplicationData";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    mainPagePhotos,
    topicData,
    photoData,
    favouritePhotos,
    setFavouritePhotos,
    isModalActive,
    setIsModalActive,
    clickedPhotoData,
    setClickedPhotoData,
  } = useApplicationData();



  return (
    <div className="App">

      <HomeRoute
        mainPagePhotos={mainPagePhotos}
        data={photoData}
        topics={topicData}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
      />

      <PhotoDetailsModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        imgClass={mainPagePhotos}
      />
    </div>
  );
};
export default App;