import React from 'react'
import {Link} from "react-router-dom"


function ProductsNew (props) {
    let [emptyList, setEmptyList] = React.useState(0)
    function getEmptyList () {
        let res = props.products.filter((product)=>{
        return product.label === 'new' && (props.activeCategory === "" || props.activeCategory === product.category)
        })
        setEmptyList(res.length)
    }

    React.useEffect(()=>{
        getEmptyList ()
    }, [props.activeCategory])

    return (
        <React.Fragment>
        {
            props.products.map((product)=>{
            return (
                product.label === 'new' && (props.activeCategory === "" || props.activeCategory === product.category)?
                <Link className="products-list__item products-new" key={`${product.id}-new`} to={`/${product.id}`}>
                    <h3 className="products-new__name">
                    {product.name}
                    </h3>
                    <h3 className="products-new__color">
                    {product.color}
                    </h3>
                    <h4 className="products-new__collection">
                        {product.collection}
                    </h4>
                    <div className="products-new__img-wrap">
                        <img src={`${process.env.PUBLIC_URL}/images/${product.img}`} alt="" className="products-new__img" />
                    </div>
                </Link>
                :
                ""
                )
        })
        }
        <p className="products-list__notice">
            {
            emptyList === 0 ? "List is empty" : ""
            }
        </p>
        
        </React.Fragment>

    )
}

export default ProductsNew;