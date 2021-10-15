import './Partners.scss'

function Partners () {
    return (
        <div className="partners">
            <div className="container">
                <div className="partners__list">
                    <img src={`${process.env.PUBLIC_URL}/images/partner1.png`} alt="" className="partners__item" />
                    <img src={`${process.env.PUBLIC_URL}/images/partner2.png`} alt="" className="partners__item" />
                    <img src={`${process.env.PUBLIC_URL}/images/partner3.png`} alt="" className="partners__item" />
                    <img src={`${process.env.PUBLIC_URL}/images/partner4.png`} alt="" className="partners__item" />
                    <img src={`${process.env.PUBLIC_URL}/images/partner5.png`} alt="" className="partners__item" />
                </div>
            </div>
        </div>
    )
}

export default Partners;