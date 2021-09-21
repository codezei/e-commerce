import {connect} from "react-redux"
import BlogList from "./BlogList"
import React from 'react'
import FilterCategoryBlog from "./FilterCategoryBlog"
import FilterSearch from "./FilterSearch"


function Blog (props) {
    const rangeMax = 4
    let [categories, setCategories] = React.useState([])
    let [activeCategory, setActiveCategory] = React.useState("")
    let [pageNumber, setPageNumber] = React.useState(1)
    let [rangePage, setRangePage] = React.useState(pageNumber * rangeMax)
    let [searchInput, setSearchInput] = React.useState(0)
    let [showSidebar, setShowSidebar] = React.useState(false)

    
    React.useEffect(()=>{
        setCategories(getUniqueCategory())
    }, [])    
    function getUniqueCategory () {
        let arr = []
        props.articles.forEach(item=>{
                arr.push(item.category) 

        })
        let res = []
        arr.forEach(item=>{
            if (!res.includes(item)) {
                res.push(item)
            }
        })
        return res
    }
    return (
        <div className="blog">

            <div className="container">
                <div className="blog__btn-wrap">
                {
                    showSidebar ? <button className="blog__filter-btn" type="button" onClick={()=>{setShowSidebar(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </button> : <button className="blog__filter-btn" type="button" onClick={()=>{setShowSidebar(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                    </svg>
                </button>
                }
                </div>
                <div className="blog__wrap">
                    <BlogList 
                        articles={props.articles}
                        rangePage={rangePage}
                        rangeMax={rangeMax}
                        activeCategory={activeCategory}
                        setRangePage={setRangePage}
                        setPageNumber={setPageNumber}
                        pageNumber={pageNumber}
                        searchInput={searchInput}
                        
                    ></BlogList>
                    <div className={`blog__sidebar ${showSidebar ? 'blog__sidebar--open' : ''}`}>
                        <FilterSearch
                            setSearchInput={setSearchInput}
                        ></FilterSearch>
                        <FilterCategoryBlog
                            categories={categories}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        ></FilterCategoryBlog>
                    </div>

                </div>
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        articles: state.articles 
    }
}

export default connect(mapStateToProps)(Blog);