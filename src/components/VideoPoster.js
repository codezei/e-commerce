import React from 'react'


function VideoPoster (props) {
    return (
        <React.Fragment>
            <div className="video__play" onClick={props.videoHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={25} viewBox="0 0 22 25">
                    <path fill="#fff" fillRule="evenodd" d="M970.684,3900.74l-16.044,9.8a3.228,3.228,0,0,1-3.062.14,2.685,2.685,0,0,1-1.579-2.39V3888.7a2.685,2.685,0,0,1,1.579-2.39,3.258,3.258,0,0,1,3.062.15l16.044,9.79A2.666,2.666,0,0,1,972,3898.5,2.638,2.638,0,0,1,970.684,3900.74Z" transform="translate(-950 -3886)" />
                </svg>
            </div>
        </React.Fragment>

        
    )
}
export default VideoPoster;