function FilterSearch (props) {
    return(
        <div className="filter">
            <div className="search">
                
                <input type="text" onChange={(e)=>{
                    props.setSearchInput(e.target.value)
                }} value={props.searchInput}/>
            </div>
        </div>
    )
}

export default FilterSearch;