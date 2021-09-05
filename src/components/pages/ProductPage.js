import PageTitle from "../PageTitle"
import {useParams} from "react-router-dom"
import {connect} from "react-redux"
import React from 'react'
import ProductDetails from "../ProductDetails"


function ProductPage (props) {
    let {id} = useParams();
    let [productInfo, setProductInfo] = React.useState(0)


    React.useEffect(()=>{
        let productData = props.products.filter(item=>{
            return item.id === id
        })
        console.log(...productData)
        setProductInfo(...productData)
    }, [])


    return(
        <div>
            <PageTitle title={productInfo.name}></PageTitle>
            <ProductDetails productInfo={productInfo} reviews={props.reviews} id={id} dispatch={props.dispatch} cart={props.cart}></ProductDetails>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        products: state.data,
        reviews: state.reviews,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(ProductPage);