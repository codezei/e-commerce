
import "./Team.scss"

function Team () {
    let iconInstagram = <svg xmlns="http://www.w3.org/2000/svg" width="17.19" height="17.19" viewBox="0 0 17.19 17.19">
    <path fill="#888" d="M1004.59,1961.94a4.322,4.322,0,0,1-3.43-3.75c-0.23-1.45-.25-8.19.17-9.65a4.387,4.387,0,0,1,3.75-3.35,34.173,34.173,0,0,1,4.31-.19c1.6,0,3.22.04,4.19,0.1a4.724,4.724,0,0,1,3.14,1.28,4.517,4.517,0,0,1,1.38,2.94c0.12,1.35.21,7.74-.19,9.24a4.411,4.411,0,0,1-3.8,3.44,42.333,42.333,0,0,1-4.74.19A29.143,29.143,0,0,1,1004.59,1961.94Zm0.92-15.26a2.958,2.958,0,0,0-2.75,2.59,57.587,57.587,0,0,0-.06,8.69,2.8,2.8,0,0,0,2.12,2.43,27.569,27.569,0,0,0,4.63.25c1.8,0,3.57-.06,4.24-0.13a2.941,2.941,0,0,0,2.75-2.6,61.315,61.315,0,0,0,.11-8.45,2.9,2.9,0,0,0-2.58-2.74,40.212,40.212,0,0,0-4.3-.16C1007.96,1946.56,1006.26,1946.6,1005.51,1946.68Zm-0.32,6.92a4.445,4.445,0,0,1,4.45-4.41,4.37,4.37,0,0,1,4.37,4.41,4.458,4.458,0,0,1-4.45,4.41A4.37,4.37,0,0,1,1005.19,1953.6Zm1.55-.03a2.834,2.834,0,0,0,2.81,2.88h0.02a2.882,2.882,0,0,0,2.88-2.82,2.82,2.82,0,0,0-2.8-2.88h-0.03A2.881,2.881,0,0,0,1006.74,1953.57Zm6.45-4.55a1.029,1.029,0,0,1,1.03-1.03h0.01a1.016,1.016,0,0,1,1.02,1.04,1.035,1.035,0,0,1-1.04,1.02A1.014,1.014,0,0,1,1013.19,1949.02Z" transform="translate(-1001 -1945)" />
  </svg>
  let iconGoogle = <svg xmlns="http://www.w3.org/2000/svg" width="22.66" height="14.38" viewBox="0 0 22.66 14.38">
  <path fill="#888" d="M1052.75,1960.35a7.121,7.121,0,0,1-6.59-5.65,6.6,6.6,0,0,1-.14-1.93,7.277,7.277,0,0,1,5.49-6.56,5.282,5.282,0,0,1,1.18-.19c0.23-.01.46-0.02,0.69-0.02a6.786,6.786,0,0,1,3.4.93,9.386,9.386,0,0,1,1.27.93c-0.72.71-1.41,1.4-2.11,2.09a3.914,3.914,0,0,0-2.1-1.02,4.259,4.259,0,0,0-.61-0.04,4.307,4.307,0,0,0-4.14,3.35,3.817,3.817,0,0,0-.1,1.3,4.3,4.3,0,0,0,2.94,3.74,4.35,4.35,0,0,0,1.25.19c0.1,0,.2-0.01.3-0.01a4.2,4.2,0,0,0,2.09-.67,3.314,3.314,0,0,0,1.43-2.17h-3.85c0-.09.02-1.89,0.02-2.76l0.01-.12h6.76a7.773,7.773,0,0,1-1.28,6.05,6.273,6.273,0,0,1-3.55,2.32,7.539,7.539,0,0,1-1.94.25C1053.03,1960.36,1052.89,1960.36,1052.75,1960.35Zm13.33-4.05h-1.89v-0.07l0.02-2.43h-2.51v-0.08l0.02-1.82v-0.07h2.5l0.02-2.43v-0.07h1.96v0.07l-0.02,2.43h2.51v0.07l-0.01,1.82v0.08h-2.51l-0.02,2.43v0.07h-0.07Z" transform="translate(-1046.03 -1946)" />
</svg>

  
    let team = [
        {
            image: "worker1.jpg",
            name: "Eliza Elliot",
            post: "Commodo tempor",
            instagramURL: "#",
            googleURL: "#"
        },
        {
            image: "worker2.jpg",
            name: "Roscoe A. ",
            post: "Commodo tempor",
            instagramURL: "#",
            googleURL: "#"
        },
        {
            image: "worker3.jpg",
            name: "Ruby M. ",
            post: "Commodo tempor",
            instagramURL: "#",
            googleURL: "#"
        },
        {
            image: "worker4.jpg",
            name: "Marie F. Bloss",
            post: "Commodo tempor",
            instagramURL: "#",
            googleURL: "#"
        }
    ]
    return (
        <div className="team">
            <div className="container">
                <div className="team__wrap">
                    <div className="team__info">
                        <h2 className="title team__title">
                            Our Team
                        </h2>
                        <p className="team__text">
                            Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusmod tempor inciLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <button type="button" className="btn team__btn">
                        Join With US
                        </button>
                    </div>
                    <div className="team__list">
                        {
                            team.map((item, index)=> {
                                return (
                                    <div className="team__item worker" key={`worker-${index}`}>
                                    <div className="worker__img-wrap">
                                        <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt="" className="worker__img" />
                                    </div>
                                    <div className="worker__info">
                                        <div>
                                            <h3 className="worker__name">
                                                {item.name}
                                            </h3>
                                            <p className="worker__post">
                                                {item.post}
                                            </p>
                                        </div>
                                        <ul className="worker-social">
                                            <li className="worker-social__item">
                                                <a href={item.instagramURL} className="worker-social__link">
                                                    {iconInstagram}
                                                </a>
                                            </li>
                                            <li className="worker-social__item">
                                                <a href={item.googleURL} className="worker-social__link">
                                                    {iconGoogle}
                                                </a>
                                            </li>
                                        </ul>
                                        </div>
                                </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;