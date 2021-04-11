
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'
import searchIcon from '../images/search-icon.png'
import wishIcon from '../images/wish-icon.png'
import carthIcon from '../images/cart-icon.png'
import './Header.scss'
function Header () {

    return(
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" className="logo__img"/>
                        <div className="logo__text">Glee</div>
                    </div>
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink to="/" className="menu__link" activeClassName="menu__link--active">Home</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">About</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">Services</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">Pages</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">News</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="header__actions">
                        <div className="header__actions-item actions-search">
                            <input type="text" className="actions-search__input" />
                            <img src={searchIcon} alt="" className="actions-search__img" />
                        </div>
                        <div className="header__actions-item actions-profile">
                            <div className="actions-profile__wish actions-profile__item">
                                <img src={wishIcon} alt="" className="actions-profile__item-img" />
                                <span className="actions-profile__item-count">0</span>
                            </div>
                            <div className="actions-profile__cart actions-profile__item">
                                <img src={carthIcon} alt="" className="actions-profile__item-img" />
                                <span className="actions-profile__item-count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;