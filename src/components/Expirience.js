import "./Expirience.scss"

function Expirience () {
    return (
        <section className="expirience">
            <div className="container">
                <div className="expirience__wrap">
                    <div className="expirience__image-wrap">
                        <img src={`${process.env.PUBLIC_URL}/images/expirience.jpg`} alt="" className="expirience__image" />
                    </div>
                    <div className="expirience__info">
                        <div className="expirience__years">
                            <p className="expirience__years-count">
                                12
                            </p>
                            <p className="expirience__years-text">
                                Years<br/>
                                Experience<br/>
                                Working
                            </p>
                        </div>
                        <h2 className="expirience__title">
                        Mission of our creative house
                        </h2>
                        <p className="expirience__desc">
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        </p>
                        <div className="expirience-result">
                            <div className="expirience-result__item">
                                <img src={`${process.env.PUBLIC_URL}/images/result1.png`} alt="" className="expirience-result__img"/>
                                <div className="expirience-result__info">
                                    <div className="expirience-result__count">
                                        520+
                                    </div>
                                    <div className="expirience-result__name">
                                        Projects
                                    </div>

                                </div>
                            </div>
                            <div className="expirience-result__item">
                                <img src={`${process.env.PUBLIC_URL}/images/result2.png`} alt="" className="expirience-result__img"/>
                                <div className="expirience-result__info">
                                    <div className="expirience-result__count">
                                        $4M
                                    </div>
                                    <div className="expirience-result__name">
                                        Revenue
                                    </div>

                                </div>
                            </div>
                            <div className="expirience-result__item">
                                <img src={`${process.env.PUBLIC_URL}/images/result3.png`} alt="" className="expirience-result__img"/>
                                <div className="expirience-result__info">
                                    <div className="expirience-result__count">
                                        250
                                    </div>
                                    <div className="expirience-result__name">
                                        Awards
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Expirience;