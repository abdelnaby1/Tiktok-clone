import React,{useRef, useState} from 'react'
import './Video.css';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSidebare from './VideoSidebar/VideoSidebare';

function Video({
    url,
    channel,
    description,
    likes,
    messages,shares
}) {
    const [play, setPlay] = useState(false)
    const viedoRef = useRef(null);
    const onVideoPress = () => {
        if(play) {
            viedoRef.current.pause();
            setPlay(false)
        }
        viedoRef.current.play();
        setPlay(true)
    }
    return (
        <div className="video">
            
            <video 
        
                className="video__player"
                loop
                controls
                onDoubleClick={onVideoPress}
                ref={viedoRef}
                src={url}>

                </video>
                <VideoFooter 
                    channel="abdelnaby" 
                    description="Check out this video"
                    song="Fy donia - Yama gra"    
                />
                <VideoSidebare likes={300} shares={10}  messages={160}/>
            
        </div>
    )
}

export default Video
