

function FilterRecent (props) {
    function getRatingLayout (fillCount) {
        let max = 5
        let fill = fillCount
        let res = []
        console.log(fillCount)
        for(let i = 1; i <= max; i++) {
            res.push( <div className={`rating__star ${i <= fill ? 'rating__star--fill' : ''}`} key={`star-${i}`}></div>)
        }
        return res
    }
    return (
        <div className="filter">
            <h3 className="filter__title">
                RECENT PRODUCTS
            </h3>
            <div className="recent">
                {
                    props.recentList.map((product, index)=>{
                        return (
                           <div className="recent__item">
                               <img src={`./images/${product.img}`} alt="" />
                               <div className="recent__info">
                                   <h4 className="recent__name">{product.name}</h4>
                                   <div className="recent__rating rating">
                                       {getRatingLayout(product.rating)}
                                   </div>
                                   <p className="recent__price">{product.price}</p>
                               </div>
                           </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default FilterRecent;