import "./FilterCategory.scss"

function FilterCategory (props) {
    return (
        <div className="filter-category">
            <h3 className="filter-category__title">
                Category
            </h3>
            <ul className="filter-category__list">
                {props.categories.map((item, index)=>{
                    return (
                        <li className="filter-category__item" key={`${item}-${index}`}>
                            <button className={`filter-category__btn ${item === props.activeCategory ? "filter-category__btn--active" : ""}`} data-category={item} onClick={(e)=>{
                                props.setActiveCategory(e.target.dataset.category)
                                props.setBrands(props.getUniqueBrand(e.target.dataset.category))
                                props.setMaxMinPrice(props.getMinMaxPrice(e.target.dataset.category, props.activeBrand))
                                props.setMinMaxValue(props.getMinMaxPrice(e.target.dataset.category, props.activeBrand))
                                
                            }}>
                                {item}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FilterCategory;