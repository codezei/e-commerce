// import {Link} from 'react-router-dom';
// import logo from '../images/logo.png'
import './Footer.scss'
import {NavLink} from 'react-router-dom'
function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                {/* <div className="footer__top">
                    <div className="footer__item">
                    <div className="logo footer__logo">
                        <img src={logo} alt="" className="logo__img"/>
                        <div className="logo__text">Glee</div>
                    </div>
                        <p className="footer__text">
                            ADDRESS: 4772 Wines Lane
                            Houston, TX 77032
                        </p>
                        <p className="footer__text">
                        Telephone: +832-347-5843
                        </p>
                        <p className="footer__text">
                        Email: contact@Glee.com
                        </p>
                    </div>
                    <div className="footer__item">
                        <h5 className="footer__item-title">
                        Services

                        </h5>
                        <Link to="" className="footer__link">About us</Link>
                        <Link to="" className="footer__link">Return Policy</Link>
                        <Link to="" className="footer__link">Our Blog</Link>
                        <Link to="" className="footer__link">Contact Us</Link>
                        <Link to="" className="footer__link">Terms &amp; Condition</Link>
                    </div>
                    <div className="footer__item">
                    <h5 className="footer__item-title">
                    Account

                    </h5>
                    <Link to="" className="footer__link">Your Account</Link>
                    <Link to="" className="footer__link">Checkout</Link>
                    <Link to="" className="footer__link">Login</Link>
                    <Link to="" className="footer__link">Register</Link>
                    </div>
                    <div className="footer__item">
                    <h5 className="footer__item-title">
                    Newsletter

                    </h5>
                    <p className="footer__text">
                    Subscribe by our newsletter and get update protidin.
                    </p>
                    </div>
                </div> */}
                <div className="footer__bottom">
                    <p className="footer__copyright">©2021 CopyRight Example. All rights reserved. </p>
                    <div className="footer__menu">
                        <NavLink to="/" className="footer__menu-item">Home</NavLink>
                        <NavLink to="/about" className="footer__menu-item">About</NavLink>
                        <NavLink to="/blog" className="footer__menu-item">Blog</NavLink>
                        <NavLink to="/contact" className="footer__menu-item">Contact</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;