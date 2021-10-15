import "./ProductDetails.scss"
import React from 'react'
import ProductAdd from './ProductAdd.js'
import ProductGallery from './ProductGallery.js'
import {addProduct} from '../redux/actionCreators'



function ProductDetails (props) {
    let [productReviews, setProductReviews] = React.useState(0)
    // let [averageRating, setAverageRating] = React.useState(0)
    let [stars, setStars] = React.useState([])

    let [countProduct, setCountProduct] = React.useState(1)

    function getReviews () {
        let res = props.reviews.filter(item=>{
            return item.productId === props.id
        })
        setProductReviews(...res)
    }
    
    function getAverageRating(data) {

        if (!data) return
        let values = data.map((item)=>{
            return item.rating
        })
        let res = values.reduce((prev, current)=>{
            return (prev + current)
        })
        // setAverageRating(Math.round(res / values.length))
        getRatingLayout(Math.round(res / values.length))
    }
    function getRatingLayout (fillCount) {
        let max = 5
        let fill = fillCount
        let res = []
        for(let i = 1; i <= max; i++) {
            res.push( <div className={`rating__star ${i <= fill ? 'rating__star--fill' : ''}`} key={`star-${i}`}></div>)
        }
        setStars(res)
    }

    function increaseCountProduct () {
        setCountProduct(countProduct + 1)
    }
    function decreaseCountProduct () {
        if (countProduct === 1) return
        setCountProduct(countProduct - 1)
    }
    function addProductToCart (prod) {
        let newCart = []
        let cartProduct = {
            id: prod.id,
            price: prod.price,
            name: prod.name,
            img: prod.img,
            count: countProduct
        }
        let duplicateProduct = props.cart.find(item=>item.id === prod.id)
        if (duplicateProduct) {
            let updatedNewCart = props.cart.map(item=>{
                if (item.id === duplicateProduct.id) {
                    return {
                        ...item, count: duplicateProduct.count + countProduct
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
        getReviews()
    },[props.reviews])
    React.useEffect(()=>{
        if (!!productReviews) {
            getAverageRating(productReviews.productReviews) 
        }

    }, [productReviews])

    return (
        <div className="product-details">
            <div className="container">
                <div className="product-details__wrap">
                    <ProductGallery productInfo={props.productInfo}></ProductGallery>
                    <div className="product-details__info product-details__col">
                        <h3 className="product-details__title">{props.productInfo.name}</h3>
                        <div className="product-details__rating rating">
                            {[...stars]}
                        </div>
                        <p className="product-details__price">
                            {props.productInfo.price} &#x24;
                        </p>
                        <p className="product-details__desc">
                            {props.productInfo.desc}

                        </p>
                        <div className="product-details__add">
                            <div className="count">
                                <button className="count__change" onClick={decreaseCountProduct}>-</button>
                                <div className="count__value">{countProduct}</div>
                                <button className="count__change" onClick={increaseCountProduct}>+</button>
                            </div>
                            <button className="btn product-details__btn" onClick={()=>{
                                addProductToCart(props.productInfo)
                            }}>ADD TO CART</button>
                        </div>
                        <p className="product-details__sub-info">
                            SKU: {props.productInfo.sku}
                        </p>
                        <p className="product-details__sub-info">
                            Category: {props.productInfo.category}
                        </p>
                        <p className="product-details__sub-info">
                            Tag: {props.productInfo.tag}
                        </p>

                    </div>
                </div>
                <ProductAdd productReviews={productReviews} reviews={props.reviews} dispatch={props.dispatch} id={props.id}></ProductAdd>
            </div>

        </div>
    )
}

export default ProductDetails;