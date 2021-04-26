import React from 'react'


function VideoPlayer (props) {
    let videoElement = React.useRef(null)
    let [videoWidth, setVideoWidth] = React.useState(0)
    React.useEffect(()=>{
        let widthValue = (videoElement.current.getBoundingClientRect().height / 9) * 16
        setVideoWidth(widthValue)
    }, [])
    return (
        <div className="video__wrapper">
            <iframe ref={videoElement} src={`https://www.youtube.com/embed/${props.idVideo}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`} title="video" width={`${videoWidth}px`}></iframe>
        </div>
    )
}

export default VideoPlayer;