import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { label, getPhotosByTopic, title } = props;
  return (
    <div className="topic-list__item">
      <span className="topic-list__item span" onClick={getPhotosByTopic}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
