
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'
// import searchIcon from '../images/search-icon.png'
import wishIcon from '../images/wish-icon.png'
import carthIcon from '../images/cart-icon.png'
import './Header.scss'
import {connect} from "react-redux"
import React from 'react'
import Cart from "./Cart"
import FavList from "./FavList"
import {addProduct} from '../redux/actionCreators'
import {addToFavList} from '../redux/actionCreators'


function Header (props) {

    let [modeVisibilityCart, setModeVisibilityCart] = React.useState(false)
    let [modeVisibilityFavList, setModeVisibilityFavList] = React.useState(false)
    let [total, setTotal] = React.useState(0)
    let [showMobMenu, setShowMobMenu] = React.useState(false)

    function openCart () {
        setModeVisibilityCart(true)
        if (modeVisibilityFavList) {
            setModeVisibilityFavList(false)
        }
    }
    function openFavList () {
        setModeVisibilityFavList(true)
        if (modeVisibilityCart) {
            setModeVisibilityCart(false)
        }
    }
    function closeCart () {
        setModeVisibilityCart(false) 
    }
    function closeFavList () {
        setModeVisibilityFavList(false) 
    }
    function removeCartProduct (id) {
        let newCart = props.cart.filter((item)=>{
            if (id !== item.id) return item
        })
        props.dispatch(addProduct(newCart))
    }
    function removeFavListProduct (id) {
        let newCart = props.favList.filter((item)=>{
            if (id !== item.id) return item
        })
        props.dispatch(addToFavList(newCart))
    }
    function totalOrder () {
        let sum = 0

        props.cart.forEach(item=>{
            console.log(item.price)
            sum = sum + (item.price * item.count)
        })
        setTotal(sum)

    }
    function addProductToCart (prod) {
        let newCart = []
        let cartProduct = {
            id: prod.id,
            price: prod.price,
            name: prod.name,
            img: prod.img,
            count: 1
        }
        let duplicateProduct = props.cart.find(item=>item.id === prod.id)
        if (duplicateProduct) {
            let updatedNewCart = props.cart.map(item=>{
                if (item.id === duplicateProduct.id) {
                    return {
                        ...item, count: duplicateProduct.count + 1
                    }
                } else {
                    return item
                }
            })
            newCart = updatedNewCart
        } else {
            newCart = newCart.concat(props.cart)
            newCart.push(cartProduct)
        }
        props.dispatch(addProduct(newCart))
    }

    React.useEffect(()=>{
        totalOrder ()
    }, [props.cart])

    let iconBtn = <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
        </svg>
    let iconClose = <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
  </svg>
    

    return(
        <header>
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" className="logo__img"/>
                        <div className="logo__text">Glee</div>
                    </div>
                    <ul className="menu menu--desc">
                        <li className="menu__item">
                            <NavLink to="/" className="menu__link" activeClassName="menu__link--active">Home</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">About</NavLink>
                        </li>
                        {/* <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">Services</NavLink>
                        </li> */}
                        <li className="menu__item">
                            <NavLink to="/list" className="menu__link" activeClassName="menu__link--active">Catalog</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/blog" className="menu__link" activeClassName="menu__link--active">Blog</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/contact" className="menu__link" activeClassName="menu__link--active">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="header__actions">
                        {/* <div className="header__actions-item actions-search">
                            <input type="text" className="actions-search__input" />
                            <img src={searchIcon} alt="" className="actions-search__img" />
                        </div> */}
                        <div className="header__actions-item actions-profile">
                            <div className="actions-profile__wish actions-profile__item" onClick={openFavList}>
                                <img src={wishIcon} alt="" className="actions-profile__item-img" />
                                <span className="actions-profile__item-count">{props.favList.length}</span>
                            </div>
                            <div className="actions-profile__cart actions-profile__item" onClick={openCart}>
                                <img src={carthIcon} alt="" className="actions-profile__item-img" />
                                <span className="actions-profile__item-count">{props.cart.length}</span>
                            </div>
                            {
                                modeVisibilityCart ? <Cart cart={props.cart} closeCart={closeCart} removeCartProduct={removeCartProduct} total={total}></Cart> : ""
                            }
                            {
                                modeVisibilityFavList ? <FavList favList={props.favList} closeFavList={closeFavList} removeFavListProduct={removeFavListProduct} addProductToCart={addProductToCart}></FavList> : ""
                            }
                        </div>
                        <button type="button" className="header__btn" onClick={()=>{
                            setShowMobMenu(true)
                            setModeVisibilityCart(false) 
                            setModeVisibilityFavList(false) 
                            }}>
                            {iconBtn}
                        </button>
                    </div>
                </div>
            </div>
            {
                showMobMenu ? <div className="mob-menu">

                <div className="mob-menu__inner">
                    <button type="button" className="mob-menu__close" onClick={()=>{setShowMobMenu(false)}}>
                        {iconClose}
                    </button>
                    <div className="logo logo--mob">
                        <img src={logo} alt="" className="logo__img"/>
                        <div className="logo__text">Glee</div>
                    </div>
                    <ul className="menu menu--mob">
                        <li className="menu__item">
                            <NavLink to="/" className="menu__link" activeClassName="menu__link--active" onClick={()=>{setShowMobMenu(false)}}>Home</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active" onClick={()=>{setShowMobMenu(false)}}>About</NavLink>
                        </li>
                        {/* <li className="menu__item">
                            <NavLink to="/about" className="menu__link" activeClassName="menu__link--active">Services</NavLink>
                        </li> */}
                        <li className="menu__item">
                            <NavLink to="/list" className="menu__link" activeClassName="menu__link--active" onClick={()=>{setShowMobMenu(false)}}>Catalog</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/blog" className="menu__link" activeClassName="menu__link--active" onClick={()=>{setShowMobMenu(false)}}>Blog</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/contact" className="menu__link" activeClassName="menu__link--active" onClick={()=>{setShowMobMenu(false)}}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

            </div> : ""
            }
            
        </header>
    )
}
function mapStateToProps(state) {
    return {
        cart: state.cart,
        favList: state.favList
    }
}

export default connect(mapStateToProps)(Header);