import "./FilterBrand.scss"

function FilterBrand (props) {
    return (
        <div className="filter-brand filter">
            <h3 className="filter-brand__title">
                Brand
            </h3>
            <ul className="filter-brand__list">
                {props.brands.map((item, index)=>{
                    return (
                        <li className="filter-brand__item" key={`${item}-${index}`}>
                        <button className={`filter-brand__btn ${item.brandName === props.activeBrand ? "filter-brand__btn--active" : ""}`} data-brand={item.brandName} onClick={(e)=>{
                            props.setActiveBrand(e.target.dataset.brand)
                            props.setCategories(props.getUniqueCategory(e.target.dataset.brand))
                            props.setMaxMinPrice(props.getMinMaxPrice(props.activeCategory, e.target.dataset.brand))
                            props.setMinMaxValue(props.getMinMaxPrice(props.activeCategory, e.target.dataset.brand))

                        }}>
                            {item.brandName} - {`(${item.brandCount})`}
                        </button>
                    </li>
                    )

                })}

            </ul>  
        </div>
    )
}

export default FilterBrand;