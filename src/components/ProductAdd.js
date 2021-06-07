import React from 'react'
import ProductAddDescription from "./ProductAddDescription"
import ProductAddAdditional from "./ProductAddAdditional"
import ProductAddReviews from "./ProductAddReviews"


function ProductAdd (props) {

    let [activeTab, setActiveTab] = React.useState("desc")

    let content = {
        desc: <ProductAddDescription></ProductAddDescription>,
        add: <ProductAddAdditional></ProductAddAdditional>,
        rev: <ProductAddReviews productReviews={props.productReviews} reviews={props.reviews} dispatch={props.dispatch} id={props.id}></ProductAddReviews>
    }
    let tabs = [
        {
            name: "Description",
            id: "desc",
        },
        {
            name: "Additional information",
            id: "add",
        },
        {
            name: "Reviews",
            id: "rev",
        }
    ]

    return (
        <div className="product-add">
            <div className="product-add__nav">
                {
                    tabs.map((item)=>{
                        return (
                            <button className={`product-add__btn ${activeTab === item.id ? "product-add__btn--active" : ""}`} id="desc" onClick={()=>{
                                setActiveTab(item.id)
                            }} key={item.id}>
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
            <div className="product-add__inner">
                {content[activeTab]}
            </div>
        </div>
    )
}


export default ProductAdd;