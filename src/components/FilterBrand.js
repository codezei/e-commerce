import "./Filter.scss"

function FilterBrand (props) {
    return (
        <div className="filter">
            <h3 className="filter__title">
                Brand
            </h3>
            <ul className="filter__list">
                {props.brands.map((item, index)=>{
                    return (
                        <li className="filter__item" key={`${item}-${index}`}>
                        <button className={`filter__btn ${item.brandName === props.activeBrand ? "filter__btn--active" : ""}`} data-brand={item.brandName} onClick={(e)=>{
                            props.setActiveBrand(e.target.dataset.brand)
                            props.setCategories(props.getUniqueCategory(e.target.dataset.brand))
                            props.setMaxMinPrice(props.getMinMaxPrice(props.activeCategory, e.target.dataset.brand))
                            props.setMinMaxValue(props.getMinMaxPrice(props.activeCategory, e.target.dataset.brand))

                            // props.setCountProducts(props.getCountProducts(props.activeCategory, e.target.dataset.brand, props.getMinMaxPrice(props.activeCategory, e.target.dataset.brand)))
                            

                        }}>
                            <span>{item.brandName}</span> 
                            <span>{`(${item.brandCount})`}</span>
                        </button>
                    </li>
                    )

                })}

            </ul>  
        </div>
    )
}

export default FilterBrand;