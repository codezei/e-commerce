function ProductsNew (props) {
    return (
        props.products.map((product)=>{
            return (
                product.label === 'new' && (props.activeCategory === "" || props.activeCategory === product.category)?
                <div className="products-list__item products-new" key={`${product.id}-new`}>
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
                        <img src={`./images/${product.img}`} alt="" className="products-new__img" />
                    </div>
                </div>
                :
                ""
                )
        })
    )
}

export default ProductsNew;