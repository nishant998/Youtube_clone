import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Sidebar.css'
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div id = "side_bar">
            <hr/>
            <Link to="/" style={{ textDecoration: 'none' , color:'black'}}>
            <h2><HomeIcon class= "icon_s" />Home</h2>
            </Link>
            <h2><WhatshotIcon class= "icon_s"/>Trending</h2>
            <h2><SubscriptionsIcon class= "icon_s"/>Subscriptions</h2>
            <hr/>
             <h2><VideoLibraryIcon class= "icon_s" id="lib_"/>Library</h2>
             <h2><HistoryIcon class= "icon_s"/>History</h2>
             <h2><OndemandVideoSharpIcon class= "icon_s"/>Your Videos</h2>
             <h2><WatchLaterTwoToneIcon class= "icon_s"/>Watch later</h2>
             <h2><ThumbUpAltRoundedIcon class= "icon_s"/>Liked</h2>
             <h2><ExpandMoreIcon class= "icon_s"/>Show more</h2>
            <hr/>
        </div>
    )
}

export default Sidebar ;
