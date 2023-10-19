import React, {useState} from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
//import FavIcon from "./FavIcon";

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <div className="top-nav-bar__topics">
        <TopicList />
        <FavBadge hasFavorites={props.hasFavorites}/>
      </div>
    
    </div>
  );
};

export default TopNavigation;