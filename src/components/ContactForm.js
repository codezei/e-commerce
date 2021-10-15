import "./ContactForm.scss"

function ContactForm () {
    return (
        <div className="contact-form">
            <div className="container">
                <div className="contact-form__wrap">
                    <form className="contact-form__form form">
                        <div className="form__input-wrap form__name-wrap">
                            <input type="text" className="form__input" placeholder="NAME"/>
                        </div>
                        <div className="form__input-wrap form__email-wrap">
                            <input type="text" className="form__input" placeholder="EMAIL"/>
                        </div>
                        <div className="form__textarea-wrap">
                            <textarea placeholder="MESSAGE" className="form__textarea">

                            </textarea>
                        </div>
                        <button className="btn form__btn">
                            SEND MESSAGE
                        </button>

                    </form>
                    <div className="contact-form__map">
                        <img src={`${process.env.PUBLIC_URL}/images/map.jpg`} alt="" className="contact-form__map-img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactForm;