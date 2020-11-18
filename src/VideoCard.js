import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img src={image} alt="thumbnail" />

      <div className="videoCard_info">
        <div className="videoCard_avatar">
          <Avatar src={channelImage} alt={channel} />
        </div>
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} ◾ {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
