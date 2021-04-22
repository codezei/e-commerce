
import './Products.scss'
import {connect} from 'react-redux'
import React from 'react'
import ProductsNew from './ProductsNew'
import ProductsCategories from './ProductsCategories'
import ProductsWeek from './ProductsWeek'


function Products (props) {

    let [activeCategory, setActiveCategory] = React.useState('')
    function changeActiveCategory (e) {
        setActiveCategory(e.currentTarget.dataset.category)
    }
    

    return (
        <div className="products">
            <div className="container">
                <h2 className="products__title">
                    {props.title}
                </h2>
                <ProductsCategories changeActiveCategory={changeActiveCategory} categories={props.categories} activeCategory={activeCategory} label={props.label}></ProductsCategories>
                <div className="products-list">
                    {props.label === "new" ? <ProductsNew products={props.products} activeCategory={activeCategory} ></ProductsNew> : ""}
                    {props.label === "week" ? <ProductsWeek products={props.products} activeCategory={activeCategory} ></ProductsWeek> : ""}
                    
                    
                </div>

            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.data,
        categories: state.categories
    }
}


export default connect(mapStateToProps)(Products);