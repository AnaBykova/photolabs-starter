import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          photoID={photoData.id}
          data={photoData}
          updateFavorites={props.updateFavorites}
          openModal={props.openModal}
          similar_photos={props.similar_photos}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
