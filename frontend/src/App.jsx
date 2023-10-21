import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from "hooks/useApplicationData";



// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    mainPagePhotos,
    onLoadTopic,
    onLoadPhoto,
    favouritePhotos,
    setFavouritePhotos,
    isModalActive,
    setIsModalActive,
    clickedPhotoData,
    setClickedPhotoData,
  } = useApplicationData();

  // console.log(onLoadTopic);

  return (
    <div className="App">

      <HomeRoute
        mainPagePhotos={mainPagePhotos}
        data={onLoadPhoto}
        topics={onLoadTopic}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
      />

    </div>
  );
};
export default App;