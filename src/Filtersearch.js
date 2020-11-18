import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './filtersearch.css'

function Filtersearch({image , title , channel , views , timestamp , channelImage }) {
  return <div className = "filter_search">  
           <div className = "thumbnail">
          <img src = {image}></img>
           </div>
           <div className="video_info">
<h1>{title}</h1>
<div className="views_time">
<h3>{views} views ▪ {timestamp}</h3>
</div>
<div className = "channel">
<Avatar src={channelImage} id="avatar1"/>
<h3>{channel}</h3>
</div>
           </div>
  </div>;
}

export default Filtersearch;
