import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photosInfo from "./../../src/mocks/photos";


const PhotoList = (props) => {
  const photosInfo = props.data;

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photosInfo.map(data => <PhotoListItem key={data.id}
        data={data}
        imgClass={props.imgClass}
        favouritePhotos={props.favouritePhotos}
        setFavouritePhotos={props.setFavouritePhotos}
        clickedPhotoData={props.clickedPhotoData}
        setClickedPhotoData={props.setClickedPhotoData}
        isModalActive={props.isModalActive}
        setIsModalActive={props.setIsModalActive}
      />)}
    </ul>
  );
};
export default PhotoList;