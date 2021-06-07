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
                    <div className="blog__sidebar">
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