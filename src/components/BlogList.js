import "./BlogList.scss"
import {Link} from "react-router-dom"
import React from 'react'
import Pagination from "./Pagination"


function BlogList (props) {
    let condition = new RegExp(props.searchInput, 'ig')

    
    let allArticles = props.articles.map((article, index)=>{
        return (
            (props.activeCategory === "" || props.activeCategory === article.category) && (!props.searchInput || article.title.match(condition)) ?
            <div className="blog__item blog-article" key={`article-${index}`}>
            <div className="blog-article__image-wrap">
                <img src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" className="blog-article__image" />
                <div className="blog-article__info">
                    <div className="blog-article__date">
                        {article.date}
                    </div>
                    <div className="blog-articl__author">
                        {article.author}
                    </div>
                </div>
            </div>
            <h3 className="blog-article__title">
            {article.title}
            </h3>
            <p className="blog-article__text">
                {article.text}
            </p>
            <Link className="btn btn--inversion" to={article.id}>View More</Link>
        </div>
        :
        ""
        )
    })

    let articlesWithoutEmpty = allArticles.filter((item)=>{
        return !!item
    })
    
    let articlesOfPage = articlesWithoutEmpty.filter((item, index)=>{
        return !!item && (((index + 1) <= props.rangePage) && ((index) >= (props.rangePage - props.rangeMax)))
    })

    function correctPageNumber () {
        if (articlesOfPage.length === 0 && (!!props.activeCategory || !!props.activeBrand)) {
            props.setPageNumber(Math.ceil(articlesWithoutEmpty.length / props.rangeMax) )
            props.setRangePage(Math.ceil(articlesWithoutEmpty.length / props.rangeMax) * props.rangeMax)
        }
    }
    React.useEffect(()=>{
        correctPageNumber()
    }, [articlesWithoutEmpty])


    return (
        <div className="blog__list-wrap">
            <div className="blog__list">
                    {
                        [...articlesOfPage]

                    }
                    {
                       !articlesOfPage.length ? 
                       <p className="blog__notice">List is empty</p>
                       : ""
                    }
            </div>
            <Pagination 
                rangeMax={props.rangeMax} 
                setRangePage={props.setRangePage} 
                pageNumber={props.pageNumber} 
                setPageNumber={props.setPageNumber}
                productsWithoutEmpty={articlesWithoutEmpty} 
            >
            </Pagination>
        </div>

    )
}

export default BlogList;