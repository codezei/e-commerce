
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'
import searchIcon from '../images/search-icon.png'
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
    

    return(
        <header>
            <div className="container-fluid">
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
                        <div className="header__actions-item actions-search">
                            <input type="text" className="actions-search__input" />
                            <img src={searchIcon} alt="" className="actions-search__img" />
                        </div>
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
                    </div>
                </div>
            </div>
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