import "./Services.scss"

function Services () {
    return (
        <section className="services">
            <div className="container-fluid">
                <div className="services__list">
                    <div className="services__item">
                        <img src="./images/service1.png" alt="" className="services__img"/>
                        <div>
                            <h4 className="services__title">
                            Support 24/7.
                            </h4>
                            <p className="services__text">
                            Contact us 24 hours a day,
                            7 days a week.
                            </p>
                        </div>
                    </div>
                    <div className="services__item">
                        <img src="./images/service2.png" alt="" className="services__img"/>
                        <div>
                            <h4 className="services__title">
                            Delivery.
                            </h4>
                            <p className="services__text">
                            Free shipping on all US order.
                            </p>
                        </div>
                    </div>
                    <div className="services__item">
                        <img src="./images/service3.png" alt="" className="services__img"/>
                        <div>
                            <h4 className="services__title">
                            100% Payment secure.
                            </h4>
                            <p className="services__text">
                            We ensure secure payment with PEV.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;