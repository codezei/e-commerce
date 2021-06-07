import {Link, useRouteMatch} from 'react-router-dom'
import './PageTitle.scss'
import React from 'react'


function PageTitle (props) {
    let match = useRouteMatch();

    return (
        <section className="page-title">
            <div className="container">
                <h2 className="page-title__title">
                    {props.title}
                </h2>
                <div className="breadcrumbs">
                    <Link to="/" className="breadcrumbs__link">Home</Link> / 
                    <Link to={match.url} className="breadcrumbs__link">{props.title}</Link>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;