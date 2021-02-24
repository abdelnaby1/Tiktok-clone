import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({channel,description,song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth" >
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
              
            </div>
            <img 
                className="videoFooter__record"
                alt=""
                src="https://www.flaticon.com/premium-icon/icons/svg/2057/2057293.svg"
            />
                
        </div>
    )
}

export default VideoFooter
