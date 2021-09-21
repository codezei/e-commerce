import './Lamps.scss'

function Lamps () {
    return (
        <section className="lamps">
            <div className="container-fluid">
                <div className="lamps__list">
                    <div className="lamps__item">
                        <img src="./images/lamp1.png" alt="" className="lamps__img"/>
                        <div className="lamps__info">
                            <h4 className="lamps__title">
                            Mirum Notare Tellus
                            </h4>
                            <p className="lamps__text">
                            LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 E27LEDCornLight
                            </p>
                            <button className="lamps__btn">
                            View More
                            </button>
                        </div>
                    </div>
                    <div className="lamps__item">
                        <img src="./images/lamp2.png" alt="" className="lamps__img"/>
                        <div className="lamps__info">
                            <h4 className="lamps__title">
                            Malesuada Tempor Euismod
                            </h4>
                            <p className="lamps__text">
                            50W 8000lm Compact Size for HID <span>StreetLight</span><span>Replacemen</span><span>tLEDCornLight</span>
                            </p>
                            <button className="lamps__btn">
                            View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lamps;