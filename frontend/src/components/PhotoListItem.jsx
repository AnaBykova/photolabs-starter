import React, { useState } from "react";


const PhotoListItem = ({props}) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <div className="photo-list-item" key={id}>
      <img
        src={props.urls.regular}
        alt={`Photo by ${username}`}
      />
      <div className="photo-details">
        <h3>{`Photo ${id}`}</h3>
        <p>
          <strong>Location:</strong> {props.location.city}, {props.location.country}
        </p>
        <p>
          <strong>Username:</strong> {props.user.name}
        </p>
        <img src={props.profile} className="profile-image" />
      </div>
    </div>
  );
};

export default PhotoListItem;
