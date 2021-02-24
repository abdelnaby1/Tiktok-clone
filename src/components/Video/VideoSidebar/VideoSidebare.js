import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';

import './VideoSidebare.css';

function VideoSidebare({likes,shares,messages}) {
    const [liked, setLiked] = useState(false);
    const likedHandle = () => {
        setLiked(!liked)
    }
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button"  >
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={() => likedHandle()} />
                ):(
                    <FavoriteBorderIcon fontSize="large" onClick={() => likedHandle()}/>
                )}
                
                <p>{liked? likes+1 : likes}</p>

            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>

            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>

            </div>
        </div>
    )
}

export default VideoSidebare
