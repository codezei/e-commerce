

function FilterCategoryBlog (props) {
    return (
        <div className="filter">
            <h3 className="filter__title">
                Category
            </h3>
            <ul className="filter__list">
                {props.categories.map((item, index)=>{
                    return (
                        <li className="filter__item" key={`${item}-${index}`}>
                            <button className={`filter__btn ${item === props.activeCategory ? "filter__btn--active" : ""}`} data-category={item} onClick={(e)=>{
                                props.setActiveCategory(e.target.dataset.category)
                            }}>
                                <span>{item}</span> <span>&gt;</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FilterCategoryBlog;