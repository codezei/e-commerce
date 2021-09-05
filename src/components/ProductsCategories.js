

function ProductsCategories (props) {
    return (
        <ul className="products-categories">
            {
                props.categories.map((category)=>{
                    return (
                    <li className="products-categories__item"  key={`category-${category.name}-${props.label}`}>
                        <button type="button" className={`products-categories__btn ${props.activeCategory === category.value ? "products-categories__btn--active" : ""}`} data-category={category.value} onClick={props.changeActiveCategory}>{category.name}</button>
                    </li>
                    )
                })
            }
    </ul>
    )
}

export default ProductsCategories;