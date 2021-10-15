import PageTitle from "../PageTitle"
import {useParams} from "react-router-dom"
import {connect} from "react-redux"
import React from 'react'
import ProductDetails from "../ProductDetails"

import {addToRecentList} from '../../redux/actionCreators'


function ProductPage (props) {
    let {id} = useParams();
    let [productInfo, setProductInfo] = React.useState({
        id: "",
        name: "",
        price: 0,
        color: "",
        collection: "",
        category: "",
        img: "",
        images: ['', '', ''],
        label: "",
        brand: "",
        sku: "",
        tag: "",
        desc: ""

    })

    function setRecentList (prod) {
        let duplicate = false
        for(let i = 0; i < props.recentList.length; i++) {
            
            if (props.recentList[i].id === prod.id) {
                duplicate = true
            }



            
        }

        if (!duplicate) {
            props.dispatch(addToRecentList([...props.recentList, prod]))
            
        }
    }



    React.useEffect(()=>{
        let productData = props.products.filter(item=>{
            return item.id === id
        })
        setProductInfo(...productData)
    
        setRecentList(...productData)

        console.log(...productData)


    }, [])



    return(
        <div>
            <PageTitle title={productInfo.name}></PageTitle>
            <ProductDetails productInfo={productInfo} reviews={props.reviews} id={id} dispatch={props.dispatch} cart={props.cart} recentList={props.recentList}></ProductDetails>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        products: state.data,
        reviews: state.reviews,
        cart: state.cart,
        recentList: state.recentList
    }
}

export default connect(mapStateToProps)(ProductPage);