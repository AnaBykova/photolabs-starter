import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { urls, user, location } = props.data;

  const handleImageClick = () => {
    // Pass the selected photo details to the parent component and open the modal
    props.openModal({
      urls,
      user,
      location
    });
  };
    
  return (
    <li className="photo-list__item">
      <PhotoFavButton PhotoID={props.PhotoID} updateFavorites={props.updateFavorites} />
      <img className="photo-list__image" onClick={handleImageClick} src={urls.regular} alt={`Photo by ${user.username}`} />
      
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`${user.username}'s profile`}
        />
        <div className="photo-list__user-info-container">
          <h3 className="photo-list__user-info">{user.username}</h3>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    
    </li>
  );
};

export default PhotoListItem;
