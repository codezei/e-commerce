
import './Video.scss'
import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoPoster from './VideoPoster'

function Video () {

    let [videoData, setVideoData] = React.useState({
        show: false,
        videoId: 'GBxYvCkhCys',
        videoPoster: "/poster.jpg"
    })
    function videoHandler () {
        setVideoData({...videoData, show: true})
    }
    return (
        <div className="video">
            <div className="video__inner">
            <img src={`./images/${videoData.videoPoster}`} alt="" className="video__poster"/>
                {videoData.show ? <VideoPlayer idVideo={videoData.videoId}></VideoPlayer> : <VideoPoster poster={videoData.videoPoster} videoHandler={videoHandler}></VideoPoster> }

            </div>
        </div>
    )
}

export default Video;