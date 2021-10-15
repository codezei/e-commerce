import { Link } from 'react-router-dom'
import './Articles.scss'

function Articles() {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles__nav">
                    <h2 className="articles__title">
                        Our Insights &#38; Articles
                    </h2>
                    <Link to="/blog" className="articles__link">View All &gt;</Link>
                </div>
            </div>
            <div className="articles__list-wrap">
                <div className="container">
                    <div className="articles__list">
                        <div className="articles__item">
                            <div className="articles__item-wrap">
                                <img src={`${process.env.PUBLIC_URL}/images/article1.jpg`} alt="" className="articles__item-img" />
                                <h5 className="articles__item-category">
                                        News
                                    </h5>
                            </div>
                            
                            <div className="articles__item-inner">
                                <div className="articles__item-content">
                                    
                                    <p className="articles__item-desc">
                                        Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>

                                </div>
                                <div className="articles__item-footer">
                                    <p className="articles__item-date">
                                        28 JANUARY, 2020
                                    </p>
                                    <p className="articles__item-author">
                                        BY ADMIN
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="articles__item">
                            <div className="articles__item-wrap">
                                <img src={`${process.env.PUBLIC_URL}/images/article2.jpg`} alt="" className="articles__item-img" />
                                <h5 className="articles__item-category">
                                        News
                                </h5>
                            </div>
                            
                            <div className="articles__item-inner">
                                <div className="articles__item-content">
                                    
                                    <p className="articles__item-desc">
                                        Aonsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>

                                </div>
                                <div className="articles__item-footer">
                                    <p className="articles__item-date">
                                        28 JANUARY, 2020
                                    </p>
                                    <p className="articles__item-author">
                                        BY ADMIN
                                    </p>
                                </div>
                            </div>


                        </div>
                        <div className="articles__item">
                            <div className="articles__item-wrap">
                                <img src={`${process.env.PUBLIC_URL}/images/article3.jpg`} alt="" className="articles__item-img" />
                                <h5 className="articles__item-category">
                                        News
                                </h5>
                            </div>  
                            
                            <div className="articles__item-inner">
                                <div className="articles__item-content">
                                    
                                    <p className="articles__item-desc">
                                        Rncididunt ut labore et dolore magna aliqua. Ut enim
                                    </p>
                                </div>
                                <div className="articles__item-footer">
                                    <p className="articles__item-date">
                                        28 JANUARY, 2020
                                    </p>
                                    <p className="articles__item-author">
                                        BY ADMIN
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Articles